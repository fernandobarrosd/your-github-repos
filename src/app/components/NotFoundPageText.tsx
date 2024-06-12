"use client";

import { usePathname } from "next/navigation";

export function NotFoundPageText() {
    const pathName = usePathname();
    return (
        <h2 className="text-sm bg-purple-600 text-white
        p-2 mt-4 rounded-sm max-w-72 text-center">
            Esta <span className="font-bold">{pathName}</span> página não está
            disponível, tente procurar outra.
        </h2>
    )
}