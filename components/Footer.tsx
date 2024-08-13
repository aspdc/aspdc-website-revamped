"use client";

import React from "react";
import { useInView, motion } from "framer-motion";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import EmojiConfetti from "./EmojiConfetti";

function SocialIcon({ link, Icon }: { link?: string; Icon: typeof FaDiscord }) {
    return (
        <div className="size-12 md:size-16 border border-stone-700 flex justify-center items-center rounded-lg cursor-pointer group hover:border-stone-100 transition-colors">
            {Icon && (
                <Icon
                    className="opacity-70 group-hover:opacity-100 transition-opacity"
                    size={24}
                    onClick={() => {
                        if (link) {
                            window.open(link);
                        }
                    }}
                />
            )}
        </div>
    );
}

export default function Footer() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {
        margin: "0px 100px -100px 0px",
        once: false,
    });

    return (
        <footer className="relative h-[45vh] bg-[#090909] overflow-hidden border-t-2 border-dashed">
            <div className="flex flex-col md:flex-row gap-8 px-8 md:px-20 py-8 justify-between items-start z-10 absolute w-full">
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
                    <div className="flex gap-4 relative">
                        <SocialIcon
                            Icon={IoLogoInstagram}
                            link="https://instagram.com"
                        />
                        <SocialIcon
                            Icon={FaXTwitter}
                            link="https://twitter.com"
                        />
                        <SocialIcon
                            Icon={FaDiscord}
                            link="https://discord.com"
                        />
                        <SocialIcon
                            Icon={IoLogoLinkedin}
                            link="https://linkedin.com"
                        />
                        <SocialIcon
                            Icon={FaYoutube}
                            link="https://youtube.com"
                        />
                        <EmojiConfetti />
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute font-extrabold text-[50vh] left-0 right-0 -bottom-[75%] text-center text-gray-100/80"
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
