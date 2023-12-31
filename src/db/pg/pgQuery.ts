import pgPool from "./pool";

export default async function pgQuery(query: string | { text: string; values: string[] }) {
  const client = await pgPool.connect();
  try {
    return await client.query(query);
  } finally {
    client.release();
  }
}
