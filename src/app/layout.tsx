import type { Metadata } from "next";
import "./globals.css";
import { GithubIcon } from "./components/GithubIcon";
import { TwitterXIcon } from "./components/TwitterXIcon";
import { LinkedinIcon } from "./components/LinkedinIcon";
import Link from "next/link";
import { Header } from "./components/Header";

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
        <Header/>
        {children}
      </body>
    </html>
  );
}