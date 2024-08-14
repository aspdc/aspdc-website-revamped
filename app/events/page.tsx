/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight } from "lucide-react";
import { Calendar } from "lucide-react";

type EventCard = {
    imageUrl: string;
    eventTitle: string;
    eventDate: string;
    eventLink: string;
};

const events: EventCard[] = [
    {
        imageUrl:
            "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=280,height=280/gallery-images/e6/ccbec6f5-0ebf-49b9-9d91-c0d0b487b594",
        eventTitle: "Biweekly Contest - 002",
        eventDate: "21st August 2024",
        eventLink: "https://lu.ma/e82n29m0",
    },
];

function EventCard({ imageUrl, eventTitle, eventDate, eventLink }: EventCard) {
    return (
        <MagicCard className="flex h-[430px] w-[330px] p-2">
            <div className="h-[70%] bg-red-200 w-[108%] rounded-md">
                <img
                    src={imageUrl}
                    alt="User Image"
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full object-cover object-center"
                />
            </div>
            <div className="text-xl font-bold opacity-90 mt-2">
                {eventTitle}
            </div>
            <div className="flex opacity-60 mt-1 items-center">
                <Calendar className="h-[1.2cap]" />
                <p className="font-medium text-sm">{eventDate}</p>
            </div>
            <button
                onClick={() => window.open(eventLink)}
                className="w-[108%] flex items-center justify-center text-medium mt-4 border border-white/20 rounded-md p-2 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
                <p>Check it out</p>
                <ChevronRight className="h-[1.6cap]" />
            </button>
        </MagicCard>
    );
}

export default function Events() {
    return (
        <div className="min-h-screen px-16 py-8 ">
            <h1 className="mt-16 text-4xl font-semibold">Events</h1>
            <p className="text-sm opacity-75 mt-1">
                Dive into our tech-tastic lineup of workshops, talks, and coding
                challenges!
            </p>

            <section className="mt-8 grid grid-cols-4">
                {events.map((event) => (
                    <EventCard key={event.eventDate} {...event} />
                ))}
            </section>
        </div>
    );
}
