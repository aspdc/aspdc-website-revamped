/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight } from "lucide-react";
import { Calendar } from "lucide-react";

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

type HackathonProp = {
    image: string;
    name: string;
    date: string;
    link: string;
};

function HackathonCard({ image, name, date, link }: HackathonProp) {
    return (
        <MagicCard className="flex h-[430px] w-[330px] p-2">
            <div className="h-[70%] w-[100%] rounded-md">
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
    const [hackathons, setHackathons] = React.useState<HackathonProp[]>([]);
    React.useEffect(() => {
        (async () => {
            const snapshot = await getDocs(collection(db, "hackathons"));
            const hk = snapshot.docs.map((doc) => doc.data());
            setHackathons(hk as HackathonProp[]);
        })();
    }, []);
    return (
        <div className="min-h-screen px-16 py-8 ">
            <h1 className="mt-16 text-4xl font-semibold">Hackathons</h1>
            <p className="text-sm opacity-75 mt-1">
                Explore and join nearby caffeine-fueled coding marathons and
                turn your wildest ideas into reality!
            </p>

            <section className="mt-8 grid grid-cols-4">
                {hackathons.map((hack) => (
                    <HackathonCard key={hack.date} {...hack} />
                ))}
            </section>
        </div>
    );
}
