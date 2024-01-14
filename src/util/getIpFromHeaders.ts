import { headers } from "next/headers";

export default function getIpFromHeaders() {
  const reqHeaders = headers();

  let ip = reqHeaders.get("x-real-ip") || "";
  const forwardedFor = reqHeaders.get("x-forwarded-for");

  if (!ip && forwardedFor) ip = forwardedFor.split(",").at(0) ?? "127.0.0.1";
  else ip = "127.0.0.1";

  return ip;
}
