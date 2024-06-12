type GithubLanguagesListProps = {
    cols: number;
    languages: string[];
}

export function GithubLanguagesList({ cols, languages } : GithubLanguagesListProps) {
    return (
        <ul className={`grid grid-cols-${cols} gap-2 mt-4`}>
            {languages.map(language => (
            <li
            className="text-sm bg-purple-900 text-white rounded-md
            p-2 max-w-72 text-center" 
            key={language}>{language}</li>
            ))}
        </ul>
    )
}