import Link from "next/link";
import React, { FC } from "react";
import { clickableStylization, handleClickableClassName } from "./stylization";
import { VariantProps } from "tailwind-variants";

export const CustomNextLink: FC<TCustomNextLink> = (props) => {
  const className = handleClickableClassName({
    className: props.className,
    stylization: props.stylization,
  });

  return (
    <Link {...props} className={className}>
      {props.children}
    </Link>
  );
};

export type TCustomNextLink = React.ComponentPropsWithoutRef<typeof Link> & {
  stylization?: VariantProps<typeof clickableStylization>;
};
