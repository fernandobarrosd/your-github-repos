import { GithubIcon } from "./components/GithubIcon";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-800 max-w-56 text-center">
        Seus repositórios do Github ou de outros usuários em um só lugar 
      </h1>
      <button className="bg-purple-600 flex items-center p-2 rounded-sm mt-8 gap-4
      text-white text-sm font-bold">
        Entrar com o Github
        <GithubIcon/>
      </button>
    </main>
  )
}