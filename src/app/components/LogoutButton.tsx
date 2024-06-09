"use client";

import { signOut } from "next-auth/react"

export function LogoutButton({ className }: { className?: string }) {
    function handleLogout() {
        signOut({ callbackUrl: "/" });
    }
    return (
        <button className={`border-[1px] border-white p-2 text-xs
            rounded-md bg-purple-700 text-white
            w-16
        ${className}`} onClick={handleLogout}>
            Sair
        </button>
    )
}