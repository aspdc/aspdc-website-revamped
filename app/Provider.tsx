"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "@/components/ui/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root>
            {children}
            <Toaster />
        </ReactLenis>
    );
}
