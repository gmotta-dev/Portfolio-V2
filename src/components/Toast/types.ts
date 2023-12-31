import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";

import { toastStylization } from "./stylization";
import { VariantProps } from "tailwind-variants";

export type ToastClassNames = Partial<Record<"container" | "texts-wrapper", string>>;

export type TToastStylization = VariantProps<typeof toastStylization>;

export type TToastComponentAndHookCommonTypes = { classNames?: ToastClassNames; stylization?: TToastStylization };

export type TToastStylizationThemeValues = NonNullable<TToastStylization>["theme"]

export type TToast =
  | ({
      icon?: CarbonIconType;
      time?: number;
      title?: string;
      mount?: boolean;
      description?: string;
    } & TToastComponentAndHookCommonTypes)
  | null;
