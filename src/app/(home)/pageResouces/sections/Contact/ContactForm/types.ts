import { TToast } from "@/components/Toast/types";

export type TContactFields = { [key in "fullname" | "email" | "message"]: string };

export type TContactFormState = {
  fieldErrors?: TContactFields;
  toast?: TToast;
};
