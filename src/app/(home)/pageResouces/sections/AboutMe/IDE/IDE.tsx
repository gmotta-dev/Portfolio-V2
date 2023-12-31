"use client";

import { Branch, Checkmark } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import { motion } from "framer-motion";

import useTypewriter from "@/hooks/useTypewritter";
import Code from "./Tabs/Code/Code";
import PresentationPreview from "./Tabs/PresentationPreview";
import { TIDE } from "./types";

export default function IDE() {
  const typewriter: TIDE["typewriterTexts"] = {
    classNames: {
      primaryTextBold: useTypewriter("text-sulu-300", 250),
      contentWrapper: useTypewriter("flex flex-col py-8", 100),
      h3: useTypewriter("font-bold text-sulu-300 text-4xl ", 150),
      iconsItems: useTypewriter("!text-sulu-300 !w-10 !h-10", 150),
      iconsWrapper: useTypewriter("pt-8 flex items-end flex-1", 150),
    },

    textsValues: {
      h3: "Welcome to my portfolio",
      primaryTextBold: "I'm Gabriel Motta, a Web Developer. ",
      primaryText: useTypewriter("And I'm dedicated to creating exceptional web experiences with clean and minimalistic user interfaces that look great and function seamlessly.", 10).text,
      secondaryText: useTypewriter(
        "I currently work at VAROS as a Full Stack Web Developer, utilizing the full power of Next.js in its latest version, Next 14. Which allows me to create visually appealing and high-performance web applications",
        10,
      ).text,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 100, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="relative mt-12 flex w-full flex-col overflow-hidden rounded-lg bg-purple-heart-700 shadow-md shadow-gray-500 [animation-timeline:view()] sm:flex-row sm:flex-wrap">

      <PresentationPreview typewriterTexts={typewriter} />
      
      <Code typewriterTexts={typewriter} />

      <IDEBottomInfo
        bottomInfo={[
          { Icon: Branch, text: "main" },
          { Icon: Checkmark, text: "Prettier" },
        ]}
      />
    </motion.div>
  );
}

const IDEBottomInfo = (props: { bottomInfo: { Icon: CarbonIconType; text: string }[] }) => {
  return (
    <ul className="flex w-full justify-between px-6 py-1 text-gray-100">
      {props.bottomInfo.map((i, key) => (
        <li key={key} className="flex items-center gap-2">
          <i.Icon className="h-3 w-3" />
          <span className="text-xs font-medium">{i.text}</span>
        </li>
      ))}
    </ul>
  );
};
