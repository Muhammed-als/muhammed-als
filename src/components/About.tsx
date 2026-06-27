import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket } from "lucide-react";

interface Props {
    aboutRef: React.RefObject<HTMLDivElement>;
}

const highlights = [
    {
        icon: Code2,
        title: "Strong foundations",
        text: "Data structures, algorithms, networks, systems, plus software testing & quality assurance.",
    },
    {
        icon: Lightbulb,
        title: "Problem solver",
        text: "Hands-on projects across multiple languages and frameworks have sharpened how I break down hard problems.",
    },
    {
        icon: Rocket,
        title: "Always learning",
        text: "Highly motivated to keep pace with technology and ship software that solves real-world problems.",
    },
];

export default function About({ aboutRef }: Props) {
    return (
        <section id="about" ref={aboutRef} className="relative py-24 sm:py-28">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mx-auto max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-12 text-center">
                        <span className="section-eyebrow">
                            <span className="h-px w-6 bg-accent-400/60" /> 01 — About
                        </span>
                        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                            A bit about <span className="gradient-text">me</span>
                        </h2>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
                        <div className="glass-card p-8 sm:p-10">
                            <div className="space-y-6 text-base leading-relaxed text-gray-300">
                                <p>
                                    I hold a Master's in Software Engineering from{" "}
                                    <span className="font-medium text-white">
                                        SDU (University of Southern Denmark)
                                    </span>{" "}
                                    with strong skills in full-stack development and system design.
                                    Through my studies I built a strong foundation in software
                                    development methods, data structures, algorithms, networks and
                                    computer systems — as well as software testing and quality
                                    assurance — and gained hands-on experience with technologies
                                    such as{" "}
                                    <span className="font-medium text-white">
                                        Java, React, Rust and Go
                                    </span>{" "}
                                    through study and personal projects.
                                </p>
                                <p>
                                    Most recently, I built{" "}
                                    <span className="font-medium text-white">ShieldSync</span>, an
                                    advanced file synchronization solution. I'm excited by projects
                                    that challenge me to think creatively and push the boundaries of
                                    what's possible, and I'm motivated to create scalable and
                                    innovative software that makes a difference. I'm confident I'll
                                    reach my goal of becoming a successful software engineer.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {highlights.map((h, i) => (
                                <motion.div
                                    key={h.title}
                                    className="glass-card glass-card-hover flex gap-4 p-5"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
                                >
                                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent-400/25 bg-accent-400/10 text-accent-300">
                                        <h.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-display text-base font-semibold text-white">
                                            {h.title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-400">
                                            {h.text}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
