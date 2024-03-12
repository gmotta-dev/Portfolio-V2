import { headers as nextHeaders } from "next/headers";

export default function getIpFromHeaders(optHeaders?: Headers) {
  const headers = optHeaders || nextHeaders();
  let ip = "";
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers.get("x-forwarded-for");

  if (forwardedFor) {
    ip = forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  ip = headers.get("x-real-ip") ?? FALLBACK_IP_ADDRESS;

  return ip;
}
