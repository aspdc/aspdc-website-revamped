import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FAQ from "@/components/FAQ";

//TODO
/*
 * Create an admin page to handle adding events and other things
 */

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutUs />
            <EventShowcase />
            <VelocityScroll
                text=" Learn . Code . Innovate . "
                className="text-2xl bg-black font-bold opacity-50 lg:text-7xl"
                default_velocity={2}
            />
            <FAQ />
        </div>
    );
}
