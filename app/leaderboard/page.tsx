"use client";

import React from "react";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { CrossIcon } from "lucide-react";

type leaderboardProp = {
    rank: number;
    username: string;
    rating: number;
};

const Pedestal = ({ topThree }: { topThree: leaderboardProp[] }) => (
    <div className="mt-16 flex items-end justify-center gap-4" id="pedestal">
        <div className="flex flex-col items-center">
            <div className="w-20 h-24 border rounded-t-md border-[#C0C0C0] flex items-center justify-center text-2xl font-bold">
                2
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold">{topThree[1].username}</p>
                <p className="text-sm opacity-75">{topThree[1].rating}</p>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="w-20 h-32 border border-[#FFD700] rounded-t-md flex items-center justify-center text-2xl font-bold">
                1
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold">{topThree[0].username}</p>
                <p className="text-sm opacity-75">{topThree[0].rating}</p>
            </div>
        </div>
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 border rounded-t-md border-[#CD7F32] flex items-center justify-center text-2xl font-bold">
                3
            </div>
            <div className="mt-2 text-center">
                <p className="font-semibold">{topThree[2].username}</p>
                <p className="text-sm opacity-75">{topThree[2].rating}</p>
            </div>
        </div>
    </div>
);

const LeaderboardTable = ({ data }: any) => (
    <div className="mt-12 w-full max-w-5xl">
        <table className="w-full border-collapse">
            <thead>
                <tr className="border border-white/20 bg-stone-800">
                    <th className="p-2 text-left">Rank</th>
                    <th className="p-2 text-left">Username</th>
                    <th className="p-2 text-left">Rating</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user: any) => (
                    <tr
                        key={user.rank}
                        className="border-b hover:bg-stone-900 transition-colors cursor-pointer"
                    >
                        <td className="p-2">{user.rank}</td>
                        <td className="p-2">{user.username}</td>
                        <td className="p-2">{user.rating}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
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
            <h1 className="mt-16 text-4xl font-semibold">Leaderboard</h1>
            <p className="text-sm opacity-60 mt-1 text-center">
                Watch Our Members Climb the Codeforces Ranks and Dominate the
                Competitive Coding Scene!
            </p>
            {leaderboardData.length > 0 ? (
                <>
                    <Pedestal topThree={leaderboardData.slice(0, 3)} />
                    <LeaderboardTable data={leaderboardData} />
                </>
            ) : (
                <div className="mt-44 text-sm font-medium opacity-75 flex gap-4 items-center">
                    <CrossIcon className="rotate-45" />
                    Error Fetching Leaderboard right now. Ping someone that can
                    help fix this
                    <CrossIcon className="rotate-45" />
                </div>
            )}
        </div>
    );
}
