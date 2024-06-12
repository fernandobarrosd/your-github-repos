"use client";

import { SearchIcon } from "@/app/components/icons/SearchIcon";
import { GithubRepositoryItem } from "./GithubRepositoryItem";
import { useState } from "react";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { useSession } from "next-auth/react";
import { GITHUB_BASE_URL } from "@/variables";
import { GithubRepositorySkeletonItem } from "./GithubRepositorySkeletonItem";

type GithubReposListProps = {
    initialRepos: GithubRepositoryType[]
}

export function GithubReposList({ initialRepos } : GithubReposListProps) {
    const [ repos, setRepos ] = useState<GithubRepositoryType[]>(initialRepos);
    const { data: session } = useSession();
    const [ isLoading, setIsLoading ] = useState(false);

    function handleSearchGithubRepo(formData: FormData) {
        const searchValue = formData.get("search-value")?.toString();

        if (searchValue?.length) {
            setIsLoading(true);
            fetch(`${GITHUB_BASE_URL}/search/repositories?q=${searchValue}&per_page=20&page=1`, {
                headers: {
                    "Authorization": `Bearer ${session?.accessToken}`
                }
            })
            .then(response => response.json())
            .then(result => setRepos(result.items))
            .finally(() => setIsLoading(false));
        }
    }
    function handleInputChange(inputValue: string) {
        if (!inputValue.length) {
            setIsLoading(true);

            fetch(`${GITHUB_BASE_URL}/user/repos?per_page=20&page=1`, {
                headers: {
                    "Authorization": `Bearer ${session?.accessToken}`
                }
            })
            .then(response => response.json())
            .then(repos => setRepos(repos))
            .finally(() => setIsLoading(false));
        }
    }
    return (
        <>
        <form className="flex items-center justify-center rounded-2xl
        bg-gray-200 p-1.5 w-[300px] sm:w-[500px] lg:w-[800px]
        ring-[3.2px] ring-transparent has-[input:focus]:ring-purple-600"
        action={handleSearchGithubRepo}>
           <input type="text" placeholder="Search"
           className="w-full px-3 bg-gray-200 text-[0.8rem] outline-none"
            name="search-value"
            onChange={e => handleInputChange(e.target.value)}/>
            <button type="submit">
                <SearchIcon className="mr-2"/>
            </button>
        </form>
        {isLoading ? (
            <ul className="mt-12 grid
            grid-cols-2 min-[550px]:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-x-6 gap-y-8 mb-8">
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
                <GithubRepositorySkeletonItem/>
            </ul>
        ) : (
            <ul className="mt-12 grid
            grid-cols-2 min-[550px]:grid-cols-3
            sm:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-6 gap-y-8 mb-8">
            {repos.map(({ id, full_name, owner } ) => (
                <GithubRepositoryItem
                key={id}
                fullName={full_name}
                />
            ))}
        </ul>
        )}
        </>
    )
}