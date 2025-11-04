import { appLinks } from "../constants";
import Button from "./Button";
import AppLogo from "./sub-components/AppLogo";
import ThemeControl from "./sub-components/ThemeControl";

const links = ["Home", "Tournaments", "How It Works", "FAQ"];

export default function Header() {
    const handleWaitlistClick = () => {
        (window as any).openWaitlist?.();
    };

    return (
        <header className="sticky top-0 w-full mt-2 py-3 md:py-4 px-2 md:px-1 min-h-16 row items-center justify-between gap-2 bg-app_bg/80 backdrop-blur-md z-50 rounded-lg">
            <div className="row items-center gap-2">
                <AppLogo
                    onClick={() => window.location.assign("/")}
                    className="cursor-pointer text-3xl md:text-4xl"
                />
                <div className="ml-4 md:ml-24 hidden lg:flex flex-row flex-wrap gap-6 md:gap-8">
                    {links.map((li, i) => (
                        <a
                            key={i}
                            href={`#${appLinks[i]}`}
                            className={`uppercase font-redzone text-sm hover:text-white/70 transition-colors`}
                        >
                            {li}
                        </a>
                    ))}
                </div>
            </div>
            <div className="row items-center gap-3 md:gap-12">
                <ThemeControl />
                <div className="block">
                    <Button onClick={handleWaitlistClick}>Join Waitlist</Button>
                </div>
            </div>
        </header>
    );
}
