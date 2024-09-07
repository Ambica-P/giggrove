"use client";
import { BACKEND_URL } from "@/utils";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "../app/wallet.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Appbar = () => {
  const { publicKey, signMessage } = useWallet();
  const route = useRouter();
  const storedPublicKey = localStorage.getItem("publicKey");
  const PublicKey = storedPublicKey || publicKey;

  async function sendSignatureAndSend() {
    const message = new TextEncoder().encode("Sign in to mechanical turk");
    const signature = await signMessage?.(message);
    const response = await axios.post(`${BACKEND_URL}/v1/user/signin`, {
      signature,
      publicKey: publicKey?.toString(),
    });
    if (publicKey && response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("publicKey", publicKey.toString());
    }
  }

  useEffect(() => {
    sendSignatureAndSend();
  }, [PublicKey]);

  return (
    <div className="fixed top-0 w-full flex justify-between items-center border-b pb-2 pt-2 bg-logoBlue z-50">
      <button className="flex items-center h-full pl-5 pr-5" 
      onClick={() => route.push("/")}> {/* Set padding and height */} 
        <img
          src="/logoplz.jpeg"
          alt="Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
        />
      </button>
      <div className="flex flex-grow justify-center gap-5 text-white text-sm sm:text-lg md:text-xl lg:text-2xl">
        <button className="hover:text-slate-400" onClick={() => route.push("/dashboard")}>
          Dashboard
        </button>
      </div>
      <div className="text-sm sm:text-lg md:text-xl lg:text-2xl pr-4 pb-2 flex items-center">
        {PublicKey ? (
          <DisconnectButton />
        ) : (
          <WalletMultiButton className="wallet-button" />
        )}
      </div>
    </div>
  );
};

const DisconnectButton = () => {
  const route = useRouter();
  const handleDisconnect = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("publicKey");
    route.push("/Home");
  };
  return <WalletDisconnectButton onClick={handleDisconnect} />;
};
