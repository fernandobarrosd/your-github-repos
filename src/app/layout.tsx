import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Providers } from "./providers/Providers";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Your Github Repos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("theme");

  return (
    <html lang="pt-br">
      <body className={`h-full ${theme?.value === "dark" && "dark:bg-neutral-950"}`}>
        <Header/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}