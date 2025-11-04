import Heading from "../components/Heading";

const cards = [
    {
        id: 1,
        title: "Build Your Squad",
        desc: "Draft your dream team from top players worldwide. Make strategic picks, manage your lineup, and compete in real-time tournaments",
    },
    {
        id: 2,
        title: "Play With Friends",
        desc: "Create private leagues, chat in real-time, and compete with friends. Join global communities or start your own campus league",
    },
    {
        id: 3,
        title: "Win Real Money",
        desc: "Earn from every tournament. Transparent, onchain payouts with seamless crypto on/off ramps. Your winnings, your ownership",
    },
];

export default function FeaturesSection() {
    return (
        <section className="w-full col center gap-6 px-4 md:px-0">
            <Heading
                heading="How It Works"
                subHeading="Play, Compete, Win"
                className="text-center"
            />
            <div className="flex flex-col md:flex-row w-full justify-center gap-4 md:gap-6">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="bg-gradient-to-br from-white/10 col rounded-2xl items-start gap-4 py-6 px-5 md:flex-1 w-full"
                    >
                        <img
                            className="w-12 h-12 md:w-16 md:h-16"
                            src={`/assets/${card.id}.png`}
                            alt={card.title}
                        />
                        <h4 className="font-redzone text-xl md:text-2xl">{card.title}</h4>
                        <span className="text-app_gray/70 text-sm md:text-base">{card.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
