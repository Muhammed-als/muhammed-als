import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench } from "lucide-react";

interface Props {
    skillsRef: React.RefObject<HTMLDivElement>;
}

const categories = [
    {
        icon: Code2,
        title: "Languages",
        skills: ["Java", "TypeScript", "JavaScript", "Rust", "Go", "Python", "PHP", "C#", "C", "Kotlin", "Elixir"],
    },
    {
        icon: Layers,
        title: "Frameworks & Web",
        skills: ["React", "Next.js", "Spring", "Laravel", "React Native", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        icon: Database,
        title: "Data & Infrastructure",
        skills: ["SQL", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Spark", "HDFS", "Docker", "Linux", "Google Cloud"],
    },
    {
        icon: Wrench,
        title: "Practices & Tools",
        skills: ["Git", "Agile", "Scrum", "SAFe", "Large Scale Scrum (LeSS)", "DSL"],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04 } },
};

const chip = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function TechnicalExpertise({ skillsRef }: Props) {
    return (
        <section id="skills" ref={skillsRef} className="relative py-24 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="mb-14 text-center">
                    <span className="section-eyebrow">
                        <span className="h-px w-6 bg-accent-400/60" /> 03 — Skills
                    </span>
                    <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                        Technical <span className="gradient-text">toolbox</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        The languages, frameworks and tools I reach for to design, build and ship
                        software.
                    </p>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            className="glass-card glass-card-hover p-7"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                        >
                            <div className="mb-5 flex items-center gap-3">
                                <div className="grid h-10 w-10 place-items-center rounded-xl border border-accent-400/25 bg-accent-400/10 text-accent-300">
                                    <cat.icon className="h-5 w-5" />
                                </div>
                                <h3 className="font-display text-lg font-semibold text-white">
                                    {cat.title}
                                </h3>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                {cat.skills.map((skill) => (
                                    <motion.span key={skill} variants={chip} className="chip">
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
