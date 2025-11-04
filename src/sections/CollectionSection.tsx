import Button from "../components/Button";
import Heading from "../components/Heading";

export default function CollectionSection() {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-[1] text-start col gap-4 items-start pr-4">
                <Heading heading="Live Tournaments" subHeading="Join the Action Now" />
                <span className="text-app_gray/80">
                    From World Cup to Premier League, join tournaments for every major football event. Compete globally or start private leagues with friends. New tournaments launching weekly.
                </span>
                <Button outline>Browse Tournaments</Button>
            </div>
            <div className="flex-[2] overflow-x-scroll flex-grow max-w-[90vw] no-scrollbar inline-flex flex-row gap-4">
                {["pic1.png", "pic2.webp", "world-cup-2026.webp", "football-hero.jpg"].map((img, i) => (
                    <div className="min-w-[280px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm shadow-lg" key={i}>
                        <img
                            className="object-cover h-[200px] w-full"
                            src={`/assets/${img}`}
                            alt={`tournament_${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
