import { clsx } from "clsx";
import React from "react";

const defaultStyle = "bg-[#EEEEEE] w-full h-[4px]";
const thinStyle = "bg-[#D9D9D9] w-full h-[1px]";

interface Props {
  type?: "default" | "thin";
}

export default function Divider({ type = "default" }: Props) {
  return (
    <div className={clsx(type === "default" ? defaultStyle : thinStyle)} />
  );
}
