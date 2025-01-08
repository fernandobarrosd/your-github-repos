"use client";

import { use } from "react";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GithubRepositoryItem } from "./GithubRepositoryItem";

type GithubRepositoryListProps = {
    repos: Promise<GithubRepositoryType[]>
};

export function GithubReposList({ repos }: GithubRepositoryListProps) {
    const reposData = use(repos);

    return (
        <ul className="mt-12 grid
                    grid-cols-2 min-[550px]:grid-cols-3
                    sm:grid-cols-4
                    lg:grid-cols-6
                    xl:grid-cols-7
                    gap-x-6 gap-y-8 mb-8">
            {reposData.map(({ id, full_name, owner }) => (
                <GithubRepositoryItem
                    key={id}
                    fullName={full_name}
                />
            ))}
        </ul>
    )
}