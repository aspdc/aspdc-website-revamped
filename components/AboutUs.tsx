"use client";

import React from "react";
import OrbitingCirclesComp from "./OrbitingCircles";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { motion } from "framer-motion";
import { useAnimateOnView } from "./hooks/useAnimateOnView";

export default function AboutUs() {
    const { ref, isInView } = useAnimateOnView();

    const textVariants = {
        hidden: { x: "-20px", opacity: 0, filter: "blur(10px)" },
        visible: {
            x: 0,
            opacity: 1,
            filter: "blur(0)",
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            className="h-screen bg-[#090909] px-16 py-8 flex"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                visible: { transition: { staggerChildren: 0.2 } },
            }}
        >
            <motion.div className="flex-1">
                <motion.h1
                    className="font-semibold text-4xl"
                    variants={textVariants}
                >
                    What&apos;s ASPDC All About
                </motion.h1>
                <motion.p className="mt-2 opacity-75" variants={textVariants}>
                    ASPDC is a squad of tech-loving students who geek out over
                    code and love to share the knowledge. No gatekeeping here -
                    just good vibes and great learning.
                </motion.p>
                <motion.h1
                    className="font-semibold text-4xl mt-12"
                    variants={textVariants}
                >
                    Our Vibe
                </motion.h1>
                <motion.p className="mt-2 opacity-75" variants={textVariants}>
                    We&apos;re all about creating a chill space where you can
                    level up your coding skills, whether you&apos;re a total
                    newbie or already dreaming in Python. It&apos;s like a 24/7
                    hackathon, minus the stress and energy drinks.
                </motion.p>
                <motion.h1
                    className="font-semibold text-4xl mt-12"
                    variants={textVariants}
                >
                    What We&apos;ve Got Going On
                </motion.h1>
                <motion.ul
                    className="mt-2 opacity-75 list-disc list-inside"
                    variants={textVariants}
                >
                    <li>
                        Lit workshops on everything from building killer
                        websites to training AIs
                    </li>
                    <li>Coding hangouts where we tackle projects together</li>
                    <li>Chances to flex your skills in coding competitions</li>
                    <li>
                        Networking opps with tech industry pros (aka future
                        bosses)
                    </li>
                    <li>A judgment-free zone to try, fail, and crush it</li>
                </motion.ul>
            </motion.div>
            <div className="flex-1">
                <FadeInWhenVisible>
                    <OrbitingCirclesComp />
                </FadeInWhenVisible>
            </div>
        </motion.div>
    );
}
