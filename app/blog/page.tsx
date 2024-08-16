/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { MagicCard } from "@/components/magicui/magic-card";
import { ChevronRight, User } from "lucide-react";

type BlogProp = {
    imageUrl: string;
    blogTitle: string;
    blogWriter: string;
    blogLink: string;
};

function BlogCard({
    imageUrl,
    blogTitle,
    blogLink,
    blogWriter,
    index,
}: BlogProp & { index: number }) {
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
                        src={imageUrl}
                        alt={blogTitle}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                </div>
                <h3 className="text-lg sm:text-xl font-bold opacity-90 mb-2 line-clamp-2">
                    {blogTitle}
                </h3>
                <div className="flex items-center opacity-60 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <p className="font-medium text-sm">{blogWriter}</p>
                </div>
                <button
                    onClick={() => window.open(blogLink)}
                    className="mt-auto w-full flex items-center justify-center text-sm font-semibold border border-white/20 rounded-md p-2 hover:bg-white/10 transition-colors"
                >
                    <span>Read More</span>
                    <ChevronRight className="h-4 w-4 ml-2" />
                </button>
            </MagicCard>
        </motion.div>
    );
}

export default function Blogs() {
    const [blogs, setBlogs] = React.useState<BlogProp[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const snapshot = await getDocs(collection(db, "blogs"));
                const bl = snapshot.docs.map((doc) => doc.data());
                setBlogs(bl as BlogProp[]);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8">
            <motion.h1
                className="mt-16 text-3xl sm:text-4xl font-semibold "
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
            >
                Blogs
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-75 mt-2"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 0.7, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Discover insightful articles, tech trends, and stories from the
                world of development and beyond, written by our talented
                members.
            </motion.p>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
            ) : (
                <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {blogs.map((blog, index) => (
                        <BlogCard key={blog.blogLink} {...blog} index={index} />
                    ))}
                </section>
            )}
        </div>
    );
}
