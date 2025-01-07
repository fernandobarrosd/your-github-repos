"use client";

import { getCookie } from "cookies-next/client";
import { signOut } from "next-auth/react"
import { THEME_COOKIE_KEY } from "../constants";

export function LogoutButton({ className }: { className?: string }) {
    const theme = getCookie(THEME_COOKIE_KEY) || "light";

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