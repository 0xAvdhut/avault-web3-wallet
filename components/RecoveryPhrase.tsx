export default function RecoveryPhrase() {
    return (
        <div>
            <h1 className="text-5xl font-bold">Recovery Phrase</h1>
            <p className="text-xl opacity-80">Write down your recovery phrase in a safe place</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="bg-secondary bg-opacity-40 w-40 h-12 md:w-50 md:h-15 lg:w-60 lg:h-20 text-xl text-primary flex items-center justify-center rounded-lg hover:opacity-90 transition-all">
                        {index + 1}
                    </div>
                ))}
            </div>
        </div>
    )
}