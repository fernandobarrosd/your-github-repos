import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Providers } from "./providers/Providers";

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
      <body className="h-full">
        <Header/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}