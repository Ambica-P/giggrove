"use client";
import React, { useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar2";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "@/utils";

export function SidebarDemo() {
  const { publicKey, signMessage } = useWallet();
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(!!publicKey);

  useEffect(() => {
    const sendSignatureAndSend = async () => {
      if (publicKey && signMessage) {
        const message = new TextEncoder().encode("Sign in to mechanical turk");
        const signature = await signMessage(message);
        const response = await axios.post(`${BACKEND_URL}/v1/user/signin`, {
          signature,
          publicKey: publicKey.toString(),
        });
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("publicKey", publicKey.toString());
          setIsAuthenticated(true);
        }
      }
    };
    
    sendSignatureAndSend();
  }, [publicKey, signMessage]);

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  const handleDisconnect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("publicKey");
    route.push("/Home");
  };

  return (
    <div>
      {/* Toggle button for small screens */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white rounded-md"
      >
        <IconArrowLeft className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <Sidebar
        open={open}
        setOpen={setOpen}
        animate={false}
      >
        <SidebarBody className="bg-gray-300 hover:bg-gray-200 min-h-full">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Logo open={open} />
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              {isAuthenticated ? (
                <WalletDisconnectButton className="wallet-button" onClick={handleDisconnect} />
              ) : (
                <WalletMultiButton className="wallet-button" />
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  );
}

// Logo Component with Dynamic Height
export const Logo = ({ open }: { open: boolean }) => {
  return (
    <Link href="#">
      <img
        src="/Logo-main.png" // Ensure this path is correct
        alt="Logo"
        className={`transition-none ${open ? "h-8" : "h-8"}`} // Fixed height
      />
    </Link>
  );
};

// LogoIcon Component
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
