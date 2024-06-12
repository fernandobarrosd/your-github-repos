import { Metadata } from "next";
import { NotFoundPageText } from "./components/NotFoundPageText";


export const metadata : Metadata = {
    title: "Page Not Found - 404"
}

export default function NotFound() {

    return (
        <main className="flex w-full h-screen flex-col
        items-center justify-center">
            <h1 className="text-3xl font-bold text-purple-600 flex flex-col
                items-center m-0">
                    <span>404</span>
                    <span>Pagina não encontrada</span>
                </h1>
                <NotFoundPageText/>
        </main>
    )
}