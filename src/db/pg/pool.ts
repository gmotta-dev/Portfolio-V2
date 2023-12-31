import { Pool } from "pg";

const pgPool = new Pool({
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DB_NAME,
  password: process.env.RDS_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pgPool;
