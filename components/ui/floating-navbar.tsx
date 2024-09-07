"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import { useRouter } from "next/navigation"

export const FloatingNav = ({
  
  navItems,
  className,
  isAuroraCrossed,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  isAuroraCrossed: boolean;
}) => {
  const route = useRouter()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-between", // Removed padding and added 'justify-between' for proper spacing
          className
        )}
        style={{ height: "4rem" }} // Set a fixed height for the navbar
      >
        <div className="flex items-center h-full pl-5 pr-5"> {/* Set padding and height */}
          <img
            src="/logoplz.jpeg"
            alt="Logo"
            className="h-12 w-18 sm:h-16 sm:w-24 object-contain" // Use object-contain to ensure the logo scales properly within the navbar
          />
        </div>

        {isAuroraCrossed && (
          <div className="flex space-x-4 pr-4"> {/* Added padding to space buttons properly */}
            <button className="px-4 py-2 text-sm font-medium text-black bg-transparent border rounded-full border-neutral-200 dark:border-white/[0.2] dark:text-white"
            onClick={()=>{route.push("/Main1")}}>
              Launch Gig
            </button>
            <button className="px-4 py-2 text-sm font-medium text-black bg-transparent border rounded-full border-neutral-200 dark:border-white/[0.2] dark:text-white"
            onClick={()=>{route.push("/Main1")}}>
              Score Gig
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};