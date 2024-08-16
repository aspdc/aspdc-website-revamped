import React from "react";
import Gallery from "./Gallery";

export default function EventShowcase() {
    return (
        <main className="bg-[#090909] px-4 sm:px-8 lg:px-16 py-8 min-h-screen pb-20 ">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                Our Epic Moments
            </div>
            <p className="w-full sm:w-3/4 lg:w-2/3 mt-2 opacity-60 text-xs sm:text-base">
                Check out the awesome times we&apos;ve had at our past events.
                From intense coding sessions to chill hangouts, this is what the
                ASPDC vibe is all about.
            </p>

            <div className="pt-6 sm:pt-8 lg:pt-10">
                <Gallery />
            </div>
        </main>
    );
}
