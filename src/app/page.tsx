import { LoginWithGithubButton } from "./components/LoginWithGithubButton";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-purple-800 max-w-56 text-center">
        Seus repositórios do Github ou de outros usuários em um só lugar 
      </h1>
      <LoginWithGithubButton/>
    </main>
  )
}