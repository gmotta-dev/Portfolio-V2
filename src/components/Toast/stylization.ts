import { tv } from "tailwind-variants";

import createEmptyStringObject from "@/util/createEmptyStringObject";

export const toastStylization = tv({
  slots: createEmptyStringObject(["container"]),

  variants: {
    theme: {
      light: { container: "bg-gray-50 text-c8 shadow-md shadow-black/20" },
      dark: { container: "bg-slate-950 text-white" },
      success: { container: "bg-lime-300 text-black" },
      error: { container: "bg-red-400 text-white" },
    },
  },
});
