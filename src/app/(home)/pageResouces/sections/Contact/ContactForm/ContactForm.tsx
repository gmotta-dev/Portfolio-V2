"use client";

import { FC, HTMLAttributes, useState } from "react";
import { CarbonForIbmDotcom, Fade, PaintBrush, WatsonHealthAiResults } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import dynamic from "next/dynamic";

import Button from "@/components/clickables/Button";
import TextInput from "@/components/Input";
import TextArea from "@/components/TextArea";
import useToastStates from "@/components/Toast/useToastStates";
import { useFormStates } from "@/hooks/useForm";
import contactFormAction from "./contactFormAction";
import { contactFormSchema, TContactFormSchema } from "./schema";

const Toast = dynamic(() => import("@/components/Toast/Toast"));

export default function ContactForm() {
  const formStates = useFormStates({ schema: contactFormSchema, defaultValues: { subject: "Other" } });
  const toastStates = useToastStates();

  const handleSubmit = async (formValues: TContactFormSchema) => {
    try {
      const res = await contactFormAction(formValues);

      toastStates.setToast(res.toast);
      if (res.fieldErrors) formStates.setErrors(res.fieldErrors);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Toast {...toastStates} />

      <form onSubmit={formStates.onSubmit(handleSubmit)} className="mt-10 flex w-full flex-col gap-9">
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <SubjectRadio subjectState={formStates.formValues.subject} register={formStates.register("subject")} Icon={WatsonHealthAiResults} id="other" text="Other" />
          <SubjectRadio subjectState={formStates.formValues.subject} register={formStates.register("subject")} Icon={PaintBrush} id="landing-page" text="Landing Page" />
          <SubjectRadio subjectState={formStates.formValues.subject} register={formStates.register("subject")} Icon={CarbonForIbmDotcom} text="Full Stack App" id="full-stack-app" />
        </div>

        {inputsOpts.map(({ Element, ...i }, key) => (
          <Element key={key} {...i} {...formStates.register(i.name)} error={formStates.errors?.[i.name]} schema={contactFormSchema.shape[i.name]} />
        ))}

        {formStates.loading ? (
          <Fade className="h-11 w-11  animate-spin text-purple-heart-700" />
        ) : (
          <Button stylization={{ type: "base", color: "sulu" }} className="mx-auto lg:ml-0">
            Send Message
          </Button>
        )}
      </form>
    </>
  );
}

const inputsOpts: { label: string; name: keyof TContactFormSchema; Element: typeof TextInput | typeof TextArea }[] = [
  {
    label: "Fullname",
    name: "fullname",
    Element: TextInput,
  },
  {
    label: "Email",
    name: "email",
    Element: TextInput,
  },
  {
    label: "Message (optional)",
    name: "message",
    Element: TextArea,
  },
];

type TSubjectRadio = { text: string; Icon: CarbonIconType; subjectState: string; register: ReturnType<ReturnType<typeof useFormStates>["register"]> } & HTMLAttributes<HTMLInputElement>;

const SubjectRadio: FC<TSubjectRadio> = ({ text, register, Icon, subjectState, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        {...register}
        type="radio"
        value={text}
        id={`subject-${rest.id}`}
        checked={subjectState === text}
        className="hidden [&+label]:checked:bg-purple-heart-700 [&+label]:checked:text-zinc-50"
      />
      <label
        htmlFor={`subject-${rest.id}`}
        className="flex h-24 w-24 cursor-pointer flex-col items-center gap-1 rounded-full bg-purple-heart-100 text-center text-purple-heart-700 transition-all duration-200 md:h-24 md:w-40 md:justify-center md:gap-2 md:rounded-lg">
        <Icon className="mt-5 h-7 w-7 md:mt-0 md:h-10 md:w-10" />
        <p className="max-w-[64px] text-xs font-medium md:max-w-none md:text-sm ">{text}</p>
      </label>
    </>
  );
};
