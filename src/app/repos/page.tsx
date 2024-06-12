import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GithubReposList } from "./components/GithubReposList";
import { GITHUB_BASE_URL } from "@/variables";
import { Metadata } from "next";
import { authOptions } from "../api/auth/authOptions";

export const metadata : Metadata = {
    title: "Your Github Repos - Repos",
}

export default async function Repos() {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return redirect("/");
    }
    const response = await fetch(`${GITHUB_BASE_URL}/user/repos?per_page=20&page=1`, {
        headers: {
            "Authorization": `Bearer ${session.accessToken}`
        }
    });
    const repos = await response.json() as GithubRepositoryType[];
    

    return (
        <main className="mt-4 flex max-w-full flex-col items-center">
            <GithubReposList initialRepos={repos}/>
        </main>
    )
}