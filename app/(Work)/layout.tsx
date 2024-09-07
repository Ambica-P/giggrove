"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import "../wallet.css";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { Sidebar } from "@/components/sidebar";
import {
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { Appbar } from "@/components/AppBar";
require("@solana/wallet-adapter-react-ui/styles.css");

const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebar: () => {}
});
export function useSidebar() {
  return useContext(SidebarContext);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const network = WalletAdapterNetwork.Devnet;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [], [network]);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <WalletModalProvider>
            <div className="flex flex-col h-screen">
              {/* Appbar */}
              <Appbar />
              
              <div className="flex flex-1">
                {/* Sidebar */}
                <aside
                  className={`transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 text-white`}
                  style={{ height: 'calc(100vh - 64px)' }} // Adjust height based on Appbar height
                >
                  <Sidebar />
                </aside>

                {/* Main content */}
                <main className="flex-1 overflow-auto p-4" style={{ marginTop: '84px' }}> {/* Adjust marginTop based on Appbar height */}
                  {children}
                </main>
              </div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </SidebarContext.Provider>
  );
}
