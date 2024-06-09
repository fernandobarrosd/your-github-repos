import Link from "next/link";
import { GithubIcon } from "./GithubIcon";
import { TwitterXIcon } from "./TwitterXIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";

export async function Header() {
    const session = await getServerSession(authOptions);
    return (
        <header className="flex items-center justify-center bg-purple-600 p-4
        relative">
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
          {session && (
            <Image width={35} height={35} src={session.user?.image || ""}
            alt="User profile image"
            className="absolute right-8 rounded-full"/>
          )}
        </header>
    )
}