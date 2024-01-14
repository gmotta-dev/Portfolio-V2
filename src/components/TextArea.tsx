"use client";

import React, { TextareaHTMLAttributes } from "react";
import { ZodOptional, ZodString } from "zod";

import TextInputWrapper, { TTextFieldWrapper } from "./TextInputWrapper/TextInputWrapper";
import { useTextInputWrapper } from "./TextInputWrapper/useTextInput";

export default function TextArea({ placeholder, schema, ...props }: TInput): JSX.Element {
  const textInputStates = useTextInputWrapper();

  return (
    <TextInputWrapper {...textInputStates.textWrapperStates} error={props.error} name={props.name} label={props.label}>
      <textarea
        {...props}
        {...textInputStates.textInputAttributes}
        id={props.name + "-input-id"}
        className={`h-full min-h-[200px] w-full resize-none border-0 bg-transparent pl-3 pt-3 text-sm !outline-none transition-all duration-300`}
      />
    </TextInputWrapper>
  );
}

type TInput = TextareaHTMLAttributes<HTMLTextAreaElement> & Pick<TTextFieldWrapper, "label" | "error"> & { schema?: ZodString | ZodOptional<ZodString> };
