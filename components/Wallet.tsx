import React from "react";

export default function Wallet() {
    const coin = localStorage.getItem("coin") || "";
    const wallets = JSON.parse(localStorage.getItem("wallets") || "[]");
    return (
        <div>
            <h1 className="text-5xl font-bold py-2">{coin} Wallet</h1>
            <div className="flex flex-col gap-4">
                {wallets.map((wallet: any, index: number) => (
                    <React.Fragment key={index}>
                        <div className="bg-secondary bg-opacity-40 m-0 p-5 h-60 my-2 text-xl text-primary flex rounded-lg hover:opacity-90 transition-all">
                            <div className="w-1/2 flex justify-between flex-col gap-2">
                                <div className="">{wallet.pub.slice(0, 6) + "..." + wallet.pub.slice(-6)}</div>
                                <div className="text-6xl font-bold">$4221.71</div>
                            </div>
                            <div className="flex flex-col items-end gap-2 w-1/2">
                                <button onClick={() => navigator.clipboard.writeText(wallet.secret)} className=" text-xl opacity-80 text-primary rounded-lg hover:opacity-90 hover:cursor-pointer transition-all">Copy Private Key</button>
                                {/* <p className="hidden text-primary">{wallet.pub.secret}</p> */}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-between items-center">
                {/* <button onClick={() => setStage("landing")} className="bg-primary w-20 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all">Back</button> */}
                <button className="bg-primary w-20 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all">Add Wallet</button>
            </div>
        </div>
    )
}