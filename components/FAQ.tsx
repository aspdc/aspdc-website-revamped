import AccordionComp from "./Accordian";
import { MagicCard } from "./magicui/magic-card";
import { Button } from "./ui/button";

export default function FAQ() {
    return (
        <div className="bg-[#090909] min-h-screen px-16 py-8 pt-20">
            <h1 className="text-4xl font-semibold">
                Got Questions? We Got Answers
            </h1>
            <div className="flex gap-8">
                <div className="flex-1">
                    <AccordionComp />
                </div>
                <div className="flex-1">
                    <MagicCard className="h-fit mt-4 p-8">
                        <h1 className="text-2xl font-semibold">
                            Still got questions for us?
                        </h1>
                        <p className="opacity-75">
                            We would love to help you out
                        </p>
                        <Button className="mt-4">Contact Us</Button>
                    </MagicCard>
                </div>
            </div>
        </div>
    );
}
