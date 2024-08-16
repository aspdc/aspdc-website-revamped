"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

export default function AnimatedBackground({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex bg-[#090909] min-h-screen w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 opacity-35"
                )}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
