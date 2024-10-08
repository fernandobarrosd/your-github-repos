import { getServerSession } from "next-auth";
import { LoginWithGithubButton } from "./components/LoginWithGithubButton";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";
import { cookies } from "next/headers";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const theme = cookies().get("theme");
  
  if (session) {
    return redirect("/repos");
  }
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className={`text-3xl font-bold text-purple-800 max-w-56 text-center
        ${theme?.value === "dark" && "dark:text-purple-900"}`}>
        Seus repositórios do Github ou de outros usuários em um só lugar 
      </h1>
      <LoginWithGithubButton/>
    </main>
  )
}