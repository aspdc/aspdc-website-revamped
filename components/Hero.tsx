"use client";

import ShimmerButton from "./magicui/shimmer-button";
import { Calendar, Gem } from "lucide-react";
import { AdComponent } from "./ui/AdComponent";
import { motion } from "framer-motion";
import RetroGrid from "./magicui/retro-grid";

export default function Hero() {
    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background px-4 py-12 md:shadow-xl">
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full max-w-xl"
                >
                    <AdComponent />
                </motion.div>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-2 mb-4"
                >
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center"
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        For the Students, By the Students
                    </motion.h1>
                </motion.div>

                <motion.p
                    className="text-center w-full sm:w-5/6 md:w-3/4 lg:w-2/3 mt-4 text-xs sm:text-sm md:text-base"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 0.7, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Dive into the world of coding with ASPDC – where every
                    student, regardless of experience, finds a safe space to
                    learn, grow, and innovate. Join us in exploring web
                    development, AI, competitive programming, and more!
                </motion.p>
            </div>

            <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <ShimmerButton>
                    <span className="flex items-center gap-1 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                        <Calendar className="h-[1.5cap]" /> Events
                    </span>
                </ShimmerButton>
                <ShimmerButton>
                    <span className="flex items-center gap-1 whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
                        <Gem className="h-[1.5cap]" /> Leaderboard
                    </span>
                </ShimmerButton>
            </motion.div>

            <RetroGrid />
        </div>
    );
}
