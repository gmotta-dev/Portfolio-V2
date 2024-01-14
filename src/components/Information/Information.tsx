import { FC } from "react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import { twMerge } from "tailwind-merge";

export default function Information(props: TInformation): JSX.Element {
  return (
    <div className={twMerge("flex gap-3", props.classNames?.container)}>
      {props.items.map((i, key) => (
        <Item
          key={key}
          {...i}
          classNames={{
            icon: i.classNames?.icon + " " + props.classNames?.["all-items-icons"],
            label: props.classNames?.["all-items-labels"] + " " + i.classNames?.label,
            container: i.classNames?.container + " " + props.classNames?.["all-items"],
          }}
        />
      ))}
    </div>
  );
}

type TItem = {
  name: string;
  label?: string | false;
  element: "a" | "div";
  download?: boolean;
  icon: CarbonIconType;
  href?: string;
  classNames?: Partial<Record<"container" | "icon" | "label", string>>;
};

const Item: FC<TItem> = (props) => {
  return (
    <props.element className={twMerge("flex items-center gap-4", props.classNames?.container || '')} target="_blank" download aria-label={props.name} href={props.href}>
      <props.icon className={twMerge("h-8 w-8", props.classNames?.icon)} /> {props.label && <span className={twMerge(props.classNames?.label)}>{props.label}</span>}
    </props.element>
  );
};

export type TInformationClassNames = Partial<Record<"container" | "all-items" | "all-items-icons" | "all-items-labels", string>>;

type TInformation = {
  items: TItem[];
  classNames?: TInformationClassNames;
};
