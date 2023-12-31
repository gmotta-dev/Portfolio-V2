declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_CLOUDFRONT_URL: string;
    RDS_USERNAME: string;
    RDS_HOSTNAME: string;
    RDS_DB_NAME: string;
    RDS_PASSWORD: string;
  }
}
