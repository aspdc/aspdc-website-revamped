"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root>
            {children}
            <Toaster />
            <GoogleAnalytics gaId="G-7GMPWC5HRM" />
        </ReactLenis>
    );
}
