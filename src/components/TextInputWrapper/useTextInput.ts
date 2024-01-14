import { useState } from "react";

/**
 * The useTextInput is a custom React hook for managing a text input field. It handles input changes, focus, blur events, and validation using a Zod schema. It maintains state for label animation,
 * form submission, and error messages. It returns two objects: one for wrapper props (including animation and error states), and another for input element props (including event handlers).
 */

export const useTextInputWrapper = () => {
  const [animateLabel, setAnimateLabel] = useState(false);

  const onBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => !e.target.value && setAnimateLabel(false);

  const onFocus = () => setAnimateLabel(true);

  return { textWrapperStates: { animateLabel, setAnimateLabel }, textInputAttributes: { onBlur, onFocus } };
};
