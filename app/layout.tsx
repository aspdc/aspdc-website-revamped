import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";
import React from "react";
import { Metadata } from "next";
import Provider from "./Provider";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/Footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "ASPDC",
    description: "Do what you can't",
};
const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Team",
        link: "/team",
    },
    {
        name: "Events",
        link: "/events",
    },
    {
        name: "Hackathons",
        link: "/hackathons",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Leaderboard",
        link: "/leaderboard",
    },
    {
        name: "Blog",
        link: "https://aspdc.hashnode.dev/",
    },
    {
        name: "Contact",
        link: "/contact",
    },
];

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <link rel="icon" href="/icon.ico" sizes="any" />
            <body
                className={cn(
                    "min-h-screen bg-background antialiased bg-[#121212] text-white font-sans dark",
                    fontSans.variable
                )}
            >
                <Provider>
                    <Navbar navItems={navItems} />
                    {children}
                    <Footer />
                </Provider>
                <Analytics />
            </body>
        </html>
    );
}
