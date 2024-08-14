/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight } from "lucide-react";
import { Calendar } from "lucide-react";

type HackathonProp = {
    image: string;
    name: string;
    date: string;
    link: string;
};

const hackathons: HackathonProp[] = [
    {
        name: "Build The Flow",
        image: "https://buildtheflow.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F02592c4a30344e66932e6eb55bd9ffbc%2Fassets%2Fcover%2F116.jpeg&w=1440&q=100",
        date: "Jul 11 - Aug 19, 2024",
        link: "https://buildtheflow.devfolio.co/",
    },
    {
        name: "Build The New Internet",
        image: "https://build-the-new-internet.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fb0818f02722a4e3088edc157c0829aa7%2Fassets%2Fcover%2F543.png&w=1440&q=100 ",
        date: "Aug 2 - Aug 18, 2024",
        link: "https://build-the-new-internet.devfolio.co/",
    },
];

function HackathonCard({ image, name, date, link }: HackathonProp) {
    return (
        <MagicCard className="flex h-[430px] w-[330px] p-2">
            <div className="h-[70%] bg-red-200 w-[100%] rounded-md">
                <img
                    src={image}
                    alt="User Image"
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full object-cover object-center"
                />
            </div>
            <div className="text-xl font-bold opacity-90 mt-2">{name}</div>
            <div className="flex opacity-60 mt-1 items-center">
                <Calendar className="h-[1.2cap]" />
                <p className="font-medium text-sm">{date}</p>
            </div>
            <button
                onClick={() => window.open(link)}
                className="w-[100%] flex items-center justify-center text-medium mt-4 border border-white/20 rounded-md p-2 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
                <p>Check it out</p>
                <ChevronRight className="h-[1.6cap]" />
            </button>
        </MagicCard>
    );
}

export default function Hackathons() {
    return (
        <div className="min-h-screen px-16 py-8 ">
            <h1 className="mt-16 text-4xl font-semibold">Hackathons</h1>
            <p className="text-sm opacity-75 mt-1">
                Join caffeine-fueled coding marathons and turn your wildest
                ideas into reality!
            </p>

            <section className="mt-8 grid grid-cols-4">
                {hackathons.map((hack) => (
                    <HackathonCard key={hack.date} {...hack} />
                ))}
            </section>
        </div>
    );
}
