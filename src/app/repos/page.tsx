import { Suspense } from "react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GITHUB_BASE_URL } from "../constants";
import { authOptions } from "../api/auth/authOptions";
import { GithubReposList } from "../components/GithubReposList";
import { GithubReposSkeleton } from "../components/GithubReposSkeleton";
import { SearchUserForm } from "../components/SearchUserForm";

export const metadata: Metadata = {
    title: "Your Github Repos - Repos",
}

type ReposPageProps = {
    searchParams: {
        search: string | undefined;
    }
};


async function getRepos(search: string | undefined, accessToken: string | undefined) {
    const requestURL = search ? `${GITHUB_BASE_URL}/search/repositories?q=${search}&per_page=20&page=1`
        : `${GITHUB_BASE_URL}/user/repos?per_page=20&page=1`;

    const response = await fetch(requestURL, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })

    const result = await response.json();
    const repos: GithubRepositoryType[] = result.items ? result.items : result;

    return repos;
}

export default async function Repos({ searchParams }: ReposPageProps) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return redirect("/");
    }

    const { search } = searchParams;


    return (
        <main className="mt-4 flex max-w-full flex-col items-center">
            <SearchUserForm />
            <Suspense key={search || "search"} fallback={<GithubReposSkeleton />}>
                <GithubReposList repos={getRepos(search, session.accessToken)} />
            </Suspense>
        </main>
    );
}