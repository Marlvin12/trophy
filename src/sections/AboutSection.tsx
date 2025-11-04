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
        <section className="w-full flex flex-col-reverse md:flex-row-reverse items-center">
            <div className="text md:w-1/2 col gap-4 my-2">
                <Heading
                    className="max-w-[90%]"
                    heading="About Trophy"
                    subHeading="The Next Generation of Fantasy Football"
                />
                <span className="text-app_gray/80 leading-8 text-xl">
                    Trophy brings real-money fantasy football to mobile, powered by blockchain. We're building for the next generation of sports fans who want to compete, earn, and connect with friends globally. Starting with the World Cup, we're creating the most seamless and social fantasy experience ever built.
                </span>
                <div className="row gap-2">
                    {tags.map((tag, i) => (
                        <button
                            key={i}
                            className="rounded-full px-4 py-3 bg-white/20 hover:bg-white/30"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2 my-2 h-full">
                <img
                    src="/assets/world-cup-2026.webp"
                    alt="world_cup_2026"
                    className="object-contain max-w-[90%] max-h-[90%] mx-auto drop-shadow-2xl rounded-3xl"
                />
            </div>
        </section>
    );
}
