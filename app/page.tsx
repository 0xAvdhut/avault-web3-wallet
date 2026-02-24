import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto gap-4">

      <Navbar />
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-between text-align-left">

          <h1 className="text-3xl font-extrabold font-sans">
            aVAULT is a Web3 Based Wallet for Solana And Ethereum</h1>
          <p className="text-xl font-medium font-sans">
            aVAULT is a Web3 Based Wallet for Solana And Ethereum
          </p>
          <p className="text-xl font-light font-sans">
            Choose a Blockchain to get started!
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button className="bg-white text-4xl font-bold text-black px-40 py-20 rounded-lg cursor-pointer">Solana</button>
          <button className="bg-white text-4xl font-bold text-black px-40 py-20 rounded-lg cursor-pointer">Ethereum</button>
        </div>
      </div>
    </main>
  );
}
