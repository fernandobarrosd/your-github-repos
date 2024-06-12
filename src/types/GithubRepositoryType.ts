import { GithubUserType } from "./GithubUserType";

export type GithubRepositoryType = {
    id: number;
    name: string;
    full_name: string;
    languages_url: string;
    description?: string;
    html_url: string;
    contributors_url: string;
    owner: Omit<GithubUserType, "id" | "html_url">
}