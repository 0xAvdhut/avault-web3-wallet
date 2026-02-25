"use client"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { CiVault } from "react-icons/ci";

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="flex items-center py-4">
            <div className=" flex justify-between items-center w-full">
                <span className="flex items-center space-x-2"><CiVault className="text-3xl" />
                    <h1 className="text-3xl font-extrabold font-sans">
                        aVAULT</h1>
                </span>
                <div className=" flex justify-end items-center gap-2">
                    <span className="flex items-center space-x-2">
                        <Switch id="dark-mode" defaultChecked={true} onClick={() => {
                            setTheme(theme === "light" ? "dark" : "light")
                        }} />
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                    </span>
                </div>
            </div>
        </nav>
    );
}