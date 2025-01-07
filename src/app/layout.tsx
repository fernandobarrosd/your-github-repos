import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Providers } from "./providers/Providers";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next/server";
import { THEME_COOKIE_KEY } from "./constants";

export const metadata: Metadata = {
  title: "Your Github Repos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getCookie(THEME_COOKIE_KEY, { cookies }) || "light";

  return (
    <html lang="pt-br">
      <body className={`h-full ${theme === "dark" && "dark:bg-neutral-950"}`}>
        <Header/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}