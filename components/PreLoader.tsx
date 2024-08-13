"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootTexts: string[] = [
    "Booting Linux on physical CPU 0x0",
    "Linux version 6.1.0-rpi7-rpi-v8 (gcc version 12.2.0)",
    "CPU: ARMv8 Processor [410fd083] revision 3",
    "Machine model: Raspberry Pi 4 Model B Rev 1.4",
    "Memory policy: Data cache writealloc",
    "cma: Reserved 256 MiB at 0x000000000",
    "On node 0 totalpages: 1024000",
    "DMA zone: 4096 pages used for memmap",
    "DMA32 zone: 0 pages used for memmap",
    "Normal zone: 16384 pages used for memmap",
    "Loading kernel modules...",
    "Initializing network interfaces...",
    "Mounting root filesystem...",
];

const initTexts: string[] = [
    "Initializing system environment...",
    "Loading user space...",
    "Starting system services...",
    "Preparing desktop environment...",
];

const panicTexts: string[] = [
    "Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)",
    "CPU: 0 PID: 1 Comm: swapper/0 Not tainted 6.1.0-rpi7-rpi-v8",
    "Hardware name: Raspberry Pi 4 Model B Rev 1.4",
    "Call trace:",
    " dump_backtrace+0x0/0x178",
    " show_stack+0x20/0x30",
    " dump_stack_lvl+0x44/0x5c",
    " dump_stack+0x18/0x24",
    " panic+0x12c/0x2e8",
    " mount_block_root+0x1b0/0x248",
    " prepare_namespace+0x154/0x198",
    " kernel_init+0x18/0x124",
    " ret_from_fork+0x14/0x28",
    "Kernel Offset: disabled",
    "CPU features: 0x0",
    "---[ end Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0) ]---",
];

const getRandomDelay = (): number => Math.random() * 0.03 + 0.01;

interface TimelineItem {
    delay: number;
    action: () => void;
}

const PreLoader: React.FC = () => {
    const [currentStage, setCurrentStage] = useState<number>(0);
    const [hideLoader, setHideLoader] = useState<boolean>(false);

    useEffect(() => {
        const timeline: TimelineItem[] = [
            { delay: bootTexts.length * 200, action: () => setCurrentStage(1) },
            {
                delay: initTexts.length * 500 + 1000,
                action: () => setCurrentStage(2),
            },
            {
                delay: panicTexts.length * 200 + 2000,
                action: () => setHideLoader(true),
            },
        ];

        let totalDelay = 0;
        const timeouts: NodeJS.Timeout[] = [];

        timeline.forEach(({ delay, action }) => {
            totalDelay += delay;
            const timeout = setTimeout(action, totalDelay);
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);

    const renderTexts = (
        texts: string[],
        textColor: string = "text-white",
        delay: number = 200
    ) =>
        texts.map((text, index) => (
            <motion.div
                key={index}
                className={`text-sm ${textColor}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * (delay / 1000) }}
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        staggerChildren: getRandomDelay(),
                        delayChildren: index * (delay / 1000),
                    }}
                >
                    {text.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.div>
        ));

    return (
        <motion.div className="fixed inset-0 font-ubuntu bg-black text-white overflow-hidden">
            <div className="p-4 h-full overflow-auto">
                <AnimatePresence>
                    {renderTexts(bootTexts)}
                    {currentStage >= 1 &&
                        renderTexts(initTexts, "text-green-500", 500)}
                    {currentStage >= 2 &&
                        renderTexts(panicTexts, "text-red-500")}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default PreLoader;
