"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CryptoPop({ coin }: { coin: string }) {
    const logoSrc = coin === "Solana" ? "/solana_logo.svg" : "/Ethereum_logo.png";

    // Define custom colors based on the selected blockchain
    const shadowColor = coin === "Solana" ? "rgba(20, 241, 149, 0.6)" : "rgba(98, 126, 234, 0.6)";

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black overflow-hidden z-50">
            <motion.div
                initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    filter: [
                        `blur(0px) drop-shadow(0 0 0px ${shadowColor})`,
                        `blur(0px) drop-shadow(0 0 4px ${shadowColor})` // The "Glow" effect
                    ],
                }}
                exit={{ scale: 3, opacity: 0, filter: "blur(20px)" }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    // This makes the glow "pulse" slightly while it's on screen
                    filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror" }
                }}
            >
                <Image
                    src={logoSrc}
                    alt={coin}
                    width={200}
                    height={200}
                    className="relative" // Keep it clean
                    priority
                />
            </motion.div>
        </div>
    );
}