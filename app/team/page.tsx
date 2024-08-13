import React from "react";
import Image from "next/image";

const members = [
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=Vedant",
        name: "Vedant Panchal",
        position: "President",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=Shravav",
        name: "Shravan Asati",
        position: "Vice President",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=nirav",
        name: "Nirav Maheta",
        position: "Web Developement Head",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=kunjrani",
        name: "Kunjrani",
        position: "DSA and CP Head",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=kushal",
        name: "Kushal Unijiya",
        position: "Machine Learning Head",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=amandeep",
        name: "Amandeep Saluja",
        position: "Public Relations",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=nishant",
        name: "Nishant Mehta",
        position: "Creative Head",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=ayan",
        name: "Ayan Parmar",
        position: "Treasurer",
    },
    {
        image: "https://api.dicebear.com/9.x/dylan/svg?seed=om",
        name: "Om Kansara",
        position: "Social Media Head",
    },
];

function TeamMemberCard({
    image,
    name,
    position,
}: {
    image: string;
    name: string;
    position: string;
}) {
    return (
        <div className="h-[500px] w-80 rounded-lg border border-white/20 shadow">
            <div className="h-[85%] p-4">
                <Image
                    src={image}
                    alt="User Image"
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full"
                />
            </div>
            <div className="px-4">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-sm opacity-70">{position}</p>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <div className="px-16 py-8 min-h-screen">
            <h1 className="text-4xl font-semibold mt-16">Meet The Team</h1>
            <p className="opacity-50">Meet the wizards making it happen</p>

            <div className="mt-8 lg:grid grid-cols-4 gap-y-8 mb-20">
                {members.map((member) => (
                    <TeamMemberCard
                        key={member.position}
                        image={member.image}
                        name={member.name}
                        position={member.position}
                    />
                ))}
            </div>
        </div>
    );
}
