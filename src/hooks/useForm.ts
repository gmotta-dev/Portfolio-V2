"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { SomeZodObject, z, ZodIntersection, ZodType } from "zod";

type InferFormValues<T> = T extends ZodType<infer U, any, any> ? U : never;

type UseFormStatesProps<T extends SomeZodObject | ZodIntersection<any, any>> = {
  schema?: T;
  defaultValues?: Partial<InferFormValues<T>>;
};

export const useFormStates = <T extends SomeZodObject | ZodIntersection<any, any>>(props?: UseFormStatesProps<T>) => {
  const [formValues, setFormValues] = useState<InferFormValues<T>>((props?.defaultValues as InferFormValues<T>) || ({} as InferFormValues<T>));
  const [errors, setErrors] = useState<InferFormValues<T>>({} as InferFormValues<T>);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleValuesValidation = async (formData: any, cb?: (parsedFormData: any) => void | Promise<void>) => {
    if (props?.schema) {
      const result = props.schema.safeParse(formData);

      if (result.success) {
        setErrors({} as InferFormValues<T>);
        if (cb) await cb(result.data);
        
      } else if (result.error) {
        const newErrors = result.error.errors.reduce((acc, cur) => {
          const fieldName = cur.path[0];
          return { ...acc, [fieldName]: cur.message };
        }, {} as InferFormValues<T>);

        setErrors(newErrors);
      }
    }
  };

  const register = (name: string | keyof InferFormValues<T>) => {
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newFormValues = { ...formValues, [name]: e.target.value };
      setFormValues(newFormValues);

      if (hasSubmitted) handleValuesValidation(newFormValues);
    };

    return { onChange, name: name as string };
  };

  const handleSubmit = (mySubmit: (formVal: InferFormValues<T>) => void | Promise<void>) => async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setHasSubmitted(true);

    await handleValuesValidation(formValues, mySubmit);

    setLoading(false);
  };
  return { register, formValues, loading, setLoading, handleSubmit, errors, setFormValues, setErrors };
};
