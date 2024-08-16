"use client";

import React from "react";
import { useInView, motion } from "framer-motion";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import EmojiConfetti from "./EmojiConfetti";

function SocialIcon({
    link,
    Icon,
    name,
}: {
    link?: string;
    Icon: typeof FaDiscord;
    name: string;
}) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="size-10 sm:size-12 md:size-14 border border-stone-700 flex justify-center items-center rounded-lg cursor-pointer group hover:border-stone-100 transition-colors"
            onClick={() => {
                if (link) {
                    window.open(link, "_blank", "noopener,noreferrer");
                }
            }}
        >
            {Icon && (
                <Icon
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                    size="60%"
                    aria-label={name}
                />
            )}
        </motion.div>
    );
}

export default function Footer() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        margin: "0px 100px -100px 0px",
        once: false,
    });

    return (
        <footer className="relative min-h-[45vh] bg-[#090909] overflow-hidden border-t-2 border-dashed">
            <div className="flex flex-col md:flex-row gap-8 px-6 sm:px-8 md:px-12 lg:px-20 py-8 justify-between items-start z-10 relative w-full max-w-7xl mx-auto">
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">ASPDC</h3>
                    <p className="text-sm text-gray-400 max-w-xs">
                        Empowering students through code and creativity since
                        2023.
                    </p>
                </div>

                <div className="flex flex-col items-start">
                    <h4 className="text-lg font-semibold mb-4 text-white">
                        Connect With Us
                    </h4>
                    <div className="flex flex-wrap gap-4 relative">
                        <SocialIcon
                            Icon={IoLogoInstagram}
                            link="https://www.instagram.com/aspd.club/"
                            name="Instagram"
                        />
                        <SocialIcon
                            Icon={FaXTwitter}
                            link="https://x.com/aspdc_club"
                            name="Twitter"
                        />
                        <SocialIcon
                            Icon={FaDiscord}
                            link="https://discord.com/invite/QbrJNMTzUj"
                            name="Discord"
                        />
                        <SocialIcon
                            Icon={IoLogoLinkedin}
                            link="https://www.linkedin.com/company/adani-student-programming-and-development-club/"
                            name="LinkedIn"
                        />
                        <SocialIcon
                            Icon={FaYoutube}
                            link="https://www.youtube.com/@clubaspd"
                            name="YouTube"
                        />
                        <EmojiConfetti />
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute font-extrabold text-[20vh] sm:text-[30vh] md:text-[40vh] lg:text-[50vh] left-0 right-0 -bottom-[75%] text-center text-gray-100/80 select-none pointer-events-none"
                ref={ref}
                initial={{ y: "19%" }}
                animate={{ y: isInView ? "0%" : "19%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                ASPDC
            </motion.div>
        </footer>
    );
}
