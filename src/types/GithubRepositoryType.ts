export type GithubRepositoryType = {
    id: number;
    name: string;
    private: boolean;
    language: string;
    owner: {
        login: string;
    }
}