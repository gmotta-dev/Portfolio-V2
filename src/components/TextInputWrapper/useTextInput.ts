import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { ZodError, ZodOptional, ZodString } from "zod";

type TTUseTextInput = {
  error?: string;
  triggerParseSchema?: any;
  schema?: ZodString | ZodOptional<ZodString>;
};

/**
 * The useTextInput is a custom React hook for managing a text input field. It handles input changes, focus, blur events, and validation using a Zod schema. It maintains state for label animation,
 * form submission, and error messages. It returns two objects: one for wrapper props (including animation and error states), and another for input element props (including event handlers).
 */

export const useTextInput = (props: TTUseTextInput) => {
  const { pending } = useFormStatus();

  const [animateLabel, setAnimateLabel] = useState(false);

  const [error, setError] = useState<string | undefined>("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => (pending ? setHasSubmitted(true) : undefined), [pending, props.triggerParseSchema]);

  useEffect(() => setError(props.error || ""), [props.error]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {

    if (props.schema && hasSubmitted) {
      try {
        setError("");
        props.schema.parse(e.target.value);
      } catch (err) {
        if (err instanceof ZodError) setError(err.errors[0]?.message);
      }
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => !e.target.value && setAnimateLabel(false);

  const onFocus = () => setAnimateLabel(true);

  const textInputWrapperProps = { animateLabel, setAnimateLabel, error };
  const inputElementProps = { onChange, onBlur, onFocus };

  return { textInputWrapperProps, inputElementProps };
};
