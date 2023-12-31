import { tv, VariantProps } from "tailwind-variants";

import createEmptyStringObject from "@/util/createEmptyStringObject";

export const clickableStylization = tv({
  variants: { type: createEmptyStringObject(["base", "outlined", "tertiary"]), color: createEmptyStringObject(["purple-heart", "sulu"]) },
  compoundVariants: [
    {
      type: "base",
      color: "purple-heart",
      className: "bg-purple-heart-700 text-white",
    },
    {
      type: "base",
      color: "sulu",
      className: "bg-sulu-300 text-purple-950 duration-300",
    },
    {
      type: "outlined",
      color: "purple-heart",
      className: "bg-purple-heart-100 text-purple-heart-700",
    },
  ],
});

export const handleClickableClassName = (props: THandleGClickClassName) => {
  const classNameProp = props?.className || "";

  const generalClassName = "h-11 px-6 text-center font-medium w-auto flex items-center justify-center ";

  const stylization = clickableStylization(props.stylization);

  const concatenatedStylization = stylization + " rounded-lg";

  return `${concatenatedStylization} ${generalClassName} ${classNameProp} `;
};

type THandleGClickClassName = {
  stylization?: VariantProps<typeof clickableStylization>;
  className?: string;
};

/* variants: {
    type: {
      "base-purple-heart": "bg-purple-heart-700 text-white",
      "base-sulu": "",
      "outlined-gray": "border border-gray-100 text-white",
      "outlined-purple-heart": "bg-purple-heart-100 text-purple-heart-700",
    } as TGClickStylization,
  } */
