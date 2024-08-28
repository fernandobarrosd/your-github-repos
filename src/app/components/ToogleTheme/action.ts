"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function changeTheme() {
    const nextCookies = cookies();
    const theme = nextCookies.get("theme");
    
    if (theme) {
        if (theme?.value === "dark") {
            nextCookies.set("theme", "light");
        }
        else {
            nextCookies.set("theme", "dark");
        }
    }
    else {
        nextCookies.set("theme", "dark");
    }
}