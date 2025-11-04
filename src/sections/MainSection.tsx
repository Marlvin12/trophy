import Button from "../components/Button";

export default function MainSection() {
    return (
        <section className="w-full flex flex-col md:flex-row center gap-8 px-4 md:px-0">
            <div className="text md:w-1/2 col gap-6 md:gap-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-redzone leading-tight">
                    Fantasy Football Onchain for the World Cup
                </h1>
                <span className="text-app_gray leading-7 md:leading-8 text-base md:text-xl">
                    Build your dream team, compete with friends, and win real money. The most social fantasy football experience, powered by blockchain.
                </span>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                    <Button>Join Waitlist</Button>
                    <Button outline={true}>View Tournaments</Button>
                </div>
            </div>
            <div className="relative md:w-1/2 col gap-4 center w-full">
                <img
                    src="/assets/football-hero.jpg"
                    alt="fantasy_football_players"
                    className="w-full max-w-md md:max-w-full h-auto object-contain drop-shadow-2xl rounded-2xl md:rounded-3xl"
                />
            </div>
        </section>
    );
}
