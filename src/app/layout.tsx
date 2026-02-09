import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Sans, Lato } from "next/font/google";
import "./globals.css";

import NavBar from "@/../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hoai's Humble Blog and Portfolio",
  description:
    "This is where I share my thoughts, experiences, and projects with the world. Whether it's a blog post, a portfolio piece, or a tutorial, you can find everything I've created here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaSans.variable} ${lato.variable}`}
      >
        <NavBar />
        <main>{children}</main>
        <footer>FOOTER</footer>
      </body>
    </html>
  );
}
