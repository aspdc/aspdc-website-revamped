"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMessage = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        const docRef = await addDoc(collection(db, "contact"), { ...formData });
        if (docRef.id)
            toast.success(
                "Thank you! Your message has been sent successfully."
            );
        else toast.error("Oops! Something went wrong. Please try again");
    };

    return (
        <div className="min-h-screen px-16 py-8 ">
            <motion.h1
                className="mt-24 text-4xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get in Touch
            </motion.h1>
            <motion.p
                className="text-sm opacity-75 mt-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Reach out to us for questions, collabs, or just to say &apos;You
                guys are great&apos;
            </motion.p>
            <div className="mt-8 flex gap-20">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <label
                        htmlFor="name"
                        className="text-lg opacity-65 font-medium"
                    >
                        Full Name
                    </label>
                    <Input
                        className="mt-2 mb-4 border-white/20 bg-transparent focus:border-2"
                        type="text"
                        placeholder="Peter Parker"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="name"
                        className="text-lg opacity-65 font-medium"
                    >
                        Email
                    </label>
                    <Input
                        className="mt-2 mb-4 border-white/20 bg-transparent focus:border-2"
                        type="email"
                        placeholder="spiderman@queens.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="name"
                        className="text-lg opacity-65 font-medium"
                    >
                        Message
                    </label>
                    <Textarea
                        className="mt-2 border-white/20 bg-transparent focus:border-2 h-[200px] resize-none"
                        placeholder="Chin Tapak Dum Dum"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="mt-4"
                            onClick={handleMessage}
                        >
                            Send Message
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img
                        src="https://i.giphy.com/Ri98Ht4Q9hczOeHC1E.webp"
                        alt="Request Form"
                        className="ml-[15%]"
                    />
                </motion.div>
            </div>
        </div>
    );
}
