import { HTMLAttributes } from "react";
import { VariantProps } from "tailwind-variants";

import { clickableStylization, handleClickableClassName } from "./stylization";

export default function Button({ stylization, ...props }: TButton) {
  const className = handleClickableClassName({
    className: props.className,
    stylization: stylization,
  });

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}

type TButton = HTMLAttributes<HTMLButtonElement> & {
  stylization?: VariantProps<typeof clickableStylization>;
};
