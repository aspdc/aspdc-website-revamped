"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for the mobile menu

const Navbar = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div
                className={cn(
                    "hidden lg:flex max-w-fit fixed top-2 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#0f0f0f] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                    className
                )}
                initial={{
                    y: "-100%",
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    y: "0",
                    opacity: 1,
                    filter: "blur(0)",
                }}
                transition={{
                    duration: 1,
                    delay: 0.9,
                }}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        href={navItem.link}
                        className={cn(
                            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-green-400 hover:text-green-400"
                        )}
                    >
                        <span className="hidden">{navItem.icon}</span>
                        <span className="text-sm">{navItem.name}</span>
                    </Link>
                ))}
                <button
                    onClick={() =>
                        window.open(
                            "https://72buefq3vo3.typeform.com/to/Qx4CBhSL"
                        )
                    }
                    className="border hover:animate-hover-pulse text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
                >
                    Suggest an Event
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent h-px" />
                </button>
            </motion.div>

            {/* Mobile Navbar */}
            {isMobile && (
                <>
                    <button
                        onClick={toggleMobileMenu}
                        className="fixed top-4 right-4 z-[5001] bg-white dark:bg-[#0f0f0f] p-2 rounded-full shadow-lg"
                    >
                        {isMobileMenuOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                    <motion.div
                        className={cn(
                            "fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#0f0f0f] shadow-lg z-[5000] flex flex-col p-4",
                            isMobileMenuOpen
                                ? "translate-x-0"
                                : "translate-x-full"
                        )}
                        initial={{ x: "100%" }}
                        animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col space-y-4 mt-16">
                            {navItems.map((navItem: any, idx: number) => (
                                <Link
                                    key={`mobile-link=${idx}`}
                                    href={navItem.link}
                                    className={cn(
                                        "relative dark:text-neutral-50 items-center flex space-x-2 text-neutral-600 dark:hover:text-green-400 hover:text-green-400"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {navItem.icon && (
                                        <span>{navItem.icon}</span>
                                    )}
                                    <span className="text-sm">
                                        {navItem.name}
                                    </span>
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    window.open(
                                        "https://72buefq3vo3.typeform.com/to/Qx4CBhSL"
                                    );
                                    setIsMobileMenuOpen(false);
                                }}
                                className="border hover:animate-hover-pulse text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mt-4"
                            >
                                Suggest an Event
                                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent h-px" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </>
    );
};

export default Navbar;
