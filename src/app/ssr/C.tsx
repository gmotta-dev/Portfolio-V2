export default async function C() {
  const d = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo", { cache: "no-cache" }).then((res) => res.json());

  return <div>{d.datetime}</div>;
}
