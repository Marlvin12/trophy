import Card, { CardProps } from "../components/sub-components/Card";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiWallet3Line } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";

const values = [
    { value: "500", label: "Waitlist" },
    { value: "5", label: "Tournaments" },
    { value: "50", label: "Early Users" },
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
        <section className="bg-white/10 rounded-2xl md:rounded-3xl col w-full mx-4 md:mx-0">
            <div className="px-4 md:px-6 flex flex-row border-b-2 border-app_bg py-6 items-center justify-around gap-2 md:gap-4">
                {values.map((it, i) => (
                    <div key={i} className="text-center">
                        <span className="text-4xl sm:text-6xl md:text-8xl font-redzone flex-1 block">
                            {it.value}
                        </span>
                        <span className="text-sm sm:text-base md:text-xl pt-2 md:pt-4 block">{it.label}</span>
                    </div>
                ))}
            </div>
            <div className="px-4 flex flex-col md:flex-row justify-center w-full">
                {cards.map((content, i) => (
                    <div
                        key={i}
                        className={`flex-1 min-w-full md:min-w-[200px] ${
                            i !== cards.length - 1 && "md:border-r-2 border-b-2 md:border-b-0 md:border-app_bg border-app_bg"
                        }`}
                    >
                        <Card {...content} />
                    </div>
                ))}
            </div>
        </section>
    );
}
