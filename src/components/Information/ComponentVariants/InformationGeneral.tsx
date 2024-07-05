import { LogoGithub, LogoLinkedin, UserProfile } from "@carbon/icons-react";

import Information, { TInformationClassNames } from "../Information";

export default function InformationGeneral(props: TInformationSocialMedia) {
  return (
    <Information
      classNames={{
        container: `gap-6 ${props.classNames?.container}`,
        "all-items-icons": `h-10 w-10 ${props.classNames?.["all-items-icons"]}`,
        "all-items": props.classNames?.["all-items"],
        "all-items-labels": props.classNames?.["all-items-labels"],
      }}
      items={[
        { icon: LogoGithub, name: "Github", href: "https://github.com/gmotta-dev", element: "a", label: props.label ? "Github" : undefined },
        { icon: LogoLinkedin, name: "Linkedin", href: "https://www.linkedin.com/in/gpmotta21/", element: "a", label: props.label ? "Linkedin" : undefined },
        {
          icon: UserProfile,
          name: "Resume",
          download: true,
          href: process.env.NEXT_PUBLIC_CLOUDFRONT_URL + "/PDFs/Gabriel-Motta-Resume.pdf",
          element: "a",
          label: props.label ? "Resume" : undefined,
        },
      ]}
    />
  );
}

type TInformationSocialMedia = {
  label?: boolean;
  classNames?: TInformationClassNames;
};
