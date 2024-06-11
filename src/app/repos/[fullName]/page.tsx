import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import { GITHUB_BASE_URL } from "@/variables";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";


type RepoInfoProps = {
    params: {
        fullName: string;
    }
}

export default async function RepoInfo({ params: { fullName } } : RepoInfoProps) {
    const session = await getServerSession(authOptions);
    const newFullName = fullName.replace("-", "/");

    const response = await fetch(`${GITHUB_BASE_URL}/repos/${newFullName}`, {
        headers: {
            "Authorization": `Bearer ${session?.accessToken}`
        }
    });
   
    const repository = await response.json() as GithubRepositoryType;
    const response2 = await fetch(repository.languages_url, {
        headers: {
            "Authorization": `Bearer ${session?.accessToken}`
        }
    });
    const languages =  Object.keys(await response2.json());

    return (
        <main className="mt-4 flex max-w-full flex-col items-center">
            <Link href="/repos"
            className="bg-purple-600 absolute left-5 p-2 rounded-md
            text-white">
                Voltar
            </Link>
            <Image src={repository.owner.avatar_url}
            className="mt-4 rounded-full sm:w-[140px] sm:h-[140px]"
            width={100} height={100} alt="Github owner profile"/>
            <span className="text-sm bg-purple-600 text-white rounded-md mt-4
            p-2 font-bold">
                {repository.name}
            </span>
            {languages.length === 1 ? (
                <span className="text-sm bg-purple-600 text-white rounded-md mt-8
                p-2 max-w-72 text-center">{languages[0]}</span>
                
            ) : (
                <ul className="grid grid-cols-3 gap-2 mt-8">
                    {languages.map(language => (
                       <li
                       className="text-sm bg-purple-900 text-white rounded-md
                        p-2 max-w-72 text-center" 
                       key={language}>{language}</li>
                    ))}
                </ul>
            )}
            
            
            <span className="text-sm bg-purple-800 text-white rounded-md mt-8
                p-2 max-w-72 text-center">
                    {repository.description ? repository.description :
                    "Sem descrição"}
            </span>
        </main>
    );
}