"use server";

import { THEME_COOKIE_KEY } from "@/app/constants";
import { getCookie, setCookie } from "cookies-next/server";
import { cookies } from "next/headers";

export async function changeTheme() {
    const theme = await getCookie(THEME_COOKIE_KEY, { cookies }) || "light";
    
    if (theme === "dark") {
        await setCookie(THEME_COOKIE_KEY, "light", { cookies });
    }
    else {
        await setCookie(THEME_COOKIE_KEY, "dark", { cookies });
    }
}