import { motion } from "framer-motion";
import { ArrowUpRight, Github, Lock, Shield, Star } from "lucide-react";
import FlexSpace from "../assets/images/BookSystem.png";
import HandDetecting from "../assets/images/HandDetecting.png";
import Tic_Tac_Toe from "../assets/images/Tic_Tac_Toe.png";
import DyslexiaExtension from "../assets/images/DyslexiaExtension.jpg";
import FlexMuscles from "../assets/images/FlexMuscles.png";
import Converter from "../assets/images/Converter.png";

interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
}

const featured = {
    title: "ShieldSync",
    // TODO: confirm the description and tech stack below.
    description:
        "An advanced file synchronization solution — a production-grade application built for reliable, secure syncing across devices. My most substantial project to date, with a focus on robustness, performance and real-world reliability.",
    tags: ["Rust", "Go"],
};

const projects = [
    {
        title: "FlexSpace",
        description: "A full-stack booking system built with React, TypeScript, Node.js (Express) and PostgreSQL. Designed with concurrency protection, containerization and role-based access control (RBAC).",
        image: FlexSpace,
        tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
        link: "https://github.com/Muhammed-als/BookingSystem",
    },
    {
        title: "HandDetecting",
        description: "Real-time hand gesture control system built with MediaPipe and OpenCV.",
        image: HandDetecting,
        tags: ["Python"],
        link: "https://github.com/Muhammed-als/HandDetecting",
    },
    {
        title: "FlexMuscles",
        description: "An intuitive, lightweight, and responsive frontend-only workout explorer. Navigate a highly structured, hierarchical directory of muscle groups to discover curated YouTube tutorials, then **add, edit, and delete** your own exercises. Everything is saved locally in your browser.",
        image: FlexMuscles,
        tags: ["TypeScript"],
        link: "https://github.com/Muhammed-als/FlexMuscles",
    },
    {
        title: "Dyslexia Extension",
        description: "A Chrome extension that makes reading on the web and PDFs easier with text-to-speech, visual focus tools, and dyslexia-friendly formatting.",
        image: DyslexiaExtension,
        tags: ["JavaScript"],
        link: "https://github.com/Muhammed-als/DyslexiaExtension",
    },
    {
        title: "Tic Tac Toe",
        description: "A desktop Tic-Tac-Toe game built with Java and JavaFX, featuring a clean UI, game logic separation, and automated unit tests.",
        image: Tic_Tac_Toe,
        tags: ["Java"],
        link: "https://github.com/Muhammed-als/Tic_Tac_Toe",
    },
    {
        title: "Converter",
        description: "A desktop app that converts between file types (e.g. audio to text), wrapping several conversion pipelines behind one simple UI.",
        image: Converter,
        tags: ["Python"],
        link: "https://github.com/Muhammed-als/Converter",
    },
];

export default function Projects({ projectsRef }: Props) {
    return (
        <section id="projects" ref={projectsRef} className="relative py-24 sm:py-28">
            <div className="container mx-auto px-6">
                <div className="mb-14 text-center">
                    <span className="section-eyebrow">
                        <span className="h-px w-6 bg-accent-400/60" /> 04 — Projects
                    </span>
                    <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                        Things I've <span className="gradient-text">built</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                        A selection of projects where I turned an idea into working software.
                    </p>
                </div>

                {/* Featured project */}
                <motion.div
                    className="project-card group glass-card gradient-border mb-7 grid overflow-hidden rounded-2xl md:grid-cols-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Branded visual panel */}
                    <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden bg-gradient-to-br from-accent-400/20 via-indigo-500/10 to-transparent p-10">
                        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
                        <div className="pointer-events-none absolute -inset-8 animate-spin-slow rounded-full bg-gradient-to-tr from-accent-400/30 to-transparent blur-3xl" />
                        <div className="relative grid h-28 w-28 place-items-center rounded-3xl border border-white/10 bg-ink-900/60 backdrop-blur-md">
                            <Shield className="h-12 w-12 text-accent-300" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 sm:p-10">
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/[0.08] px-3 py-1 text-xs font-medium text-amber-300">
                                <Star className="h-3.5 w-3.5 fill-current" />
                                Featured project
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-400">
                                <Lock className="h-3.5 w-3.5" />
                                Private repository
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{featured.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-gray-400">
                            {featured.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {featured.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-accent-400/20 bg-accent-400/[0.08] px-2.5 py-1 text-xs font-medium text-accent-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            key={project.title}
                            className="project-card group glass-card gradient-border flex flex-col overflow-hidden rounded-2xl"
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 24 }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-ink-900/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent-300">
                                    {project.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-accent-400/20 bg-accent-400/[0.08] px-2.5 py-1 text-xs font-medium text-accent-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors group-hover:text-accent-300">
                                        <Github className="h-3.5 w-3.5" />
                                        Source
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
