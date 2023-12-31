import { FC, HTMLAttributes } from "react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";

export const SubjectRadio: FC<TSubjectRadio> = ({ text, Icon, ...rest }) => {
  return (
    <>
      <input {...rest} type="radio" value={rest.id} name="subject" id={`subject-${rest.id}`} className="hidden [&+label]:checked:bg-purple-heart-700 [&+label]:checked:text-zinc-50" />
      <label
        htmlFor={`subject-${rest.id}`}
        className="flex h-24 w-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg bg-purple-heart-100 text-center text-purple-heart-700 transition-all duration-200">
        <Icon className="h-10 w-10" />
        <p className="text-sm font-medium">{text}</p>
      </label>
    </>
  );
};

type TSubjectRadio = {
  text: string;
  Icon: CarbonIconType;
} & HTMLAttributes<HTMLInputElement>;
