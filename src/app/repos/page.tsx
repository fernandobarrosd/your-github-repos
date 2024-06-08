import { getServerSession } from "next-auth";
import { SearchIcon } from "../components/SearchIcon";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { GithubIcon } from "../components/GithubIcon";
import Link from "next/link";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GithubRepositoryItem } from "./components/GithubRepositoryItem";

export default async function Repos() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return redirect("/")
    }
    const response = await fetch("https://api.github.com/user/repos", {
        headers: {
            "Authorization": `Bearer ${session.accessToken}`
        }
    });
    const repos = await response.json() as GithubRepositoryType[];


    return (
        <main className="mt-4 flex w-full flex-col items-center">
            <div className="flex w-72 border items-center justify-center rounded-2xl
            bg-gray-100 p-0.5">
                <input type="text" placeholder="Search"
                className="w-72 px-3 bg-gray-100 text-[0.8rem]"/>
                <SearchIcon className="mr-2"/>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 mb-8">
                {repos.map(({ id, name } ) => (
                    <GithubRepositoryItem key={id} name={name}/>
                ))}
            </ul>
        </main>
    )
}