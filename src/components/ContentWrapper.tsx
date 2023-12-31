import { HTMLAttributes } from "react";

export default function ContentWrapper(props: TContentWrapper) {
  return (
    <props.element {...props} className={`mx-auto w-full max-w-7xl px-4 lg:px-6 ${props.className}`}>
      {props.children}
    </props.element>
  );
}

export type TContentWrapper = {
  element: "div" | "section" | "nav" | "footer";
} & HTMLAttributes<HTMLDivElement>;
