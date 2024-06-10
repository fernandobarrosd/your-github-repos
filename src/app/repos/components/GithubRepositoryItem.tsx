import { GithubIcon } from "@/app/components/GithubIcon";
import { GithubRepositoryType } from "@/types/GithubRepositoryType";
import Link from "next/link";

type GithubRepositoryItemProps = {
    repository: Omit<GithubRepositoryType, 
"owner" | "private" | "language" | "id">
}

export function GithubRepositoryItem({ repository: { name, full_name: fullName } } 
    : GithubRepositoryItemProps) {
    return (
        <li className="w-32 flex flex-col items-center">
            <div className="bg-purple-600 h-20 flex justify-center items-center 
            rounded-md w-full">
                <GithubIcon width={24} heigth={24}/>
            </div>
            <p className="mt-2 text-xs w-full text-center">
                {fullName}
            </p>
            <Link href={`/repos/${name}`} 
            className="text-xs bg-purple-600 mt-2 p-2 rounded-md
             text-white font-bold">
                Veja mais
            </Link>
        </li>
    )
}