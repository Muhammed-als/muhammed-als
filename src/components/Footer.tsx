import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socials = [
    { icon: Github, href: "https://github.com/Muhammed-als", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammed-alsabban-b6518227b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:muals0101@gmail.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06] py-16">
            <div className="container mx-auto px-6">
                {/* CTA */}
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-eyebrow justify-center">
                        <span className="h-px w-6 bg-accent-400/60" /> Get in touch
                    </span>
                    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                        Let's build something <span className="gradient-text">great</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-gray-400">
                        I'm actively looking for a full-time software engineering role and ready
                        to start. The fastest way to reach me is by email.
                    </p>
                    <a
                        href="mailto:muals0101@gmail.com"
                        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent-400 px-7 py-3 font-semibold text-ink-950 shadow-glow transition-shadow hover:shadow-[0_0_50px_-8px_rgba(34,211,238,0.6)]"
                    >
                        Say hello
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </motion.div>

                {/* Bottom bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Muhammed Alsabban. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
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
                </div>
            </div>
        </footer>
    );
}
