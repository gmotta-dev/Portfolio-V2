"use client";

import React, { InputHTMLAttributes } from "react";
import { ZodOptional, ZodString } from "zod";

import TextInputWrapper, { TTextFieldWrapper } from "./TextInputWrapper/TextInputWrapper";
import { useTextInput } from "./TextInputWrapper/useTextInput";

export default function TextInput({ placeholder, schema, ...props }: TInput): JSX.Element {
  const textInputStates = useTextInput({ schema, error: props.error });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    textInputStates.inputElementProps.onChange(e);

    if (props.onChange) props.onChange(e);
  };

  return (
    <TextInputWrapper name={props.name} stylization={props.stylization} label={props.label} className={props.className} {...textInputStates.textInputWrapperProps}>
      <input {...props} {...textInputStates.inputElementProps} id={props.name + "-input-id"} onChange={onChange} className={`h-12 w-full bg-transparent pl-3 text-sm !outline-none transition-all`} />
    </TextInputWrapper>
  );
}

type TInput = InputHTMLAttributes<HTMLInputElement> & Pick<TTextFieldWrapper, "stylization" | "error" | "label"> & { schema?: ZodString | ZodOptional<ZodString>; triggerParseSchema?: boolean };
