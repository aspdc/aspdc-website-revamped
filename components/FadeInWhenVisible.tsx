import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInWhenVisible({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8 }}
            variants={{
                visible: { opacity: 1, filter: "blur(0px)" },
                hidden: { opacity: 0, filter: "blur(100px)" },
            }}
        >
            {children}
        </motion.div>
    );
}
