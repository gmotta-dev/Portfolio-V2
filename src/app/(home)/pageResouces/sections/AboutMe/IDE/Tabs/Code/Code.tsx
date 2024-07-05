import { LogoReact } from "@carbon/icons-react";

import Tab from "../../Tab";
import { TIDE } from "../../types";
import Tag from "./Tag";

export default function Code({ typewriterTexts: { classNames, textsValues } }: TIDE) {
  return (
    <Tab
      Icon={LogoReact}
      filename="Presentation.tsx"
      classNames={{
        container: "border-l border-l-purple-heart-800",
        "content-wrapper": "max-h-[500px] text-sm md:overflow-scroll scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-purple-heart-400 relative",
      }}>
      <LineNumbers />
      <p className="whitespace-nowrap">
        import <span className="text-fuchsia-300">&#123;</span> LogoDiscord, LogoGithub, LogoLinkedin <span className="text-fuchsia-300">&#125;</span> from{" "}
        <span className="text-sulu-300">"@carbon/icons-react"</span>;
      </p>
      <br />
      <span className="text-fuchsia-300">export default function</span> Presentation<span className="text-yellow-400">( )&#123;</span>
      <div className="ml-3">
        return <span className="text-fuchsia-300">&#40;</span>
      </div>
      <code className="ml-6 block font-poppins text-sm">
        <Tag attributes={[{ key: "className", value: classNames.contentWrapper.text }]} element="div">
          <Tag element="h3" attributes={[{ key: "className", value: classNames.h3.text }]}>
            {textsValues.h3}
          </Tag>
          <Tag element="p" classNames={{}}>
            <Tag element="b" attributes={[{ key: "className", value: classNames.primaryTextBold.text }]} classNames={{ container: "flex", content: "ml-0 w-auto whitespace-nowrap" }}>
              {textsValues.primaryTextBold}
            </Tag>
            {textsValues.primaryText}
          </Tag>
          <Tag element="p">{textsValues.secondaryText}</Tag>
          <br />
          <Tag element="div" attributes={[{ key: "className", value: classNames.iconsWrapper.text }]}>
            <Tag
              element="a"
              attributes={[
                { key: "className", value: classNames.iconsItems.text },
                { key: "href", value: "https://www.linkedin.com/in/gpmotta21" },
              ]}>
              <Tag element="LogoLinkedin" />
            </Tag>
            <Tag
              element="a"
              attributes={[
                { key: "className", value: classNames.iconsItems.text },
                { key: "href", value: "https://github.com/gmotta-dev" },
              ]}>
              <Tag element="LogoGithub" />
            </Tag>
            <Tag
              element="a"
              attributes={[
                { key: "className", value: classNames.iconsItems.text },
                { key: "href", value: "https://www.linkedin.com/in/gpmotta21" },
              ]}>
              <Tag element="LogoDiscord" />
            </Tag>
          </Tag>
        </Tag>
      </code>
      <div className="ml-3 text-fuchsia-300">&#41;</div>
      <span className="text-yellow-400">&#125;</span>
    </Tab>
  );
}

const LineNumbers = () => {
  return (
    <ul className="absolute left-2 top-4 flex h-full w-5 flex-col text-sm font-medium text-purple-heart-400">
      {[...Array(33)].map((i, key) => (
        <li key={key}>{key + 1}</li>
      ))}
    </ul>
  );
};
