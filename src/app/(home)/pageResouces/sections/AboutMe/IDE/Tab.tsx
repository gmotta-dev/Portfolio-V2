import { ReactNode } from "react";
import { Close, CopyFile } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import { twMerge } from "tailwind-merge";

export default function Tab(props: TTab) {
  return (
    <div className={twMerge("flex flex-1 flex-col items-start lg:w-1/2", props.classNames?.container)}>
      <span className="flex items-center gap-2 bg-purple-heart-800 py-2 pl-6 pr-2 text-xs font-medium text-white">
        <span>
          <props.Icon className="text-sulu-300" />
        </span>
        {props.filename}
        <Close className="ml-4" />
      </span>
      <div className={twMerge("h-full w-full bg-purple-heart-600 px-9 py-4 text-white", props.classNames?.["content-wrapper"])}>{props.children}</div>
    </div>
  );
}

type TTab = {
  Icon: CarbonIconType;
  filename: string;
  children: ReactNode;
  classNames?: Partial<Record<"container" | "content-wrapper" | "bottom-info", string>>;
};
