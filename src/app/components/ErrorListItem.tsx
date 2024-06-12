export function ErrorListItem({ message } : { message: string }) {
    return (
        <li className="text-xs p-2 bg-purple-600 text-white rounded-md">
            {message}
        </li>
    )
}