export default async function Page() {
  const d = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo", { next: { revalidate: 60 } }).then((res) => res.json());

  return <div>{d.datetime}</div>;
}
