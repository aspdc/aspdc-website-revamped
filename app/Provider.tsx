"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Provider({ children }: { children: React.ReactNode }) {
    return <ReactLenis root>{children}</ReactLenis>;
}
