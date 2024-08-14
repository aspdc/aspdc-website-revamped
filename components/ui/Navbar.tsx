"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    return (
        <div
            className={cn(
                "flex max-w-fit  fixed top-2 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-[#0f0f0f] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
                className
            )}
        >
            {navItems.map((navItem: any, idx: number) => (
                <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                        "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-green-400 hover:text-green-400"
                    )}
                >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block text-sm">
                        {navItem.name}
                    </span>
                </Link>
            ))}
            <button
                onClick={() =>
                    window.open("https://72buefq3vo3.typeform.com/to/Qx4CBhSL")
                }
                className="border hover:animate-hover-pulse text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
            >
                Suggest an Event
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-green-500 to-transparent  h-px" />
            </button>
        </div>
    );
};

export default Navbar;
