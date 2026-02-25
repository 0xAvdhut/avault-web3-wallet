export default function Landing({ onSelect }: { onSelect: (coin: string) => void }) {
    return (
        <div className="flex flex-col items-start gap-6">
            <h1 className="text-4xl font-extrabold">
                aVAULT is a Web3 Based Wallet for Solana And Ethereum
            </h1>
            <p className="text-xl opacity-80">Choose a Blockchain to get started!</p>
            <div className="flex space-x-4">
                <button
                    onClick={() => onSelect("Solana")}
                    className="bg-primary w-60 h-40 text-4xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all"
                >
                    Solana
                </button>
                <button
                    onClick={() => onSelect("Ethereum")}
                    className="bg-primary w-60 h-40 text-4xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all"
                >
                    Ethereum
                </button>
            </div>
        </div>
    );
}