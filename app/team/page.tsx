"use client";
import Image from "next/image";
import { FaInstagram, FaTwitter } from "react-icons/fa";
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
        position: "Web Development Head",
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
        image: "/amandeep.jpeg",
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
    {
        image: "/nikita-maam.jpeg",
        name: "Nikita Joshi",
        position: "Faculty Mentor",
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
        instagram: "prage_510",
    },
    {
        image: "/shivam.jpeg",
        name: "Shivam Markanday",
        position: "DSA & CP Lead",
        instagram: "shivam_markanday",
    },

    {
        image: "/vidhi.jpeg",
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
        name: "Het Jethva",
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
    {
        image: "/deep.jpeg",
        name: "Deep Adatiya",
        position: "Public Relations",
        instagram: "_deep.9549_",
    },
    {
        image: "/priyanshi.jpeg",
        name: "Priyanshi Naghera",
        position: "Public Relations",
        instagram: "prea.yanshie",
    },
];

function TeamMemberCard({
    image,
    name,
    position,
    instagram,
    twitter,
    index,
}: Member & { index: number }) {
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
            className="h-auto w-full max-w-[320px] mx-auto rounded-lg border border-white/20 shadow"
        >
            <div className="aspect-[3/4] p-4">
                <Image
                    src={image}
                    alt={`${name} - ${position}`}
                    width={500}
                    height={500}
                    className="rounded-lg h-full w-full object-cover object-center"
                />
            </div>
            <div className="px-4 py-2 flex items-center justify-between">
                <div>
                    <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
                    <p className="text-xs sm:text-sm opacity-70">{position}</p>
                </div>
                <div className="flex gap-2 sm:gap-4">
                    {instagram && (
                        <FaInstagram
                            size={24}
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
                            size={24}
                            className="cursor-pointer hover:text-blue-400 transition-all hover:rotate-12"
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
        <div className="px-4 sm:px-8 md:px-16 py-8 min-h-screen">
            <motion.h1
                className="text-3xl sm:text-4xl font-semibold mt-16"
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
                className="text-sm sm:text-base opacity-50"
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 0.7,
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
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
                className="text-3xl sm:text-4xl font-semibold mt-16"
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
                Club Representatives
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-50"
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
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
