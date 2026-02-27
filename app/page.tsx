"use client";
import CryptoPop from "@/components/CryptoPop";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import WalletView from "@/components/WalletView";
import { generateWallet } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Home() {
  const [stage, setStage] = useState("landing"); // landing | transition | wallet
  const [selectedCoin, setSelectedCoin] = useState("");
  useEffect(() => {
    if (stage === "transition") {
      generateWallet();
    }
  }, [stage]);
  const handleCoinSelection = (coin: string) => {
    setSelectedCoin(coin);
    localStorage.setItem("coin", coin);
    setStage("transition");

    // Switch to the actual wallet view after animation finishes
    setTimeout(() => {
      setStage("wallet");
    }, 1600);
  };
  return (
    //TODO: When a user clicks on Solana or Ethereum, it should redirect to the respective blockchain page with loading page should animate the logo of that crypto flying by from right to left 
    <main className="max-w-7xl mx-auto flex flex-col gap-4 p-4 min-h-[92vh]">
      <Navbar />
      {stage === "landing" && <Landing onSelect={handleCoinSelection} />}

      {stage === "transition" && <CryptoPop coin={selectedCoin} />}

      {stage === "wallet" && (
        <WalletView coin={selectedCoin} onBack={() => setStage("landing")} />
      )}
    </main>
  );
}
