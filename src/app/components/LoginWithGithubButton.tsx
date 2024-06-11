"use client";

import { signIn } from "next-auth/react";
import { GithubIcon } from "./icons/GithubIcon";

export function LoginWithGithubButton() {
    function handleLoginWithGithub() {
        signIn("github", { callbackUrl: "/repos" })
    }
    return (
        <button className="bg-purple-600 flex items-center p-2 rounded-sm mt-8 gap-4
      text-white text-sm font-bold"
      onClick={handleLoginWithGithub}>
        Entrar com o Github
        <GithubIcon/>
      </button>
    )
}