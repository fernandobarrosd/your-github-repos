"use client";

import { useParams } from "next/navigation";


export default function Error() {
    const params = useParams() as { fullName: string };
    const fullName = params.fullName.replace("-", "/");

   return (
        <main className="mt-4 flex max-w-full h-screen flex-col items-center 
        justify-center">
            <h1 className="text-3xl font-bold text-purple-600 flex flex-col
            items-center m-0 text-center max-w-[300px]">
                    <span>404</span>
                    <span>Repositorio não encontrado</span>
            </h1>
            <h2 className="text-sm bg-purple-600 text-white
            p-2 mt-4 rounded-sm max-w-72 text-center">
                Este repositório <span className="font-bold">{fullName}</span> não foi encontrado, 
                tente procurar outro.
            </h2>
        </main>
   )
}