/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight, Calendar } from "lucide-react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

type HackathonProp = {
    image: string;
    name: string;
    date: string;
    link: string;
};

function HackathonCard({
    image,
    name,
    date,
    link,
    index,
}: HackathonProp & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 50, scale: 0.9 }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
            }}
        >
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
        </motion.div>
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
            <motion.h1
                className="mt-16 text-4xl font-semibold"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
            >
                Hackathons
            </motion.h1>
            <motion.p
                className="text-sm opacity-75 mt-1"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Explore and join nearby caffeine-fueled coding marathons and
                turn your wildest ideas into reality!
            </motion.p>

            <section className="mt-8 grid grid-cols-4">
                {hackathons.map((hack, index) => (
                    <HackathonCard key={hack.date} {...hack} index={index} />
                ))}
            </section>
        </div>
    );
}
