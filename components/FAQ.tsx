"use client";

import AccordionComp from "./Accordian";
import { MagicCard } from "./magicui/magic-card";
import { Button } from "./ui/button";

export default function FAQ() {
    return (
        <div className="bg-[#090909] min-h-screen px-4 sm:px-8 lg:px-16 py-8 pt-16 sm:pt-20">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">
                Got Questions? We Got Answers
            </h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                    <AccordionComp />
                </div>
                <div className="w-full lg:w-1/3 mt-8 lg:mt-4">
                    <MagicCard className="h-fit p-6 sm:p-8">
                        <h1 className="text-xl sm:text-2xl font-semibold">
                            Still got questions for us?
                        </h1>
                        <p className="opacity-75 text-sm sm:text-base">
                            We would love to help you out
                        </p>
                        <Button
                            className="mt-4 w-full sm:w-auto"
                            onClick={() => window.open("/contact", "_self")}
                        >
                            Contact Us
                        </Button>
                    </MagicCard>
                </div>
            </div>
        </div>
    );
}
