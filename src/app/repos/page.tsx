import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GithubReposList } from "./components/GithubReposList";


export default async function Repos() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect("/");
    }
    const response = await fetch("https://api.github.com/user/repos?per_page=20&page=1", {
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