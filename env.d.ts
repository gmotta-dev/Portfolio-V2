declare namespace NodeJS {
  interface ProcessEnv extends Record<"NEXT_PUBLIC_CLOUDFRONT_URL" | "RDS_PASSWORD" | "RDS_DB_NAME" | "RDS_HOSTNAME" | "RDS_USERNAME" | 'UPSTASH_REDIS_REST_TOKEN' | 'UPSTASH_REDIS_REST_URL', string> {}
}
