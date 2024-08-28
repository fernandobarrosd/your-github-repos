import { cookies } from "next/headers";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { changeTheme } from "./action";

export function ToogleTheme() {
    const nextCookies = cookies();
    const theme = nextCookies.get("theme");

    
    return (
        <form className="absolute right-20 cursor-pointer"
        action={changeTheme}>
            <button type="submit" className="flex items-center">
                {theme != null ? theme.value === "dark" ? (
                    <SunIcon/>
                ) : (
                    <MoonIcon/>
                ) : (
                    <MoonIcon/>
                )}
            </button>
        </form>
    )
}