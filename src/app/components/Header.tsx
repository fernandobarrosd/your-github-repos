import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { TwitterXIcon } from "./icons/TwitterXIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { getServerSession } from "next-auth";
import { LogoutButton } from "./LogoutButton";
import { RoundedImage } from "./RoundedImage";
import { authOptions } from "../api/auth/authOptions";
import { ToogleTheme } from "./ToogleTheme/ToogleTheme";
import { cookies } from "next/headers";

export async function Header() {
    const session = await getServerSession(authOptions);
    const theme = cookies().get("theme");

    return (
        <header className={`flex items-center justify-center bg-purple-600 p-4
        relative ${theme?.value === "dark" && "dark:bg-purple-950"}`}>
          {session && (
            <LogoutButton className="absolute left-5"/>
          )}
          <nav className="flex gap-4">
            <Link href="https://github.com/fernandobarrosd">
              <GithubIcon/>
            </Link>
            <Link href="https://x.com/fbarrosdev">
              <TwitterXIcon/>
            </Link>

            <Link href="https://www.linkedin.com/in/fernando-de-barros-204864241/">
              <LinkedinIcon/>
            </Link>
          </nav>
          <ToogleTheme/>
          {session && (
            <RoundedImage size={35} 
            src={session.user?.image || ""}
            alt="User profile image"
            className="absolute right-8"/>
          )}
        </header>
    )
}