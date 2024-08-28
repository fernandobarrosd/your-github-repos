"use client";

import { signOut } from "next-auth/react"
import { useCookies } from "next-client-cookies";

export function LogoutButton({ className }: { className?: string }) {
    const cookies = useCookies();
    const theme = cookies.get("theme");

    function handleLogout() {
        signOut({ callbackUrl: "/" });
    }
    return (
        <button className={`border-[1px] border-white p-2 text-xs
            rounded-md bg-purple-700 text-white
            w-16 ${theme === "dark" && "dark:bg-purple-900"}
        ${className}`} onClick={handleLogout}>
            Sair
        </button>
    )
}