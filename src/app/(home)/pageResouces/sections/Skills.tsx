import { FC } from "react";
import Image from "next/image";

import ContentWrapper from "@/components/ContentWrapper";
import TNextImage from "@/types/TNextImage";

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

type TSkill = { img: TNextImage; className?: string };

const SkillComponent: FC<TSkill> = (props) => {
  return (
    <li
      className={`flex min-h-[96px] cursor-pointer items-center justify-center rounded-lg bg-sulu-300 px-2 duration-150 hover:bg-sulu-200 
      ${props.className || ""}`}>
      <Image {...props.img} src={props.img.src} />
    </li>
  );
};

const skills: TSkill[] = [
  {
    className: "md:col-span-2 md:row-span-2",
    img: {
      src: "skills-react.svg",
      width: 60,
      height: 60,
      alt: "React Logo",
    },
  },
  {
    className: "col-[2/4] md:col-[3/5]",
    img: {
      src: "skills-next.svg",
      width: 60,
      height: 60,
      alt: "Next Logo",
    },
  },
  {
    className: "md:col-span-2",
    img: {
      src: "skills-tailwind.svg",
      width: 60,
      height: 60,
      alt: "Tailwind Logo",
    },
  },
  {
    className: "md:row-start-2 md:col-start-6",
    img: {
      src: "skills-figma.svg",
      width: 56,
      height: 56,
      alt: "React Logo",
    },
  },
  {
    className: "md:col-[7/9] md:row-span-3",
    img: {
      src: "skills-typescript.svg",
      width: 51,
      height: 52,
      alt: "Typescript Logo",
    },
  },
  {
    className: "col-span-2 md:col-span-3",
    img: {
      src: "skills-node.svg",
      width: 115,
      height: 60,
      alt: "Node Logo",
    },
  },
  {
    className: "col-span-2 md:col-span-3",
    img: {
      src: "skills-aws.svg",
      width: 83,
      height: 71,
      alt: "AWS Logo",
    },
  },
  {
    className: "md:col-start-1 md:row-start-3 md:col-span-2",
    img: {
      src: "skills-git.svg",
      width: 50,
      height: 50,
      alt: "Git Logo",
    },
  },
  {
    className: "md:col-start-6 md:row-start-3",
    img: {
      src: "skills-sql.svg",
      width: 50,
      height: 50,
      alt: "SQL Logo",
    },
  },
];
