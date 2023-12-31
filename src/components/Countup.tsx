"use client";

import useCountup, { TUseCountupProps } from "@/hooks/useCountup";

export default function Countup(props: TCountupProps) {
  const countupStates = useCountup({ end: props.end, start: props.start, time: props.time });

  return (
    <span>
      {props.prefix}
      {countupStates.countup}
      {props.suffix}
    </span>
  );
}

type TCountupProps = TUseCountupProps & { prefix?: string; suffix?: string };
