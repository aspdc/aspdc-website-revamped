"use client";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { TeamMemberCardProps } from "@/types";
import { motion } from "framer-motion";

type Member = {
    image: string;
    name: string;
    position: string;
    instagram?: string;
    twitter?: string;
};

const core_members: Member[] = [
    {
        image: "/vedant.jpeg",
        name: "Vedant Panchal",
        position: "President",
        instagram: "vedant.4044",
    },
    {
        image: "/sharvan.jpeg",
        name: "Shravan Asati",
        position: "Vice President",
        twitter: "_softbubble",
    },
    {
        image: "/nirav.jpg",
        name: "Nirav Maheta",
        position: "Web Developement Head",
        twitter: "ni3rav",
    },
    {
        image: "/kujarani.jpeg",
        name: "Kunjrani Sorathiya",
        position: "DSA and CP Head",
        instagram: "_kunjrani_09",
    },
    {
        image: "/kushal.jpeg",
        name: "Kushal Unjiya",
        position: "Machine Learning Head",
        twitter: "kushal_unjiya",
    },
    {
        image: "https://api.dicebear.com/9.x/micah/svg?seed=Amandeep",
        name: "Amandeep Saluja",
        position: "Public Relations",
        instagram: "amandeep_.31",
    },
    {
        image: "/nishant.jpg",
        name: "Nishant Mehta",
        position: "Creative Head",
        instagram: "nishantmehta79",
    },
    {
        image: "/ayan.jpeg",
        name: "Ayan Parmar",
        position: "Treasurer",
        instagram: "_ayan_was_here",
    },
    {
        image: "/om.jpeg",
        name: "Om Kansara",
        position: "Social Media Head",
        instagram: "om.kansara",
    },
];

const rep_members: Member[] = [
    {
        image: "/khush-patel.jpeg",
        name: "Khush Patel",
        position: "DSA & CP Lead",
        instagram: "khush_s_pate",
    },
    {
        image: "/poojan.jpeg",
        name: "Poojan Bhuva",
        position: "DSA & CP Lead",
        instagram: "poojan_bhuva",
    },
    {
        image: "/pratham.jpeg",
        name: "Pratham Gavadia",
        position: "DSA & CP Lead",
    },
    {
        image: "/shivam.jpeg",
        name: "Shivam Markhendey",
        position: "DSA & CP Lead",
        instagram: "shivam_markanday",
    },
    {
        image: "/deep.jpeg",
        name: "Deep Adatiya",
        position: "Public Relations",
        instagram: "deep.9549",
    },
    {
        image: "https://api.dicebear.com/9.x/micah/svg?seed=priyanshi",
        name: "Priyanshi Naghera",
        position: "Public Relations",
        instagram: "prea.yanshie",
    },
    {
        image: "https://api.dicebear.com/9.x/micah/svg?seed=vidhi",
        name: "Vidhi Patel",
        position: "Machine Learning Lead",
        instagram: "vidhipatel8720",
    },
    {
        image: "/prince.jpeg",
        name: "Prince Gondaliya",
        position: "Machine Learning Lead",
        instagram: "prinxe_.28",
    },
    {
        image: "/vrajesh.jpg",
        name: "Vrajesh Sharma",
        position: "Machine Learning Lead",
        instagram: "its_vrajesh_sharma",
    },
    {
        image: "/mohit.jpeg",
        name: "Mohit Singh",
        position: "Machine Learning Lead",
        instagram: "mohit.singh028",
    },
    {
        image: "/het.jpg",
        name: "Het Jethwa",
        position: "Web Development Lead",
        instagram: "het._jethva",
    },
    {
        image: "/supal.jpeg",
        name: "Supal Vasani",
        position: "Web Development Lead",
        instagram: "supal__vasani",
    },
    {
        image: "/tirthchoksi.jpeg",
        name: "Tirth Choksi",
        position: "Web Development Lead",
        instagram: "_tirth_chokshi_05",
    },
    {
        image: "/shriman.jpeg",
        name: "Shriman Dasadiya",
        position: "Web Development Lead",
        instagram: "shriman_3",
    },
];
function TeamMemberCard({
    image,
    name,
    position,
    instagram,
    twitter,
    index,
}: TeamMemberCardProps & { index: number }) {
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
            className="h-[500px] w-80 rounded-lg border border-white/20 shadow"
        >
            <div className="h-[85%] p-4">
                <Image
                    src={image}
                    alt="User Image"
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full object-cover object-center"
                />
            </div>
            <div className="px-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-sm opacity-70">{position}</p>
                </div>
                <div>
                    {instagram && (
                        <FaInstagram
                            size={32}
                            className="cursor-pointer hover:text-[#fd1d1d] transition-all hover:rotate-12"
                            onClick={() => {
                                window.open(
                                    `https://instagram.com/${instagram}`
                                );
                            }}
                        />
                    )}
                    {twitter && (
                        <FaTwitter
                            size={32}
                            className="cursor-pointer hover:text-blue-400 transition-all hover:rotate-12 "
                            onClick={() => {
                                window.open(`https://x.com/${twitter}`);
                            }}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Team() {
    return (
        <div className="px-16 py-8 min-h-screen">
            <motion.h1
                className="text-4xl font-semibold mt-16"
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.5,
                }}
            >
                Core Team
            </motion.h1>
            <motion.p
                className="opacity-50"
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                }}
            >
                The masterminds who drive the vision and execution of our
                club&apos;s initiatives.
            </motion.p>

            <div className="mt-8 lg:grid grid-cols-4 gap-y-8 mb-20">
                {core_members.map((member, index) => (
                    <TeamMemberCard
                        key={member.position}
                        image={member.image}
                        name={member.name}
                        instagram={member.instagram}
                        twitter={member.twitter}
                        position={member.position}
                        index={index}
                    />
                ))}
            </div>
            <motion.h1
                className="text-4xl font-semibold mt-16"
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                }}
            >
                Club Representative
            </motion.h1>
            <motion.p
                className="opacity-50"
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                }}
            >
                The faces that represent our club, bridging the gap between our
                vision and the broader community.
            </motion.p>

            <div className="mt-8 lg:grid grid-cols-4 gap-y-8 mb-20">
                {rep_members.map((member, index) => (
                    <TeamMemberCard
                        key={member.position}
                        image={member.image}
                        name={member.name}
                        instagram={member.instagram}
                        twitter={member.twitter}
                        position={member.position}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
