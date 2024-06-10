export type GithubRepositoryType = {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    language: string;
    owner: {
        login: string;
    }
}