"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import ShimmerButton from "./magicui/shimmer-button";
import { Calendar, Gem } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-semibold">
                    For the Students, By the Students
                </h1>
                <p className="text-center w-2/3 mt-4 opacity-70">
                    Dive into the world of coding with ASPDC – where every
                    student, regardless of experience, finds a safe space to
                    learn, grow, and innovate. Join us in exploring web
                    development, AI, competitive programming, and more!
                </p>
            </div>
            <div className="flex gap-4 mt-8">
                <ShimmerButton>
                    <span className="flex items-center gap-1 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                        <Calendar className="h-[1.5cap]" />
                        Events
                    </span>
                </ShimmerButton>
                <ShimmerButton>
                    <span className="flex items-center gap-1 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                        <Gem className="h-[1.5cap]" />
                        Leaderboard
                    </span>
                </ShimmerButton>
            </div>
            <RetroGrid />
        </div>
    );
}
