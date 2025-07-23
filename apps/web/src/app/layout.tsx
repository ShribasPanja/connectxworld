import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./components/providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ConnectxWorld",
  description: "Ask professionals anything, anytime, anywhere.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}