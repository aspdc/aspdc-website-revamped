/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight, Calendar, MapPin } from "lucide-react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

type HackathonProp = {
    image: string;
    name: string;
    date: string;
    link: string;
    location: string;
};

function HackathonCard({
    image,
    name,
    date,
    link,
    index,
    location,
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
            className="w-full"
        >
            <MagicCard className="flex flex-col h-full p-4 sm:p-6">
                <div className="relative h-0 pb-[66.67%] w-full rounded-lg overflow-hidden mb-4">
                    <img
                        src={image}
                        alt={name}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-90 mb-2 line-clamp-2">
                    {name}
                </h3>
                <div className="flex items-center opacity-60 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <p className="font-medium text-sm">{date}</p>
                </div>
                <div className="flex items-center opacity-60 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <p className="font-medium text-sm">{location}</p>
                </div>
                <button
                    onClick={() => window.open(link)}
                    className="mt-auto w-full flex items-center justify-center text-sm font-semibold border border-white/20 rounded-md p-2 hover:bg-white/10 transition-colors"
                >
                    <span>Check it out</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                </button>
            </MagicCard>
        </motion.div>
    );
}

export default function Hackathons() {
    const [loading, setLoading] = React.useState(true);
    const [hackathons, setHackathons] = React.useState<HackathonProp[]>([]);
    React.useEffect(() => {
        (async () => {
            try {
                const snapshot = await getDocs(collection(db, "hackathons"));
                const hk = snapshot.docs.map((doc) => doc.data());
                setHackathons(hk as HackathonProp[]);
            } catch (error) {
                console.error("Error fetching hackathons:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8">
            <motion.h1
                className="mt-16 text-3xl sm:text-4xl font-semibold"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
            >
                Hackathons
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-75 mt-2"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0.7, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Explore and join nearby caffeine-fueled coding marathons and
                turn your wildest ideas into reality!
            </motion.p>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
            ) : (
                <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {hackathons.map((hack, index) => (
                        <HackathonCard
                            key={hack.date}
                            {...hack}
                            index={index}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}
