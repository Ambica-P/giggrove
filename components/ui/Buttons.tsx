"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Ensure this utility is correct

function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 0.3, // Duration for color transition
  bgColor = "bg-black",
  textColor = "text-white",
  hoverBgColor = "bg-blue-500", // Default hover color
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    bgColor?: string;
    textColor?: string;
    hoverBgColor?: string; // Add hoverBgColor prop
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex items-center justify-center rounded-full border border-transparent transition duration-300", // Transition for color change
        hovered ? hoverBgColor : bgColor,
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 px-4 py-2 rounded-full",
          textColor,
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

export default HoverBorderGradient;
