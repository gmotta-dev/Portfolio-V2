export default function getIpFromHeaders(headers: Headers) {
  let ip = headers.get("x-real-ip") || "";
  const forwardedFor = headers.get("x-forwarded-for");

  if (!ip && forwardedFor) ip = forwardedFor.split(",").at(0) ?? "127.0.0.1";
  else ip = "127.0.0.1";

  return ip;
}
