"use client";

import { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";

export default function MotionClient(props: TMotionClient) {
  const Element = motion[props.element];

  return <Element {...props}>{props.children}</Element>;
}

type TMotionClient = ComponentPropsWithoutRef<typeof motion.div> & { element: "div" | "span" | "h3" | "h1" };
