import { useEffect, useState } from "react";

import { TToast } from "./types";

export default function useToastStates(props?: TToast & { triggerSetToast: any }) {
  const [toast, setToast] = useState<TToast>();
  const propsItems = props?.title || props?.description || props?.icon;

  useEffect(() => (propsItems ? setToast({ ...props }) : undefined), [propsItems, props?.triggerSetToast]);

  useEffect(() => {
    const timer = setTimeout(() => setToast(null), props?.time || 7000);
    return () => clearTimeout(timer);
  }, [toast?.icon, toast?.title, toast?.description]);

  return { ...toast, setToast };
}
