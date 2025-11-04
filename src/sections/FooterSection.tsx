import { AiOutlineTwitter } from "react-icons/ai";
import { FaGithub, FaBitcoin } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";
import { appLinks } from "../constants";

const socialIcons = [AiOutlineTwitter, RiDiscordFill];

const links = [
    ["Platform", "Tournaments", "How It Works", "FAQ", "About Us"],
    ["Community", "Discord", "Twitter", "Campus Leagues", "Influencer Partners"],
    ["Resources", "Whitepaper", "Support", "Terms", "Privacy"],
];

export default function FooterSection() {
    return (
        <footer className="relative w-full flex flex-col md:flex-row gap-8 md:gap-4 justify-between px-4 md:px-0">
            {/* Left Section */}
            <div className="col gap-6 min-w-[200px] justify-between">
                <div className="space-y-4 md:space-y-6">
                    <h3 className="font-redzone text-3xl md:text-4xl">Trophy</h3>
                    <p className="text-app_gray text-sm max-w-xs">
                        The next generation of fantasy football. Mobile-first, onchain, and built for sports fans worldwide.
                    </p>
                    <div className="row gap-4">
                        {socialIcons.map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="hover:text-white/50 text-white transition-colors"
                            >
                                <Icon size={20} color="inherit" />
                            </a>
                        ))}
                    </div>
                </div>

                <span className="text-app_gray text-xs md:text-sm">
                    All rights reserved &#169; Trophy <b>{new Date().getFullYear()}.</b>
                </span>
            </div>
            {/* Right Section */}
            <div className="flex flex-col sm:flex-row md:gap-12 lg:gap-24 gap-6">
                {links.map((group, idx) => (
                    <ul key={idx + 1} className="col gap-2">
                        {group.map((link, i) => (
                            <li key={link}>
                                {i === 0 ? (
                                    <span className="font-redzone mb-2 text-sm md:text-base">{link}</span>
                                ) : (
                                    <a
                                        href={`#${appLinks[i]}`}
                                        className={`font-nominee text-app_gray text-xs hover:text-white transition-colors`}
                                    >
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </footer>
    );
}
