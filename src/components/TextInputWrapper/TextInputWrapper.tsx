"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTextInputWrapper } from "./useTextInput";

export default function TextInputWrapper({ placeholder, ...props }: TTextFieldWrapper): JSX.Element {
  return (
    <div>
      <div className="relative">
        <label
          htmlFor={props.name + "-input-id"}
          className={twMerge(
            "pointer-events-none absolute left-3 z-30 -translate-y-1/2 transition-all duration-100 ease-in-out",
            props.animateLabel ? "top-0 text-sm text-purple-heart-400" : "top-6",
          )}>
          {props.label}
        </label>
        {props.children}
        <fieldset className="pointer-events-none absolute bottom-0 left-0 right-0 top-0  w-full  rounded-md border border-purple-heart-400 px-2">
          <legend className={twMerge("h-0 overflow-hidden text-sm text-red-500 opacity-0 transition-all  duration-300", props.animateLabel ? "max-w-full px-1" : "max-w-0")}>{props.label}</legend>
        </fieldset>
      </div>
      {props.error && <p className="mt-1 text-xs text-red-500">{props.error}</p>}
    </div>
  );
}

export type TTextFieldWrapper = HTMLAttributes<HTMLDivElement> &
  ReturnType<typeof useTextInputWrapper>["textWrapperStates"] & {
    label?: string;
    error?: string;
    name?: string;
  };
