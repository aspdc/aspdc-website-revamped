"use client";

import React from "react";
import { motion } from "framer-motion";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { CrossIcon } from "lucide-react";

type leaderboardProp = {
    rank: number;
    username: string;
    rating: number;
};

const Pedestal = ({ topThree }: { topThree: leaderboardProp[] }) => (
    <motion.div
        className="mt-16 flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4"
        id="pedestal"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
    >
        {/* First Place (Gold) */}
        <div className="flex flex-col items-center order-1 sm:order-2">
            <div className="w-20 h-32 border border-[#FFD700] rounded-t-md flex items-center justify-center text-2xl font-bold">
                1
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold text-sm sm:text-base">
                    {topThree[0].username}
                </p>
                <p className="text-xs sm:text-sm opacity-75">
                    {topThree[0].rating}
                </p>
            </div>
        </div>

        {/* Second Place (Silver) */}
        <div className="flex flex-col items-center order-2 sm:order-1">
            <div className="w-20 h-24 border rounded-t-md border-[#C0C0C0] flex items-center justify-center text-2xl font-bold">
                2
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold text-sm sm:text-base">
                    {topThree[1].username}
                </p>
                <p className="text-xs sm:text-sm opacity-75">
                    {topThree[1].rating}
                </p>
            </div>
        </div>

        {/* Third Place (Bronze) */}
        <div className="flex flex-col items-center order-3 sm:order-3">
            <div className="w-20 h-20 border rounded-t-md border-[#CD7F32] flex items-center justify-center text-2xl font-bold">
                3
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold text-sm sm:text-base">
                    {topThree[2].username}
                </p>
                <p className="text-xs sm:text-sm opacity-75">
                    {topThree[2].rating}
                </p>
            </div>
        </div>
    </motion.div>
);

const LeaderboardTable = ({ data }: { data: leaderboardProp[] }) => (
    <motion.div
        className="mt-12 w-full max-w-5xl px-4 sm:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
    >
        <table className="w-full border-collapse text-left">
            <thead>
                <tr className="border border-white/20 bg-stone-800">
                    <th className="p-2 text-sm sm:text-base">Rank</th>
                    <th className="p-2 text-sm sm:text-base">Username</th>
                    <th className="p-2 text-sm sm:text-base">Rating</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user, index) => (
                    <motion.tr
                        key={user.rank}
                        className="border-b hover:bg-stone-900 transition-colors cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                        <td className="p-2 text-xs sm:text-sm">{user.rank}</td>
                        <td className="p-2 text-xs sm:text-sm">
                            {user.username}
                        </td>
                        <td className="p-2 text-xs sm:text-sm">
                            {user.rating}
                        </td>
                    </motion.tr>
                ))}
            </tbody>
        </table>
    </motion.div>
);

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = React.useState<
        leaderboardProp[]
    >([]);

    React.useEffect(() => {
        (async () => {
            const snapshot = await getDocs(collection(db, "leaderboard"));
            const lb = snapshot.docs.map((doc) => doc.data());

            const sortedData = lb.sort((a, b) => b.rating - a.rating);
            const slb = sortedData.map((user, index) => ({
                ...user,
                rank: index + 1,
            }));
            setLeaderboardData(slb as leaderboardProp[]);
        })();
    }, []);

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
            <motion.h1
                className="mt-16 text-3xl sm:text-4xl font-semibold text-center"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
            >
                Leaderboard
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-60 mt-1 text-center"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0.7, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Watch Our Members Climb the Codeforces Ranks and Dominate the
                Competitive Coding Scene!
            </motion.p>
            {leaderboardData.length > 0 ? (
                <>
                    <Pedestal topThree={leaderboardData.slice(0, 3)} />
                    <LeaderboardTable data={leaderboardData.slice(3)} />
                </>
            ) : (
                <motion.div
                    className="mt-44 text-sm font-medium opacity-75 flex gap-4 items-center text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <CrossIcon className="rotate-45" />
                    Error Fetching Leaderboard right now. Ping someone that can
                    help fix this
                    <CrossIcon className="rotate-45" />
                </motion.div>
            )}
        </div>
    );
}
