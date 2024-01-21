import { tv } from "tailwind-variants";

export const toastStylization = tv({
  variants: {
    theme: {
      success: "bg-lime-300 text-black",
      error: "bg-red-400 text-white",
    },
  },
});
