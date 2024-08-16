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
    const [isSubmitting, setIsSubmitting] = React.useState(false);

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
        if (isSubmitting) return;

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);

        try {
            const docRef = await addDoc(collection(db, "contact"), {
                ...formData,
            });
            if (docRef.id) {
                toast.success(
                    "Thank you! Your message has been sent successfully."
                );
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Oops! Something went wrong. Please try again");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Oops! Something went wrong. Please try again");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen px-4 sm:px-8 lg:px-16 py-8">
            <motion.h1
                className="mt-12 sm:mt-24 text-3xl sm:text-4xl font-semibold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Get in Touch
            </motion.h1>
            <motion.p
                className="text-sm sm:text-base opacity-75 mt-2 sm:mt-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Reach out to us for questions, collabs, or just to say &apos;You
                guys are great&apos;
            </motion.p>
            <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-20">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="space-y-4 sm:space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="text-base sm:text-lg opacity-65 font-medium block mb-2"
                            >
                                Full Name
                            </label>
                            <Input
                                className="border-white/20 bg-transparent focus:border-2"
                                type="text"
                                placeholder="Peter Parker"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="text-base sm:text-lg opacity-65 font-medium block mb-2"
                            >
                                Email
                            </label>
                            <Input
                                className="border-white/20 bg-transparent focus:border-2"
                                type="email"
                                placeholder="spiderman@queens.com"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="text-base sm:text-lg opacity-65 font-medium block mb-2"
                            >
                                Message
                            </label>
                            <Textarea
                                className="border-white/20 bg-transparent focus:border-2 h-[150px] sm:h-[200px] resize-none"
                                placeholder="Chin Tapak Dum Dum"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button
                            variant="outline"
                            className="mt-6 w-full sm:w-auto"
                            onClick={handleMessage}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img
                        src="https://i.giphy.com/Ri98Ht4Q9hczOeHC1E.webp"
                        alt="Request Form"
                        className="w-full max-w-[300px] lg:max-w-[400px] h-auto rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </div>
    );
}
