"use client";

import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/clickables/Button";
import ContentWrapper from "@/components/ContentWrapper";

export default function ExpandableWrapper(props: { children: ReactNode }): JSX.Element {
  const [expand, setExpand] = useState(false);

  return (
    <section className="w-full scroll-mt-28" id="projects">
      <div className="relative">
        <StickyH2 />
        <span
          className={twMerge(
            "pointer-events-none absolute bottom-0 left-0 z-10 h-[300px] w-full bg-gradient-to-t from-white to-transparent transition-opacity duration-500",
            expand ? "opacity-0" : "",
          )}
        />
        <ContentWrapper element="section" className="relative mt-32 lg:mt-48">
          <div className={twMerge("relative overflow-hidden transition-all duration-1000 ease-in-out", expand ? "max-h-[2500px]" : "max-h-[700px]")}>{props.children}</div>
        </ContentWrapper>
      </div>
      <Button stylization={{ type: "base", color: "sulu" }} onClick={() => setExpand(!expand)} className="bottom-0 z-10 mx-auto mt-8 w-full max-w-xs">
        Show {expand ? "Less" : "more"}
      </Button>
    </section>
  );
}

const StickyH2 = () => {
  return (
    <div className="absolute left-0 top-0 hidden h-full w-full max-w-[31%] items-start justify-start rounded-md bg-sulu-300 py-16 min-[1620px]:flex">
      <h2 className="sticky left-[4%] top-0 -mt-10 pt-10 text-8xl font-black text-sulu-50 [writing-mode:vertical-lr]">PROJECTS</h2>
    </div>
  );
};
