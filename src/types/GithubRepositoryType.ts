export type GithubRepositoryType = {
    id: number;
    name: string;
    full_name: string;
    languages_url: string;
    description?: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}