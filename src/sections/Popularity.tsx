import Card, { CardProps } from "../components/sub-components/Card";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

const values = [
    { value: "10", label: "Active Players" },
    { value: "50", label: "Tournaments" },
    { value: "200", label: "Teams Created" },
];

const cards: CardProps[] = [
    {
        icon: <MdOutlineVerifiedUser size={44} color="#71dcf5" />,
        title: "Secure & Transparent",
        description:
            "All transactions and gameplay recorded onchain with complete transparency and security",
    },
    {
        icon: <RiWallet3Line size={44} color="#948fe8" />,
        title: "Easy Crypto On/Off Ramp",
        description:
            "Seamless fiat to crypto conversion. Play with real money without the complexity",
    },
    {
        icon: <AiOutlineCheckCircle size={44} color="#ea9bfa" />,
        title: "Real-Time Scoring",
        description:
            "Live updates and leaderboards. Track your team's performance as matches happen worldwide",
    },
];

export default function Popularity() {
    return (
        <section className="bg-white/10 rounded-3xl col w-full">
            <div className="px-4 row border-b-2 border-app_bg py-6 items-center justify-around gap-4">
                {values.map((it, i) => (
                    <div key={i}>
                        <span className="md:text-8xl text-6xl font-redzone flex-1">
                            {it.value}K+
                        </span>
                        <br />
                        <span className="text-xl pt-4">{it.label}</span>
                    </div>
                ))}
            </div>
            <div className="px-4 row justify-center w-full">
                {cards.map((content, i) => (
                    <div
                        key={i}
                        className={`flex-1 min-w-[200px] ${
                            i !== cards.length - 1 && "md:border-r-2 md:border-app_bg"
                        }`}
                    >
                        <Card {...content} />
                    </div>
                ))}
            </div>
        </section>
    );
}
