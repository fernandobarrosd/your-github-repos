import { RoundedImage } from "@/app/components/RoundedImage";
import { GithubUserType } from "@/types/GithubUserType";
import Link from "next/link";

type ConstributorsListProps = {
    constributors: GithubUserType[]
}

export function ContributorsList({ constributors } : ConstributorsListProps) {
    return (
        <ul className="grid grid-cols-5 sm:grid-cols-6 gap-2 mt-8 mb-8">
            {constributors.map(contributor => (
            <li key={contributor.id}>
                <Link href={contributor.html_url}
                target="_blank">
                    <RoundedImage
                    src={contributor.avatar_url}
                    size={40}
                    className="hover:scale-150"
                    alt="Contributor avatar url"/>
                </Link>
            </li>
            ))}
        </ul>
    )
}