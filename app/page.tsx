import Footer from "@/components/Footer";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import EventShowcase from "@/components/EventShowcase";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import FAQ from "@/components/FAQ";

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
