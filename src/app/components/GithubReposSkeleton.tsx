import { GithubRepositorySkeletonItem } from "./GithubRepositorySkeletonItem";

export function GithubReposSkeleton() {
    return (
        <ul className="mt-12 grid
                    grid-cols-2 min-[550px]:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    gap-x-6 gap-y-8 mb-8">
            {Array.from({ length: 12 }).map((_, index) => (
                <GithubRepositorySkeletonItem key={index} />
            ))}
        </ul>
    )
}