"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { SomeZodObject, ZodError, ZodObject, ZodType } from "zod";

type InferFormValues<T> = T extends ZodType<infer U, any, any> ? U : never;

type UseFormStatesProps<T extends SomeZodObject> = {
  schema?: T;
  defaultValues?: Partial<InferFormValues<T>>;
};

export const useFormStates = <T extends SomeZodObject>(props?: UseFormStatesProps<T>) => {
  const [formValues, setFormValues] = useState<InferFormValues<T>>(props?.defaultValues as InferFormValues<T>);
  const [errors, setErrors] = useState<InferFormValues<T>>({} as InferFormValues<T>);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = (name: string | keyof InferFormValues<T>) => {
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({ ...formValues, [name]: e.target.value });

      if (hasSubmitted && props?.schema && props.schema instanceof ZodObject) {
        const fieldSchema = props.schema?.pick({ [name]: true } as Record<keyof InferFormValues<T>, true | undefined>);

        try {
          fieldSchema.parse({ [name]: e.target.value });

          /** If the input field passed, remove the error from errors useState */
          setErrors(() => {
            const { [name]: _, ...rest } = errors;
            return rest as InferFormValues<T>;
          });
        } catch (err) {
          if (err instanceof ZodError) {
            const fieldError = err.errors.find((e) => e.path.includes(name as string));
            if (fieldError) {
              setErrors((prev) => ({ ...prev, [name]: fieldError.message }));
            }
          }
        }
      }
    };

    return { onChange, name: name as string };
  };

  const onSubmit = (mySubmit: (formVal: InferFormValues<T>) => void | Promise<void>) => async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (props?.schema) {
      try {
        const validatedFormValues = props.schema.parse(formValues) as InferFormValues<T>;
        setErrors({} as InferFormValues<T>);

        setLoading(true);

        await mySubmit(validatedFormValues);
      } catch (err) {
        if (err instanceof ZodError) {
          const newErrors = err.errors.reduce((acc, cur) => {
            const fieldName = cur.path[0];
            return { ...acc, [fieldName]: cur.message };
          }, {} as InferFormValues<T>);

          setErrors(newErrors);
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return { register, formValues, loading, setLoading, onSubmit, errors, setFormValues, setErrors };
};
