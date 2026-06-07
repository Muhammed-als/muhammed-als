import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        degree: "Master's in Software Engineering",
        school: "University of Southern Denmark (SDU)",
        period: "2024 — 2026",
        note: "Expected graduation 2026",
        current: true,
    },
    {
        degree: "Bachelor's in Software Engineering",
        school: "University of Southern Denmark (SDU)",
        period: "2021 — 2024",
        note: "",
        current: false,
    },
    {
        degree: "HTX (Higher Technical Examination)",
        school: "Struer Statsgymnasium",
        period: "2018 — 2021",
        note: "",
        current: false,
    },
];

export default function Education() {
    return (
        <section id="education" className="relative py-24 sm:py-28">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mx-auto max-w-3xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-12 text-center">
                        <span className="section-eyebrow">
                            <span className="h-px w-6 bg-accent-400/60" /> 02 — Education
                        </span>
                        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                            Academic <span className="gradient-text">journey</span>
                        </h2>
                    </div>

                    <div className="relative pl-8 sm:pl-10">
                        {/* Timeline line */}
                        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-400/60 via-white/10 to-transparent sm:left-[11px]" />

                        <div className="space-y-6">
                            {education.map((item, i) => (
                                <motion.div
                                    key={item.degree}
                                    className="relative"
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.12 }}
                                >
                                    {/* Node */}
                                    <span
                                        className={`absolute -left-[29px] top-6 grid h-4 w-4 place-items-center rounded-full sm:-left-[37px] ${
                                            item.current
                                                ? "bg-accent-400 shadow-glow-sm"
                                                : "bg-ink-700 ring-2 ring-white/10"
                                        }`}
                                    >
                                        {item.current && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
                                        )}
                                    </span>

                                    <div className="glass-card glass-card-hover p-6 sm:p-7">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-accent-300">
                                                <GraduationCap className="h-3.5 w-3.5" />
                                                {item.period}
                                            </span>
                                            {item.current && (
                                                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 text-xs font-medium text-emerald-300">
                                                    In progress
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="mt-4 text-xl font-semibold text-white">
                                            {item.degree}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-400">{item.school}</p>
                                        {item.note && (
                                            <p className="mt-2 text-sm text-accent-300/80">
                                                {item.note}
                                            </p>
                                        )}
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
