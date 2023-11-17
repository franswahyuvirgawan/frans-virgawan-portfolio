import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frans Virgawan Portfolio",
  description: "Frans Virgawan Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-black" lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
