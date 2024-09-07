"use client"
import Link from "next/link";
import Image from "next/image";
import { Loader, ChevronLeft, ChevronRight, ArrowBigLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from 'react';
import { SidebarItem } from "./sidebar-items";
import { useSidebar } from "@/app/(Work)/layout";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { toggleSidebar } = useSidebar();

  return (
    <div className={cn(
      "flex h-full flex-col transition-width duration-300 mt-[72px]",
      isOpen ? "w-[256px]" : "w-[90px]", // Adjust width based on isOpen state
      "lg:fixed left-0 top-0 px-2 border-r-2",
      className,
    )}>
     
      <div className="flex flex-col gap-y-2 flex-1 mt-5 relative">
        {/* SidebarItem components */}

        <SidebarItem 
          label="Home" 
          iconSrc="/briefcase.png"
          href="/dashboard"
          isOpen={isOpen}
        /> 
        <SidebarItem 
          label="My Jobs" 
          iconSrc="/briefcase.png"
          href="/myjobs"
          isOpen={isOpen}
        />
       
        <SidebarItem 
          label="Payments" 
          href="/payments"
          iconSrc="/circle-dollar-sign.png"
          isOpen={isOpen}
        />
         <SidebarItem 
          label="Agreements" 
          href="/createjob"
          iconSrc="/handshake.png"
          isOpen={isOpen}
        />
        <div className="mt-[550px] ml-3">
        <ModeToggle />

        </div>
        
      </div>
    </div>
  );
};