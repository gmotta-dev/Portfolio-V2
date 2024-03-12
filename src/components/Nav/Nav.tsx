"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

import useHasScrolled from "@/hooks/useHasScrolled";
import ContentWrapper from "../ContentWrapper";
import MyLogo from "../MyLogo";
import Hamburger from "./Hamburguer";

export default function Nav() {
  const [expand, setExpand] = useState(false);
  const hasScrolled = useHasScrolled();

  return (
    <ContentWrapper element="nav" className="fixed left-1/2 top-5 z-[100] mx-auto w-full max-w-[690px] -translate-x-1/2">
      <div
        className={twMerge(
          "relative flex h-14 items-center justify-between rounded-2xl px-7 text-purple-heart-950 transition-all duration-300",
          hasScrolled && hasScrolled.y !== 0 ? "bg-zinc-50 shadow-md shadow-black/30" : "",
        )}>
        <MyLogo className="h-10 w-10" />
        <div
          className={twMerge(
            "w-full flex-col items-center justify-evenly gap-4 rounded-3xl bg-zinc-50 py-6 text-sm font-medium  shadow-md shadow-black/20 lg:relative lg:top-0 lg:!flex lg:flex-row lg:justify-end lg:gap-10 lg:bg-transparent lg:py-0 lg:shadow-none",
            expand ? "flex" : "hidden",
          )}>
          {["About me", "Skills", "Projects", "Contact"].map((i, key) => (
            <a key={key} href={"#" + i.toLowerCase().replace(" ", "-")} className="flex h-10 items-center justify-center px-6 md:px-0" onClick={() => setExpand(false)}>
              {i}
            </a>
          ))}
        </div>
        <Hamburger expand={expand} setExpand={setExpand} />
      </div>
    </ContentWrapper>
  );
}
