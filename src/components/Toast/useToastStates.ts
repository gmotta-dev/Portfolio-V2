import { useState } from "react";

import { TToast } from "./types";

export default function useToastStates() {
  const [toast, setToast] = useState<TToast>();

  return { ...toast, setToast };
}
