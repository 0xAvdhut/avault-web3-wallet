import { clsx, type ClassValue } from "clsx"
import nacl from "tweetnacl"
import { generateMnemonic, mnemonicToSeedSync } from "bip39"
import { derivePath } from "ed25519-hd-key"
import { Keypair } from "@solana/web3.js"
import { twMerge } from "tailwind-merge"
import bs58 from "bs58"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function initMnemonic(): string {
  const mnemonic = generateMnemonic();
  localStorage.setItem("wallets", "[]");
  localStorage.setItem("mnemonic", mnemonic);
  localStorage.setItem("id", "0"); // Initialize ID as 0
  return mnemonic;
}
export function viewMnemonic() {
  const mnemonic = localStorage.getItem("mnemonic");
  return mnemonic;
}

export function generateWallet() {
  const mnemonic = localStorage.getItem("mnemonic") ? (String(localStorage.getItem("mnemonic"))) : initMnemonic();
  var i = Number(localStorage.getItem("id") || 0);


  const seed = mnemonicToSeedSync(mnemonic);
  const solanaDerivationPath = `m/44'/501'/${i}'/0'`;
  const derivedSeed = derivePath(solanaDerivationPath, seed.toString("hex")).key

  addWalletToStorage(derivedSeed);
  // Increment the id ( Wallet no. )
  localStorage.setItem("id", (i + 1).toString());
  return derivedSeed
}



export function addWalletToStorage(derivedSeed: Buffer) {
  const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);
  const secret = bs58.encode(Buffer.from(keyPair.secretKey));
  const pub = bs58.encode(Buffer.from(keyPair.publicKey));

  const wallets = JSON.parse(localStorage.getItem("wallets") || "[]");
  wallets.push({ secret, pub });

  localStorage.setItem("wallets", JSON.stringify(wallets));
}