import Heading from "../components/Heading";
import QAComponent, { QAProps } from "../components/Q&A";

const questions: QAProps[] = [
    {
        question: "What is Trophy?",
        answer: "Trophy is a mobile-first, onchain fantasy football platform where you can build teams, join tournaments, and compete with friends for real money prizes.",
    },
    {
        question: "Do I need cryptocurrency to play?",
        answer: "No! We have seamless fiat on/off ramps. You can deposit with card or bank transfer, and we handle the crypto conversion automatically.",
    },
    {
        question: "How do tournaments work?",
        answer: "Pick your squad, join a tournament, and compete in real-time. Points are awarded based on actual player performance. Top teams win prizes distributed onchain.",
    },
    {
        question: "Is Trophy available globally?",
        answer: "Yes! Unlike traditional platforms limited to specific regions, Trophy is accessible worldwide. Play from anywhere, compete with anyone.",
    },
    {
        question: "What makes Trophy different from DraftKings or FanDuel?",
        answer: "We're mobile-first, social-first, and built for the next generation. Chat with friends, join campus leagues, and enjoy true ownership of your winnings onchain.",
    },
    {
        question: "When does the World Cup tournament start?",
        answer: "We're launching our World Cup experience in time for the 2026 tournament. Join the waitlist for early access and exclusive launch bonuses.",
    },
    {
        question: "How do I get started?",
        answer: "Join our waitlist to get early access. We're launching beta with select communities first, starting with college campuses and sports influencer networks.",
    },
    {
        question: "Are there any fees?",
        answer: "Tournament entry fees vary by competition. We take a small platform fee to maintain the service. All fees are transparent and shown upfront.",
    },
];

export default function FAQSection() {
    return (
        <section className="w-full col gap-4">
            <Heading
                className="text-center"
                heading="FAQs"
                subHeading="Frequently asked Questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 place-items-start mt-6">
                {questions.map((prop, i) => (
                    <QAComponent key={i} {...prop} />
                ))}
            </div>

            {/* <div className="flex flex-row flex-wrap mt-6">
                {questions.map((prop, i) => (
                    <div key={i} className="flex-[100%] md:flex-[50%]">
                        <QAComponent {...prop} />
                    </div>
                ))}
            </div> */}
        </section>
    );
}
