"use client";

import React, { InputHTMLAttributes } from "react";
import { ZodOptional, ZodString } from "zod";

import TextInputWrapper, { TTextFieldWrapper } from "./TextInputWrapper/TextInputWrapper";
import { useTextInputWrapper } from "./TextInputWrapper/useTextInput";

export default function TextInput({ placeholder, schema, ...props }: TInput): JSX.Element {
  const textInputStates = useTextInputWrapper();

  return (
    <TextInputWrapper name={props.name} error={props.error} label={props.label} className={props.className} {...textInputStates.textWrapperStates}>
      <input {...props} {...textInputStates.textInputAttributes} id={props.name + "-input-id"} className={`h-12 w-full bg-transparent pl-3 text-sm !outline-none transition-all`} />
    </TextInputWrapper>
  );
}

type TInput = InputHTMLAttributes<HTMLInputElement> & Pick<TTextFieldWrapper, "error" | "label"> & { schema?: ZodString | ZodOptional<ZodString>; triggerParseSchema?: boolean };
