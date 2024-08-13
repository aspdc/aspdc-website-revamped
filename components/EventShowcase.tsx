import React from "react";
import Gallery from "./Gallery";

export default function EventShowcase() {
    return (
        <main className="bg-[#090909] px-16 py-8 min-h-screen pb-20">
            <div className="text-4xl font-semibold">Our Epic Moments</div>
            <p className="w-2/3 mt-2 opacity-75">
                Check out the awesome times we&apos;ve had at our past events.
                From intense coding sessions to chill hangouts, this is what the
                ASPDC vibe is all about.
            </p>

            <div className="pt-10">
                <Gallery />
            </div>
        </main>
    );
}
