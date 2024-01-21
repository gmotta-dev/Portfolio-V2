"use client";

import { Close } from "@carbon/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

import { toastStylization } from "./stylization";
import { TToastComponentAndHookCommonTypes } from "./types";
import useToastStates from "./useToastStates";

export default function Toast(props: TToast): JSX.Element | null {
  const stylization = toastStylization(props.stylization);

  return typeof window === "object"
    ? createPortal(
        <AnimatePresence>
          {(props.title || props.description || props.icon) && (
            <motion.div
              initial={{ opacity: 0, right: "-150%" }}
              animate={{ opacity: 1, right: "3%" }}
              exit={{ opacity: 0, right: "-150%" }}
              transition={{ stiffness: 0, duration: 0.5 }}
              className={twMerge("fixed bottom-10  z-50 flex items-center justify-center gap-6 rounded-md  px-5 py-4", stylization || "")}>
              {props.icon && <props.icon className="flex h-7 w-7 items-center justify-center" />}

              <div className={`mr-7 ${props.classNames?.["texts-wrapper"] || ""}`}>
                <p className={` text-sm font-semibold `}>{props.title}</p>
                {props.description && <p className="text-bm">{props.description}</p>}
              </div>

              <button onClick={() => props.setToast(null)}>
                <Close className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;
}

type TToast = ReturnType<typeof useToastStates> & TToastComponentAndHookCommonTypes;
