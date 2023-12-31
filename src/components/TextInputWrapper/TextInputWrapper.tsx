"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

import { TTWColorsKeys } from "@/types/TTWColors";
import createEmptyStringObject from "@/util/createEmptyStringObject";
import { useTextInput } from "./useTextInput";

export default function TextInputWrapper({ placeholder, ...props }: TTextFieldWrapper): JSX.Element {
  const stylization = inputStylization({ ...props.stylization, colorPallet: props.error ? "red" : props.stylization?.colorPallet });

  return (
    <div>
      <div className={twMerge("relative flex w-full rounded-[4px] border", props.animateLabel ? "rounded-tl-none" : "", stylization.container(), props.className)}>
        {props.children}

        {props.label && (
          <label
            htmlFor={props.name + '-input-id'}
            className={twMerge(
              "pointer pointer-events-none absolute flex -translate-y-1/2 rounded-[4px] rounded-b-none font-normal transition-all duration-200 ",
              props.animateLabel ? `-top-3 left-[-1px] px-2 py-1 text-xs ${stylization["label-focus"]()}` : `left-3 top-6 ${stylization.label()}`,
            )}>
            {props.label}
          </label>
        )}
      </div>

      {props.error && <p className="mt-1 text-xs font-medium text-red-400">{props.error}</p>}
    </div>
  );
}

export type TTextFieldWrapper = HTMLAttributes<HTMLDivElement> &
  ReturnType<typeof useTextInput>["textInputWrapperProps"] & {
    stylization?: VariantProps<typeof inputStylization>;
    label?: string;
    error?: string;
    name?: string;
  };

const inputStylization = tv({
  slots: createEmptyStringObject(["container", "label", "label-focus"]),

  variants: {
    theme: {
      light: {
        container: "bg-slate-50",
      },
    },

    colorPallet: {
      "purple-heart": {
        container: "border-purple-heart-300 text-purple-heart-950",
        label: "",
        "label-focus": "bg-purple-heart-400 text-zinc-100",
      },

      red: {
        container: "border-red-400 text-purple-heart-950",
        label: "",
        "label-focus": "bg-red-400 text-slate-100",
      },
    } satisfies TColorPallet,
  },
});

type TColorPallet = { [key in TTWColorsKeys]?: { container: string; label: string; "label-focus": string } };
