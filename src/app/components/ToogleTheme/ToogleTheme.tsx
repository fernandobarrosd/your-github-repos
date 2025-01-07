import { cookies } from "next/headers";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { changeTheme } from "./action";
import { getCookie } from "cookies-next/server";
import { THEME_COOKIE_KEY } from "@/app/constants";

export async function ToogleTheme() {
    const theme = await getCookie(THEME_COOKIE_KEY, { cookies }) || "light";

    return (
        <form className="absolute right-20 cursor-pointer"
        action={changeTheme}>
            <button type="submit" className="flex items-center">
                { theme === "light" ? (
                    <MoonIcon/>
                ) : <SunIcon/>}
            </button>
        </form>
    )
}