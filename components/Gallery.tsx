/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const imgLinks: any = [
    "/gallery-1.jpg",
    "/gallery-2.jpg",
    "/gallery-7.jpg",
    "/gallery-5.jpg",
    "/gallery-3.jpg",
    "/gallery-4.jpg",
    "/gallery-6.jpg",
];

const firstRow = imgLinks.slice(0, Math.ceil(imgLinks.length / 2));
const secondRow = imgLinks.slice(Math.ceil(imgLinks.length / 2));

const ImageCard = ({ img }: { img: string }) => {
    return (
        <figure
            className={cn(
                "relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 cursor-pointer overflow-hidden rounded-xl border",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img alt="" src={img} className="w-full h-full object-cover" />
            </div>
        </figure>
    );
};

export default function Gallery() {
    return (
        <div className="relative flex h-[calc(100vh-200px)] sm:h-[calc(100vh-150px)] lg:h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((img: any) => (
                    <ImageCard key={img} img={img} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((img: any) => (
                    <ImageCard key={img} img={img} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-[#090909] dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-[#090909] dark:from-background"></div>
        </div>
    );
}
