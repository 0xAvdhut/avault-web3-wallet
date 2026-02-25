export default function ImportWallet() {
    return (
        <div>
            <h1>Import Wallet</h1>
            <input type="text" placeholder="Recovery Phrase" className="bg-secondary bg-opacity-40 w-200
             h-10 text-xl font-bold text-primary rounded-lg hover:opacity-90 transition-all" />
            <button className="bg-primary w-20 h-10 text-xl font-bold text-secondary rounded-lg hover:opacity-90 transition-all">Import</button>
        </div>
    )
}   