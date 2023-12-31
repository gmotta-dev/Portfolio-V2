import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: TTag) {
  return (
    <div className={twMerge("", props.classNames?.container)}>
      <span className="font-light text-fuchsia-300">&lt;</span>
      <span className="font-light text-fuchsia-300">
        {props.element}
        {props.attributes?.length
          ? props.attributes.map((i, key) => (
              <span key={key} className="whitespace-nowrap text-gray-200">
                {" "}
                {i.key}=<span className="font-light text-sulu-300">"{i.value}"</span>
              </span>
            ))
          : null}
      </span>
      <span className="font-light text-fuchsia-300">{!props.children && "/"}&gt;</span>
      {props.children && (
        <>
          <div className={twMerge("ml-3 font-medium w-[700px]", props.classNames?.content)}>{props.children}</div>
          <span className="font-light text-fuchsia-300">&lt;/</span>
          <span className="font-light text-fuchsia-300">{props.element}</span>
          <span className="font-light text-fuchsia-300">&gt;</span>
        </>
      )}
    </div>
  );
}

type TTag = {
  children?: ReactNode;
  element: string;
  attributes?: { key: string; value: string }[];
  classNames?: Partial<Record<"container" | "content", string>>;
};
