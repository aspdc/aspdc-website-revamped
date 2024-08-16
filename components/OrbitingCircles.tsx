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
        <main>
            <div className="relative max-lg:hidden flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
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
            <div className="relative lg:hidden flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                    ASPDC
                </span>

                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={20}
                    delay={20}
                    radius={80}
                >
                    <SmallIcons.gitHub />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={20}
                    delay={50}
                    radius={80}
                >
                    <SmallIcons.keras />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={60}
                    radius={100}
                    reverse
                >
                    <SmallIcons.react />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={20}
                    radius={100}
                    reverse
                >
                    <SmallIcons.tailwind />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={100}
                    radius={120}
                    reverse
                >
                    <SmallIcons.figma />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={100}
                    radius={120}
                >
                    <SmallIcons.vscode />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={150}
                    radius={140}
                >
                    <SmallIcons.git />
                </OrbitingCircles>
                <OrbitingCircles
                    className="size-[24px] border-none bg-transparent"
                    duration={30}
                    delay={200}
                    radius={140}
                >
                    <SmallIcons.python />
                </OrbitingCircles>
            </div>
        </main>
    );
}

const SmallIcons = {
    gitHub: () => <SiGithub size={24} />,
    keras: () => <SiKeras size={20} />,
    react: () => <SiReact size={24} />,
    tailwind: () => <SiTailwindcss size={24} />,
    figma: () => <SiFigma size={24} />,
    vscode: () => <SiVisualstudiocode size={24} />,
    git: () => <SiGit size={24} />,
    python: () => <SiPython size={24} />,
};

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
