import { FC } from "react";
import Image from "next/image";

import ContentWrapper from "@/components/ContentWrapper";
import TNextImage from "@/types/TNextImage";
import React from "@/components/Icons/React";
import Sql from "@/components/Icons/Sql";
import Git from "@/components/Icons/Git";
import Aws from "@/components/Icons/Aws";
import Node from "@/components/Icons/Node";
import Typescript from "@/components/Icons/Typescript";
import Figma from "@/components/Icons/Figma";
import Tailwind from "@/components/Icons/Tailwind";
import Nextjs from "@/components/Icons/Nextjs";

export default function Skills(): JSX.Element {
  return (
    <ContentWrapper id="skills" element="section" className="mt-24 scroll-mt-28 gap-y-5 text-center text-purple-heart-950 md:mt-32 lg:mt-48 lg:flex lg:justify-between lg:text-left">
      <div className="mx-auto md:max-w-[778px] lg:mx-0 lg:max-w-[486px]">
        <h2 className="text-3xl font-bold md:text-5xl lg:text-[90px]">Skills</h2>

        <p className="mt-6 md:text-lg lg:text-xl">
          From HTML, CSS, and JavaScript, to tools like React, Next.js, and Tailwind CSS, I utilize core web technologies to create outstanding digital experiences.
        </p>
      </div>
      <ul className="mt-8 grid w-full grid-cols-4 gap-4 md:grid-cols-8 lg:mt-0 lg:w-[588px] lg:grid-cols-[6]">
        {skills.map((i, key) => (
          <SkillComponent {...i} key={key} />
        ))}
      </ul>
    </ContentWrapper>
  );
}

type TSkill = { icon: React.ElementType; className?: string };

const SkillComponent: FC<TSkill> = (props) => {
  return (
    <li
      className={`flex min-h-[96px] cursor-pointer items-center justify-center rounded-lg bg-sulu-300 px-2 duration-150 hover:bg-sulu-200 
      ${props.className || ""}`}>
      <props.icon />
    </li>
  );
};

const skills: TSkill[] = [
  {
    className: "md:col-span-2 md:row-span-2",
    icon: React
  },
  {
    className: "col-[2/4] md:col-[3/5]",
    icon: Nextjs
  },
  {
    className: "md:col-span-2",
    icon: Tailwind
  },
  {
    className: "md:row-start-2 md:col-start-6",
    icon: Figma
  },
  {
    className: "md:col-[7/9] md:row-span-3",
    icon: Typescript
  },
  {
    className: "col-span-2 md:col-span-3",
    icon: Node
  },
  {
    className: "col-span-2 md:col-span-3",
    icon: Aws
  },
  {
    className: "md:col-start-1 md:row-start-3 md:col-span-2",
    icon: Git
  },
  {
    className: "md:col-start-6 md:row-start-3",
    icon: Sql
  },
];
