import OrbitingCircles from "@/components/magicui/orbiting-circles";

// Icons
import {
    SiKeras,
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiVisualstudiocode,
    SiGit,
    SiGithub,
    SiPython,
} from "react-icons/si";

export default function OrbitingCirclesComp() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                ASPDC
            </span>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={20}
                delay={20}
                radius={100}
            >
                <Icons.gitHub />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={20}
                delay={50}
                radius={100}
            >
                <Icons.keras />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={60}
                radius={150}
                reverse
            >
                <Icons.react />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={20}
                radius={150}
                reverse
            >
                <Icons.tailwind />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={100}
                radius={150}
                reverse
            >
                <Icons.figma />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={100}
                radius={200}
            >
                <Icons.vscode />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={150}
                radius={200}
            >
                <Icons.git />
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                duration={30}
                delay={200}
                radius={200}
            >
                <Icons.python />
            </OrbitingCircles>
        </div>
    );
}

const Icons = {
    gitHub: () => <SiGithub size={30} />,
    keras: () => <SiKeras size={25} />,
    react: () => <SiReact size={35} />,
    tailwind: () => <SiTailwindcss size={30} />,
    figma: () => <SiFigma size={35} />,
    vscode: () => <SiVisualstudiocode size={30} />,
    git: () => <SiGit size={35} />,
    python: () => <SiPython size={30} />,
};
