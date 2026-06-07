import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

interface Props {
    headerRef: React.RefObject<HTMLDivElement>;
}

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
];

const socials = [
    { icon: Github, href: "https://github.com/Muhammed-als", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-alsabban-b6518227b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:muals0101@gmail.com", label: "Email" },
];

export default function Navbar({ headerRef }: Props) {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks
            .map((l) => document.querySelector(l.href))
            .filter(Boolean) as Element[];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "border-b border-white/[0.06] bg-ink-900/80 backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <nav className="container mx-auto flex items-center justify-between px-6 py-4">
                <a href="#top" className="group flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/30 bg-accent-400/10 font-display text-lg font-bold text-accent-300 transition-colors group-hover:bg-accent-400/20">
                        M
                    </span>
                    <span className="font-display text-lg font-bold tracking-tight text-white">
                        Alsabban<span className="text-accent-400">.</span>
                    </span>
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                active === link.href
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {active === link.href && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden items-center gap-1 sm:flex">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                className="grid h-9 w-9 place-items-center rounded-lg text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-accent-300"
                            >
                                <s.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>

                    <button
                        className="grid h-9 w-9 place-items-center rounded-lg text-gray-300 transition-colors hover:bg-white/[0.06] md:hidden"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-white/[0.06] bg-ink-900/95 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-2 flex gap-2 border-t border-white/[0.06] pt-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={s.label}
                                        className="grid h-10 w-10 place-items-center rounded-lg text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-accent-300"
                                    >
                                        <s.icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
