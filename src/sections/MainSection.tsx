import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8">
            <div className="text md:w-1/2 col gap-8">
                <h1 className="md:text-8xl text-5xl font-redzone">
                    Fantasy Football Onchain for the World Cup
                </h1>
                <span className="text-app_gray leading-8 text-xl">
                    Build your dream team, compete with friends, and win real money. The most social fantasy football experience, powered by blockchain.
                </span>
                <div className="row gap-4">
                    <Button>Join Waitlist</Button>
                    <Button outline={true}>View Tournaments</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center">
                <img
                    src="/assets/football-hero.jpg"
                    alt="fantasy_football_players"
                    className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                />
            </div>
        </section>
    );
}
