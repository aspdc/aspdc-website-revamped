import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FAQ from "@/components/FAQ";

//TODO
/*
 * 1. Add on load animation on every page
 * 2. Make pages responsive
 * 3. Create an admin page to handle adding events and all [For later]
 * 4. Clean up and enjoy
 */

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <EventShowcase />
            <VelocityScroll
                text=" Learn . Code . Innovate . "
                className="text-7xl bg-black font-bold opacity-50"
                default_velocity={2}
            />
            <FAQ />
        </div>
    );
}
