import RecoveryPhrase from "./RecoveryPhrase";
import { useState } from "react";
import Wallet from "./Wallet";
import { Import } from "lucide-react";
import ImportWallet from "./ImportWallet";

export default function WalletView({ coin, onBack }: { coin: string, onBack: () => void }) {
    const [stage, setStage] = useState("recovery"); // recovery | wallet | import
    return (
        <div>
            <h1>{coin} Wallet</h1>
            {stage === "recovery" && <RecoveryPhrase />}
            {stage === "wallet" && <Wallet />}
            {stage === "import" && <ImportWallet />}
            <div className="flex justify-between items-center">
                <button onClick={onBack} className="bg-primary w-20 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all">Back</button>
                <div className="flex space-x-4">
                    {stage === "recovery" && <button onClick={() => { setStage("import") }} className="text-xl text-primary rounded-lg hover:opacity-90 hover:cursor-pointer transition-all">Import A Wallet?</button>}
                    {stage === "recovery" && <button onClick={() => { setStage("wallet") }} className="bg-primary w-30 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 hover:cursor-pointer transition-all">Proceed</button>}
                </div>
            </div>

        </div>
    )
}