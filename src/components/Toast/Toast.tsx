"use client";

import { useEffect, useState } from "react";
import { Checkmark, Close, Error } from "@carbon/icons-react";
import { CarbonIconType } from "@carbon/icons-react/lib/CarbonIcon";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

import { toastStylization } from "./stylization";
import { TToastComponentAndHookCommonTypes, TToastStylizationThemeValues } from "./types";
import useToastStates from "./useToastStates";
import { twMerge } from "tailwind-merge";

export default function Toast(props: TToast): JSX.Element | null {
  const stylization = toastStylization(props.stylization || props.stylization);
  const [toast, setToast] = useState<TToast | null>(null);

  if (typeof window !== "object") return null;

  useEffect(() => setToast({ title: props.title, description: props.description, icon: props.icon }), [props]);

  useEffect(() => {
    const timer = setTimeout(() => setToast(null), props?.time || 7000);
    return () => clearTimeout(timer);
  }, [toast?.title, toast?.icon, toast?.description]);

  const Icon = props.stylization?.theme ? stylizationIcons[props.stylization?.theme] : undefined;

  return createPortal(
    <AnimatePresence>
      {(toast?.title || toast?.description || toast?.icon) && (
        <motion.div
          initial={{ opacity: 0, right: "-150%" }}
          animate={{ opacity: 1, right: "3%" }}
          exit={{ opacity: 0, right: "-150%" }}
          transition={{ stiffness: 0, duration: 0.5 }}
          className={twMerge('fixed bottom-10  z-50 flex items-center justify-center gap-6 rounded-md  px-5 py-4', stylization.container())}
          >
          {Icon && <Icon className="flex h-7 w-7 items-center justify-center" />}

          <div className={`mr-7 ${toast?.classNames?.["texts-wrapper"] || ""}`}>
            <p className={` text-sm font-semibold `}>{toast?.title}</p>
            {toast?.description && <p className="text-bm">{toast?.description}</p>}
          </div>

          <button onClick={() => setToast(null)}>
            <Close className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

type TToast = Partial<ReturnType<typeof useToastStates>> & TToastComponentAndHookCommonTypes;

const stylizationIcons: { [keyof in NonNullable<TToastStylizationThemeValues>]?: CarbonIconType } = {
  success: Checkmark,
  error: Error,
};
