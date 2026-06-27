import { motion, MotionValue } from "framer-motion";
import MyImage from "../assets/about_me.jpg";
import { ArrowRight, Mail, MapPin } from "lucide-react";

interface Props {
    scale: MotionValue<number>;
}

const stack = ["Java", "React", "TypeScript", "Rust", "Go"];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Header({ scale }: Props) {
    return (
        <section
            id="top"
            className="relative flex min-h-screen items-center overflow-hidden hero-gradient pt-28"
        >
            {/* Animated grid + ambient orbs */}
            <div className="pointer-events-none absolute inset-0 bg-grid" />
            <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-accent-400/10 blur-[100px]" />
            <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />

            <motion.div
                className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]"
                style={{ scale }}
            >
                {/* Left — copy */}
                <div className="text-center lg:text-left">
                    <motion.span
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to work · Full-time roles
                    </motion.span>

                    <motion.h1
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
                    >
                        Muhammed
                        <br />
                        <span className="gradient-text">Alsabban</span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400 lg:mx-0"
                    >
                        Software Engineer with a Master's from SDU. I design and build
                        robust, well-tested software across the full stack.
                    </motion.p>

                    <motion.div
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-500 lg:justify-start"
                    >
                        <MapPin className="h-4 w-4 text-accent-400" />
                        Denmark · M.Sc. Software Engineering
                    </motion.div>

                    {/* Tech ticker */}
                    <motion.div
                        custom={4}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
                    >
                        {stack.map((t) => (
                            <span key={t} className="chip text-xs">
                                {t}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        custom={5}
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-400 px-7 py-3 font-semibold text-ink-950 shadow-glow transition-shadow hover:shadow-[0_0_50px_-8px_rgba(34,211,238,0.6)] sm:w-auto"
                        >
                            View my work
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>

                        <motion.a
                            href="mailto:muals0101@gmail.com"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 font-semibold text-white transition-colors hover:border-accent-400/50 hover:bg-white/[0.06] sm:w-auto"
                        >
                            <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                            Get in touch
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right — portrait */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-md"
                >
                    <div className="absolute -inset-3 animate-spin-slow rounded-[2rem] bg-gradient-to-tr from-accent-400/40 via-indigo-500/20 to-transparent blur-2xl" />
                    <div className="glass-card relative overflow-hidden rounded-[2rem] p-2">
                        <img
                            src={MyImage}
                            alt="Muhammed Alsabban"
                            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                        />
                        <div className="absolute inset-x-2 bottom-2 rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 backdrop-blur-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-display text-sm font-semibold text-white">
                                        3+ years
                                    </p>
                                    <p className="text-xs text-gray-400">building software</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-display text-sm font-semibold text-white">
                                        Full-stack
                                    </p>
                                    <p className="text-xs text-gray-400">web &amp; backend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll cue */}
            <motion.a
                href="#about"
                aria-label="Scroll to about"
                className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-gray-500 transition-colors hover:text-accent-300 lg:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
                    <div className="h-2 w-1 rounded-full bg-current" />
                </div>
            </motion.a>
        </section>
    );
}
