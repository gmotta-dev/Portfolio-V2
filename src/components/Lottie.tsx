"use client";

import React, { FC, useState } from "react";
import dynamic from "next/dynamic";

const ReactLottie = dynamic(() => {return import("lottie-react")}, { ssr: false });

export const MyLottie: FC<ComponentTypes> = ({ JSON, ...rest }) => {
  const [opacity, setOpacity] = useState(false);

  return (
    <div className={`${rest.classNames?.container} ${rest.className}`}>
        <ReactLottie
          animationData={JSON}
          onDOMLoaded={() => setOpacity(true)}
          className={`transition-all duration-1000 ${opacity ? "opacity-100" : "opacity-0"} ${rest.classNames?.lottie} `}
        />
    </div>
  );
};

interface ComponentTypes extends React.HTMLAttributes<HTMLSpanElement> {
  JSON: any;
  classNames?: { container?: string; lottie?: string };
}
