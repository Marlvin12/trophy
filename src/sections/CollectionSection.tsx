import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-6 items-center px-4 md:px-0">
            <div className="flex-[1] text-start col gap-4 items-start w-full md:pr-4">
                <Heading heading="Live Tournaments" subHeading="Join the Action Now" />
                <span className="text-app_gray/80 text-sm md:text-base leading-relaxed">
                    Premier League, Champions League, World Cup - join tournaments for every major football event. Compete globally or start private leagues with friends. New tournaments launching weekly.
                </span>
                <Button outline>Browse Tournaments</Button>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow w-full max-w-full no-scrollbar inline-flex flex-row gap-3 md:gap-4 pb-2">
                {["pic1.png", "pic2.webp", "world-cup-2026.webp", "football-hero.jpg"].map((img, i) => (
                    <div className="min-w-[240px] md:min-w-[280px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-lg flex-shrink-0" key={i}>
                        <img
                            className="object-cover h-[160px] md:h-[200px] w-full"
                            src={`/assets/${img}`}
                            alt={`tournament_${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
