import { Email, Location, PhoneFilled } from "@carbon/icons-react";

import Information, { TInformationClassNames } from "../Information";

export default function InformationContact(props: TInformationGeneral) {
  return (
    <Information
      classNames={{ ...props.classNames, container: `gap-6 ${props.classNames?.container}`, "all-items-icons": `h-9 w-9 ${props.classNames?.["all-items-icons"]}` }}
      items={[
        {
          icon: PhoneFilled,
          label: "+55 2197426-4416",
          name: "Phone",
          element: "div",
          classNames: { icon: props.classNames?.["phone-icon"], label: props.classNames?.["phone-label"], container: props.classNames?.["phone-container"] },
        },
        {
          icon: Email,
          name: "Email",
          label: "gpmotta21@gmail.com",
          href: "mailto:gpmotta21@gmail.com",
          element: "a",
          classNames: { icon: props.classNames?.["email-icon"], label: props.classNames?.["email-label"], container: props.classNames?.["email-container"] },
        },
        {
          icon: Location,
          label: "Rio de Janeiro, Brazil",
          name: "Location",
          element: "div",
          classNames: { icon: props.classNames?.["location-icon"], label: props.classNames?.["location-label"], container: props.classNames?.["location-container"] },
        },
      ]}
    />
  );
}

type TInformationGeneral = {
  classNames?: TInformationClassNames &
    Partial<Record<"email-container" | "email-label" | "phone-label" | "location-label" | "email-icon" | "phone-container" | "phone-icon" | "location-container" | "location-icon", string>>;
};
