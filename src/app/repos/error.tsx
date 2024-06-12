"use client";

import { ErrorListItem } from "../components/ErrorListItem";


export default function Error({ error } : { error: Error }) {
    return (
        <main className="flex w-full h-screen flex-col
        items-center justify-center">
            <h1 className="text-3xl font-bold text-purple-600
            text-center max-w-[300px]">
                Error ao carregar os repositórios
            </h1>
            <h2 className="mt-4 rounded-sm max-w-72 text-center
            bg-purple-800 p-2 text-white">
                Possíveis causas
            </h2>
            <ul className="flex flex-col items-center gap-2 mt-8">
                <ErrorListItem message="Internet não conectada"/>
                <ErrorListItem message="A API do Github está indiponível"/>
                <ErrorListItem message="Ou algum outro problema"/>
            </ul>
        </main>
    )
}