import { useInView } from "framer-motion";
import React, { useRef } from "react";

export const useAnimateOnView = (amount: number = 0.5) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount, once: true });
    return { ref, isInView };
};
