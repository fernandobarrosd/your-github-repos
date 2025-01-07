import { getServerSession } from "next-auth";
import { LoginWithGithubButton } from "./components/LoginWithGithubButton";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/authOptions";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next/server";
import { THEME_COOKIE_KEY } from "./constants";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const theme = await getCookie(THEME_COOKIE_KEY, {cookies}) || "light";
  
  if (session) {
    return redirect("/repos");
  }
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <h1 className={`text-3xl font-bold text-purple-800 max-w-56 text-center
        ${theme === "dark" && "dark:text-purple-900"}`}>
        Seus repositórios do Github ou de outros usuários em um só lugar 
      </h1>
      <LoginWithGithubButton/>
    </main>
  )
}