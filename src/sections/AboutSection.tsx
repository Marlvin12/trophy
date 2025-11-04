import Heading from "../components/Heading";
import { SectionProps } from "../types";

const tags = [
    "Mobile-First",
    "Global Community",
    "Real Money Prizes",
    "World Cup Ready",
];

export default function AboutSection() {
    return (
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center gap-8 px-4 md:px-0">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-full md:max-w-[90%]"
                    heading="About Trophy"
                    subHeading="The Next Generation of Fantasy Football"
                />
                <span className="text-app_gray/80 leading-7 md:leading-8 text-base md:text-xl">
                    Trophy brings real-money fantasy football to mobile, powered by blockchain. Play Premier League, Champions League, World Cup, and all major football tournaments. We're building for the next generation of sports fans who want to compete, earn, and connect with friends globally year-round.
                </span>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-3 py-2 md:px-4 md:py-3 bg-white/20 hover:bg-white/30 text-sm md:text-base transition-colors"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full w-full">
                <img
                    src="/assets/world-cup-2026.webp"
                    alt="world_cup_2026"
                    className="object-contain w-full max-w-md md:max-w-[90%] mx-auto drop-shadow-2xl rounded-2xl md:rounded-3xl"
                />
            </div>
        </section>
    );
}
