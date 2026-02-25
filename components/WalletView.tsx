import RecoveryPhrase from "./RecoveryPhrase";

export default function WalletView({ coin, onBack }: { coin: string, onBack: () => void }) {
    return (
        <div>
            <h1>{coin} Wallet</h1>
            <RecoveryPhrase />
            <div className="flex justify-between items-center">
                <button onClick={onBack} className="bg-primary w-20 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all">Back</button>
                <div className="flex space-x-4">
                    <button onClick={onBack} className="text-xl text-primary rounded-lg hover:opacity-90 hover:cursor-pointer transition-all">Import A Wallet?</button>
                    <button onClick={onBack} className="bg-primary w-30 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 hover:cursor-pointer transition-all">Proceed</button>
                </div>
            </div>

        </div>
    )
}