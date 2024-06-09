"use client";

import { SearchIcon } from "@/app/components/SearchIcon";
import { GithubRepositoryItem } from "./GithubRepositoryItem";
import { useState } from "react";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { useSession } from "next-auth/react";

type GithubReposListProps = {
    initialRepos: GithubRepositoryType[]
}

export function GithubReposList({ initialRepos } : GithubReposListProps) {
    const [ repos, setRepos ] = useState<GithubRepositoryType[]>(initialRepos);
    const { data: session } = useSession();

    function handleSearchGithubRepo(formData: FormData) {
        const searchValue = formData.get("search-value")?.toString();

        fetch(`https://api.github.com/search/repositories?q=${searchValue}`, {
            headers: {
                "Authorization": `Bearer ${session?.accessToken}`
            }
        })
        .then(response => response.json())
        .then(result => setRepos(result.items));
    }
    return (
        <>
        <form className="flex min-w-[300px] items-center justify-center rounded-2xl
        bg-gray-200 p-1.5 sm:min-w-[700px] h1"
        action={handleSearchGithubRepo}>
           <input type="text" placeholder="Search"
           className="w-full px-3 bg-gray-200 text-[0.8rem] outline-none"
            name="search-value"/>
            <button type="submit">
                <SearchIcon className="mr-2"/>
            </button>
        </form>
        <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 mb-8
        sm:grid-cols-3 lg:grid-cols-6">
            {repos.map(({ id, name, owner: { login: ownerName } } ) => (
                <GithubRepositoryItem key={id} name={`${ownerName}/${name}`}/>
            ))}
        </ul>
        </>
    )
}