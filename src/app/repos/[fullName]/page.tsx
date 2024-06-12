import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GithubUserType } from "@/types/GithubUserType";
import { GITHUB_BASE_URL } from "@/variables";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { GithubLanguagesList } from "./components/GithubLanguagesList";
import { ContributorsList } from "./components/ContributorsList";
import { RoundedImage } from "@/app/components/RoundedImage";
import { HouseIcon } from "@/app/components/icons/HouseIcon";
import { Metadata } from "next";
import { authOptions } from "@/app/api/auth/authOptions";

type RepoInfoProps = {
    params: {
        fullName: string;
    }
}

export function generateMetadata({ params: { fullName } } : RepoInfoProps) : Metadata {
    return {
        title: `Your Github Repos - ${fullName}`,
    }
}

export default async function RepoInfo({ params: { fullName } } : RepoInfoProps) {
    const session = await getServerSession(authOptions);

    const newFullName = fullName.replace("-", "/");

    const headers = {
        "Authorization": `Bearer ${session?.accessToken}`
    }

    const response = await fetch(`${GITHUB_BASE_URL}/repos/${newFullName}`, {
        headers
    });
   
    const repository = await response.json() as GithubRepositoryType;
    const response2 = await fetch(repository.languages_url, {
        headers
    });
    const response3 = await fetch(repository.contributors_url, {
        headers
    });

    const constributors = await response3.json() as GithubUserType[];
    const languages =  Object.keys(await response2.json());

    return (
        <main className="mt-4 flex max-w-full flex-col items-center">
            <Link href="/repos"
            className="bg-purple-600 absolute left-5 p-2 rounded-md
            text-white">
                <HouseIcon/>
            </Link>
            
            <RoundedImage src={repository.owner.avatar_url}
            className="mt-4 bg-purple-700 p-6"
            size={120} alt="Github owner profile"/>

            <Link href={repository.html_url} 
            className="text-sm bg-purple-600 text-white rounded-md mt-4
            p-2 font-bold">
                {repository.full_name}
            </Link>
            {repository.description && (
                <span className="text-sm bg-purple-800 text-white rounded-md mt-2
                p-2 max-w-72 text-center">
                    {repository.description}
            </span>
            )}
            <GithubLanguagesList languages={languages}/>
            
            
            {constributors.length != 1 && (
                <ContributorsList constributors={constributors}/>
            )}
        </main>
    );
}