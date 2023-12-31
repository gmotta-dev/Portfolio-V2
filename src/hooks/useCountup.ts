import { useEffect, useState } from "react";

export default function useCountup({ start = 0, time = 50, ...props }: TUseCountupProps) {
  const [countup, setCoutup] = useState(start);

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      i++;
      if (i < props.end) setCoutup(i + 1);
    }, time);

    return () => clearInterval(timer);
  }, []);

  return { countup, setCoutup };
}

export type TUseCountupProps = { start?: number; end: number; time?: number };
