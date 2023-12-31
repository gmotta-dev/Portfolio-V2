"use client";

import React, { TextareaHTMLAttributes } from "react";
import { ZodOptional, ZodString } from "zod";

import TextInputWrapper, { TTextFieldWrapper } from "./TextInputWrapper/TextInputWrapper";
import { useTextInput } from "./TextInputWrapper/useTextInput";

export default function TextArea({ placeholder, schema, ...props }: TInput): JSX.Element {
  const textInputStates = useTextInput({ error: props.error, schema });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    textInputStates.inputElementProps.onChange(e);

    if (props.onChange) props.onChange(e);
  };

  return (
    <TextInputWrapper name={props.name} label={props.label} stylization={props.stylization} {...textInputStates.textInputWrapperProps}>
      <textarea
        {...props}
        id={props.name + "-input-id"}
        {...textInputStates.inputElementProps}
        onChange={onChange}
        className={`min-h-[200px] w-full resize-none border-0 bg-transparent pl-3 pt-3 text-sm !outline-none transition-all duration-300`}
      />
    </TextInputWrapper>
  );
}

type TInput = TextareaHTMLAttributes<HTMLTextAreaElement> & Pick<TTextFieldWrapper, "stylization" | "label" | "error"> & { schema?: ZodString | ZodOptional<ZodString> };
