/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
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
}: ProjectProp) {
    return (
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
                className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
                <DialogImage
                    src={image}
                    alt="Project Image"
                    className="h-48 w-full object-cover"
                />
                <div className="flex flex-grow flex-row items-end justify-between p-4">
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
                        className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                        aria-label="Open dialog"
                    >
                        <PlusIcon size={12} />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContainer>
                <DialogContent
                    style={{
                        borderRadius: "24px",
                    }}
                    className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                >
                    <DialogImage
                        src={image}
                        alt="Project Image"
                        className="max-h-[400px] max-w-[500px] object-cover object-center "
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
                                        onClick={() => window.open(liveLink)}
                                        className="hover:rotate-6 hover:text-blue-400 transition-all"
                                    />
                                )}
                                {githubLink && (
                                    <Github
                                        onClick={() => window.open(githubLink)}
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
    );
}

export default function Projects() {
    const [hackathons, setHackathons] = React.useState<ProjectProp[]>([]);
    React.useEffect(() => {
        (async () => {
            const snapshot = await getDocs(collection(db, "projects"));
            const pr = snapshot.docs.map((doc) => doc.data());
            setHackathons(pr as ProjectProp[]);
        })();
    }, []);
    return (
        <div className="min-h-screen px-16 py-8 ">
            <h1 className="mt-16 text-4xl font-semibold">Projects</h1>
            <p className="text-sm opacity-75 mt-1">
                Witness some of the best projects created by our students
            </p>

            <section className="mt-8 grid grid-cols-4">
                {hackathons.map((hack) => (
                    <ProjectCard key={hack.creator} {...hack} />
                ))}
            </section>
        </div>
    );
}
