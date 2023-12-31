import { CopyFile } from "@carbon/icons-react";
import { twMerge } from "tailwind-merge";

import InformationGeneral from "@/components/Information/ComponentVariants/InformationGeneral";
import Tab from "../Tab";
import { TIDE } from "../types";

export default function PresentationPreview(props: TPresentationPreview) {
  return (
    <Tab Icon={CopyFile} filename="Preview" classNames={{ "content-wrapper": "lg:max-h-[500px] transition-all duration-300 flex flex-col " + props.typewriterTexts.classNames.contentWrapper.text }}>
      <h2 className={twMerge("text-base transition-all duration-300", props.typewriterTexts.classNames.h3.text)}>{props.typewriterTexts.textsValues.h3}</h2>
      <p className="mt-6 text-sm lg:text-base">
        <b className={props.typewriterTexts.classNames.primaryTextBold.text}>{props.typewriterTexts.textsValues.primaryTextBold}</b>
        {props.typewriterTexts.textsValues.primaryText}
        <br />
        <br />
        {props.typewriterTexts.textsValues.secondaryText}
      </p>
      <InformationGeneral
        classNames={{
          "all-items-icons": "transition-all duration-300 !h-5 !w-5 " + props.typewriterTexts.classNames.iconsItems.text,
          container: "transition-all duration-300 " + props.typewriterTexts.classNames.iconsWrapper.text,
        }}
      />
    </Tab>
  );
}

type TPresentationPreview = TIDE;
