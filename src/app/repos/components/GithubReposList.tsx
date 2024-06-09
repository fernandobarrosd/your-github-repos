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

        if (searchValue?.length) {
            fetch(`https://api.github.com/search/repositories?q=${searchValue}`, {
                headers: {
                    "Authorization": `Bearer ${session?.accessToken}`
                }
            })
            .then(response => response.json())
            .then(result => setRepos(result.items));
        }
    }
    async function handleInputChange(inputValue: string) {
        if (!inputValue.length) {
            const response = await fetch("https://api.github.com/user/repos", {
                headers: {
                    "Authorization": `Bearer ${session?.accessToken}`
                }
            });
            const repos = await response.json() as GithubRepositoryType[];
            setRepos(repos);
        }
    }
    return (
        <>
        <form className="flex min-w-[300px] items-center justify-center rounded-2xl
        bg-gray-200 p-1.5 sm:min-w-[700px] ring-[3.2px] ring-transparent has-[input:focus]:ring-purple-600"
        action={handleSearchGithubRepo}>
           <input type="text" placeholder="Search"
           className="w-full px-3 bg-gray-200 text-[0.8rem] outline-none"
            name="search-value"
            onChange={e => handleInputChange(e.target.value)}/>
            <button type="submit">
                <SearchIcon className="mr-2"/>
            </button>
        </form>
        <ul className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 mb-8
        sm:grid-cols-3 lg:grid-cols-6">
            {repos.map(({ id, name, owner: { login: ownerName } } ) => (
                <GithubRepositoryItem key={id} name={`${ownerName}/${name}`}/>
            ))}
        </ul>
        </>
    )
}