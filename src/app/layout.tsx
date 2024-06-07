import type { Metadata } from "next";
import "./globals.css";
import { GithubIcon } from "./components/GithubIcon";
import { TwitterXIcon } from "./components/TwitterXIcon";
import { LinkedinIcon } from "./components/LinkedinIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Github Repos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header className="flex flex-row-reverse bg-purple-600 p-4">
          <nav className="flex gap-4">
            <Link href="https://github.com/fernandobarrosd">
              <GithubIcon/>
            </Link>
            <Link href="https://x.com/fbarrosdev">
              <TwitterXIcon/>
            </Link>

            <Link href="https://www.linkedin.com/in/fernando-de-barros-204864241/">
              <LinkedinIcon/>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}