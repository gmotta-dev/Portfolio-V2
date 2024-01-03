import { FC } from "react";
import { LogoGithub, Wikis } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import Image from "next/image";
import Link from "next/link";

import ExpandableWrapper from "./ExpandableWrapper";

export default function Projects(): JSX.Element {
  return (
    <ExpandableWrapper>
      <h2 className="mx-auto text-center text-3xl font-bold text-purple-heart-950 [@media(min-width:1620px)]:hidden">Projects</h2>
      {projectItemsOpts.map((i, key) => (
        <ProjectItem {...i} key={key} />
      ))}
    </ExpandableWrapper>
  );
}

type TProjectItem = {
  title: string;
  description: string;
  tags: string[];
  date: string;
  repoURL: string;
  websiteURL: string;
  thumbSrc: string;
};

const ProjectItem: FC<TProjectItem> = (props) => {
  return (
    <div className="relative mt-12 flex flex-col items-start justify-between gap-4 rounded-lg md:mt-0 md:flex-row md:justify-between md:gap-6 md:py-3 md:transition-all md:duration-300 lg:gap-16">
      <Image src={props.thumbSrc} width={682} height={317} layout="responsive" alt={props.title} className="rounded-xl md:min-w-[320px] md:max-w-[486px]" />
      <div className="flex w-full max-w-[588px] flex-col">
        <div className="flex items-center gap-4 ">
          <h2 className="mr-auto text-3xl font-bold text-purple-heart-700 md:text-4xl lg:text-5xl">{props.title}</h2>
          <ProjectItemLinkIcon href={props.repoURL} icon={LogoGithub} name="Repo" />
          <ProjectItemLinkIcon href={props.websiteURL} icon={Wikis} name="Live Website" />
        </div>
        <p className="mt-2 line-clamp-3 w-full tracking-wider text-purple-heart-950 md:max-w-lg lg:text-lg">{props.description}</p>
        <div className="mt-4 flex flex-col gap-3">
          <ul className="flex flex-wrap gap-2">
            {props.tags.map((i, key) => (
              <ProjectItemSkill key={key}>{i}</ProjectItemSkill>
            ))}
          </ul>
          <small className="text-xs font-medium opacity-70">{props.date}</small>
        </div>
      </div>
    </div>
  );
};

type TProjectItemLinkIcon = { icon: CarbonIconType; href: string; name: string };

const ProjectItemLinkIcon: FC<TProjectItemLinkIcon> = (props) => {
  return (
    <Link href={props.href} className="z-20" aria-label={props.name}>
      <props.icon className="h-8 w-8 text-purple-heart-700" />
    </Link>
  );
};

const ProjectItemSkill: FC<{ children: string }> = (props) => {
  return <li className="rounded-full bg-sulu-300 px-4 py-2 text-center text-sm font-medium text-black">{props.children}</li>;
};

const projectItemsOpts: TProjectItem[] = [
  {
    title: "Portfolio V1",
    description: "My first portfolio hosted on Netlify. It showcases my skills, projects, services and provides a way to contact me.",
    tags: ["React", "Typescript", "Styled Components", "Email js"],
    date: "06/13/2022",
    repoURL: "https://github.com/gpmotta21/Portfolio",
    websiteURL: "https://gabrielp.netlify.app/",
    thumbSrc: "projects-portfolio-v1.webp",
  },
  {
    title: "Limitless",
    description: "Limitless: Elevate your fitness journey with our app-inspired Landing Page. Unleash the power of exercise innovation in one click!",
    tags: ["HTML", "CSS", "SASS", "TypeScript"],
    date: "05/03/2022",
    repoURL: "https://github.com/gpmotta21/Limitless",
    websiteURL: "https://gpmotta21.github.io/Limitless/",
    thumbSrc: "limitless-thumb.webp",
  },
  {
    title: "Unote",
    description: "Unote is a Todo List web app, and also my first project using Full Stack tecnologies, which in this case, I used the MERN Stack",
    tags: ["React", "MongoDB", "Nodejs", "Express"],
    date: "02/21/2022",
    repoURL: "https://github.com/gpmotta21/Unote",
    websiteURL: "https://unote.netlify.app/",
    thumbSrc: "projects-unote.webp",
  },
  {
    title: "Bella Italia",
    description: "Bella Italia is a visually stunning landing page dedicated to an Italian restaurant.",
    tags: ["HTML", "CSS", "Javascript"],
    date: "04/17/2022",
    repoURL: "https://github.com/gpmotta21/Bella-Italia",
    websiteURL: "https://gpmotta21.github.io/Bella-Italia",
    thumbSrc: "projects-bella-italia.webp",
  },
  {
    title: "Spacejet",
    description: "Spacejet is one of my first projects using REST APIs, to be more specific, in this case I used the NASA API",
    tags: ["HTML", "CSS", "Typescript", "SASS"],
    date: "05/22/2022",
    repoURL: "https://github.com/gpmotta21/Spacejet",
    websiteURL: "https://spacejet.netlify.app/",
    thumbSrc: "projects-spacejet.webp",
  },
];
