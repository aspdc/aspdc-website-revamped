/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, PlusIcon, Github } from "lucide-react";

import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogImage,
    DialogSubtitle,
    DialogClose,
    DialogDescription,
    DialogContainer,
} from "@/components/motion/Dialog";

type ProjectProp = {
    image: string;
    projectName: string;
    creator: string;
    liveLink?: string;
    description: string;
    githubLink?: string;
};

function ProjectCard({
    image,
    projectName,
    creator,
    liveLink,
    description,
    githubLink,
    index,
}: ProjectProp & { index: number }) {
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
            <Dialog
                transition={{
                    type: "spring",
                    bounce: 0.05,
                    duration: 0.25,
                }}
            >
                <DialogTrigger
                    style={{
                        borderRadius: "12px",
                    }}
                    className="flex w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 h-full"
                >
                    <DialogImage
                        src={image}
                        alt="Project Image"
                        className="h-48 w-full object-cover"
                    />
                    <div className="flex flex-grow flex-col justify-between p-4">
                        <div>
                            <DialogTitle className="text-zinc-950 dark:text-zinc-50 text-lg font-semibold">
                                {projectName}
                            </DialogTitle>
                            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400 text-sm">
                                A project by {creator}
                            </DialogSubtitle>
                        </div>
                        <button
                            type="button"
                            className="relative mt-4 flex h-8 w-full shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                            aria-label="Open dialog"
                        >
                            <PlusIcon size={16} className="mr-2" /> View Details
                        </button>
                    </div>
                </DialogTrigger>
                <DialogContainer>
                    <DialogContent
                        style={{
                            borderRadius: "24px",
                        }}
                        className="pointer-events-auto relative flex h-auto w-full max-w-[90vw] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:max-w-[500px]"
                    >
                        <DialogImage
                            src={image}
                            alt="Project Image"
                            className="max-h-[40vh] w-full object-cover object-center"
                        />
                        <div className="p-6">
                            <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                                {projectName}
                            </DialogTitle>
                            <DialogSubtitle className="text-zinc-700 dark:text-zinc-400">
                                A project by {creator}
                            </DialogSubtitle>
                            <DialogDescription
                                disableLayoutAnimation
                                variants={{
                                    initial: { opacity: 0, scale: 0.8, y: 100 },
                                    animate: { opacity: 1, scale: 1, y: 0 },
                                    exit: { opacity: 0, scale: 0.8, y: 100 },
                                }}
                            >
                                <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                                    {description}
                                </p>
                                <div className="flex gap-4 mt-4 *:cursor-pointer">
                                    {liveLink && (
                                        <Globe
                                            onClick={() =>
                                                window.open(liveLink)
                                            }
                                            className="hover:rotate-6 hover:text-blue-400 transition-all"
                                        />
                                    )}
                                    {githubLink && (
                                        <Github
                                            onClick={() =>
                                                window.open(githubLink)
                                            }
                                            className="hover:rotate-6 hover:text-slate-600 transition-all"
                                        />
                                    )}
                                </div>
                            </DialogDescription>
                        </div>
                        <DialogClose className="text-zinc-50" />
                    </DialogContent>
                </DialogContainer>
            </Dialog>
        </motion.div>
    );
}

export default function Projects() {
    const [projects, setProjects] = React.useState<ProjectProp[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const snapshot = await getDocs(collection(db, "projects"));
                const pr = snapshot.docs.map((doc) => doc.data());
                setProjects(pr as ProjectProp[]);
            } catch (error) {
                console.error("Error fetching projects:", error);
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
                Projects
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-75 mt-1"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0.7, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Witness some of the best projects created by our students
            </motion.p>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
            ) : (
                <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={`${project.creator}-${index}`}
                            {...project}
                            index={index}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}
