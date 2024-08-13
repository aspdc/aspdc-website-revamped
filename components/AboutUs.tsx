import React from "react";
import OrbitingCirclesComp from "./OrbitingCircles";

export default function AboutUs() {
    return (
        <div className="h-screen bg-[#090909] px-16 py-8 flex">
            <div className="flex-1">
                <h1 className="font-semibold text-4xl">
                    What&apos;s ASPDC All About
                </h1>
                <p className="mt-2 opacity-75">
                    ASPDC is a squad of tech-loving students who geek out over
                    code and love to share the knowledge. No gatekeeping here -
                    just good vibes and great learning.
                </p>
                <h1 className="font-semibold text-4xl mt-12">Our Vibe</h1>
                <p className="mt-2 opacity-75">
                    We&apos;re all about creating a chill space where you can
                    level up your coding skills, whether you&apos;re a total
                    newbie or already dreaming in Python. It&apos;s like a 24/7
                    hackathon, minus the stress and energy drinks.
                </p>
                <h1 className="font-semibold text-4xl mt-12">
                    What We&apos;ve Got Going On
                </h1>
                <ul className="mt-2 opacity-75 list-disc list-inside">
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
                </ul>
            </div>
            <div className="flex-1">
                <OrbitingCirclesComp />
            </div>
        </div>
    );
}
