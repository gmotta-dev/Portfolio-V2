import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextResponse, type NextRequest } from "next/server";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export async function middleware(req: NextRequest) {
  if (req.method === "POST") {
    const reqHeaders = new Headers(req.headers);

    const ratelimit = new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(5, "60 s"),
    });

    const ip = req.ip ?? "127.0.0.1";
    const result = await ratelimit.limit(ip);
    reqHeaders.set("X-RateLimit-Reset", result.reset.toString());
    reqHeaders.set("X-RateLimit-Limit", result.limit.toString());
    reqHeaders.set("X-RateLimit-Remaining", result.remaining.toString());
    reqHeaders.set("X-RateLimit-Success", result.success.toString());

    console.log("User IP:", ip);
    console.log("True IP", req.ip);

    return NextResponse.next({ request: { headers: reqHeaders } });
  }
}
