import { Lobster } from "next/font/google";
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
                fira: ["'Fira Sans'", ...fontFamily.sans],
                work: ["'Work Sans'", ...fontFamily.sans],
                ubuntu: ["'Ubuntu Mono'", ...fontFamily.sans],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "hover-pulse": {
                    "0%": {
                        boxShadow: "0 0 0 0 rgb(34, 197, 94, 0.5)",
                    },
                    "100%": {
                        boxShadow: "0 0 0 2em rgb(34, 197, 94, 0)",
                    },
                },
                grid: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                slide: {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
                orbit: {
                    "0%": {
                        transform:
                            "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
                    },
                    "100%": {
                        transform:
                            "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
                    },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "hover-pulse": "hover-pulse 1s ease-in-out",
                grid: "grid 15s linear infinite",
                "spin-around":
                    "spin-around calc(var(--speed) * 2) infinite linear",
                slide: "slide var(--speed) ease-in-out infinite alternate",
                orbit: "orbit calc(var(--duration)*1s) linear infinite",
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical":
                    "marquee-vertical var(--duration) linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
