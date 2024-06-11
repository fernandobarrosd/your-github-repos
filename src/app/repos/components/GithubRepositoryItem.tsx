import { GithubIcon } from "@/app/components/icons/GithubIcon";
import Link from "next/link";

type GithubRepositoryItemProps = {
    fullName: string
}

export function GithubRepositoryItem({ fullName } : GithubRepositoryItemProps) {
    return (
        <li className="w-32 flex flex-col items-center">
            <div className="bg-purple-600 h-20 flex justify-center items-center 
            rounded-md w-full">
                <GithubIcon width={24} heigth={24}/>
            </div>
            <p className="mt-2 text-xs w-full text-center">
                {`${fullName}`}
            </p>
            <Link href={`/repos/${fullName.replace("/", "-")}`} 
            className="text-xs bg-purple-600 mt-2 p-2 rounded-md
             text-white font-bold">
                Veja mais
            </Link>
        </li>
    )
}