import { twMerge } from "tailwind-merge";

export default function Hamburger(props: THamburger) {
  const spans = [`${props.expand ? "translate-y-[10px] rotate-[135deg]" : ""}`, `${props.expand ? "opacity-0" : ""}`, `${props.expand ? "-translate-y-2 -rotate-[135deg]" : ""}`];

  return (
    <button name="Hamburger" aria-label="Hamburguer" className="ml-auto flex h-6 w-8 flex-col items-center justify-center gap-[6px] lg:hidden xl:hidden" onClick={() => props.setExpand(!props.expand)}>
      {spans.map((i, key) => (
        <span key={key} className={twMerge("h-[3px] w-full bg-purple-heart-950 transition-all duration-300", i)} />
      ))}
    </button>
  );
}

type THamburger = { expand: boolean; setExpand: (expand: boolean) => void };
