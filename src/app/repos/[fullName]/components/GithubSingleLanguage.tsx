type GithubSingleLanguageProps = {
    language: string;
}


export function GithubSingleLanguage({ language } : GithubSingleLanguageProps) {
    return (
        <span className="text-xs bg-purple-900 text-white rounded-md
        p-2 max-w-72 text-center mt-4">
            {language}
        </span>
    )
}