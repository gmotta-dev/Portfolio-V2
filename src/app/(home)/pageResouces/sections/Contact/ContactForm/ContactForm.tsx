"use client";

import { FC, HTMLAttributes } from "react";
import { CarbonForIbmDotcom, Fade, PaintBrush, WatsonHealthAiResults } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import dynamic from "next/dynamic";
import { useFormState, useFormStatus } from "react-dom";

import Button from "@/components/clickables/Button";
import TextInput from "@/components/Input";
import TextArea from "@/components/TextArea";
import contactFormAction from "./contactFormAction";
import { contactFormSchema } from "./contactFormSchema";
import { TContactFields } from "./types";

const Toast = dynamic(() => import("@/components/Toast/Toast"));

export default function ContactForm() {
  const [formStates, formAction] = useFormState(contactFormAction, {});

  return (
    <>
      {formStates.toast && <Toast {...formStates.toast} />}

      <form action={formAction} className="mt-10 flex w-full flex-col gap-9">
        <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
          <SubjectRadio defaultChecked Icon={WatsonHealthAiResults} id="other" text="Other" />
          <SubjectRadio Icon={PaintBrush} id="landing-page" text="Landing Page" />
          <SubjectRadio Icon={CarbonForIbmDotcom} text="Full Stack App" id="full-stack-app" />
        </div>

        {inputsOpts.map(({ Element, ...i }, key) => (
          <Element {...i} key={key} error={formStates.fieldErrors?.[i.name]} schema={contactFormSchema.shape[i.name]} stylization={{ colorPallet: "purple-heart", theme: "light" }} />
        ))}

        <SubmitBtn />
      </form>
    </>
  );
}

const inputsOpts: { label: string; name: keyof TContactFields; Element: typeof TextInput | typeof TextArea }[] = [
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

type TSubjectRadio = { text: string; Icon: CarbonIconType } & HTMLAttributes<HTMLInputElement>;

const SubjectRadio: FC<TSubjectRadio> = ({ text, Icon, ...rest }) => {
  return (
    <>
      <input {...rest} type="radio" value={text} name="subject" id={`subject-${rest.id}`} className="hidden [&+label]:checked:bg-purple-heart-700 [&+label]:checked:text-zinc-50" />
      <label
        htmlFor={`subject-${rest.id}`}
        className="flex h-24 w-24 cursor-pointer flex-col items-center gap-1 rounded-full bg-purple-heart-100 text-center text-purple-heart-700 transition-all duration-200 md:h-24 md:w-40 md:justify-center md:gap-2 md:rounded-lg">
        <Icon className="mt-5 h-7 w-7 md:mt-0 md:h-10 md:w-10" />
        <p className="max-w-[64px] text-xs font-medium md:max-w-none md:text-sm ">{text}</p>
      </label>
    </>
  );
};

const SubmitBtn: FC = () => {
  const { pending } = useFormStatus();

  if (pending) return <Fade className="h-11 w-11  animate-spin text-purple-heart-700" />;

  return (
    <Button stylization={{ type: "base", color: "sulu" }} className="mx-auto lg:ml-0">
      Send Message
    </Button>
  );
};
