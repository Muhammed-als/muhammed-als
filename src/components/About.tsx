import { motion } from "framer-motion";
interface Props {
    aboutRef : React.RefObject<HTMLDivElement>;
}
export default function About({aboutRef}: Props) {
    return (
        <section ref={aboutRef} className="py-20 bg-gray-900/50 space-y-10 w-full">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-4xl font-bold mb-8 text-blue-400 text-center">About Me</h3>
                    <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
                        <motion.div 
                            className="about-content space-y-6 text-gray-300"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <p>
                                I study civil engineering, software engineering in my second semester of my master’s degree at SDU (University of Southern Denmark). As a student in Software Engineering, I have gained a strong foundation in software development methods, data structures, algorithms, networks, computer systems as well as software testing and quality assurance. I have been able to develop my programming skills that I got from high school and at the same time I have gained experience with different programming languages and frameworks. My projects have also allowed me to become better and faster at solving problems. 
                                
                            </p>
                            <p>
                                I am excited at the prospect of working on projects that challenge me to think creatively and push the boundaries of what is possible. I'm also motivated by the opportunity to make a difference in people's lives by creating software that solves real-world problems. I am highly motivated to continuously learn and improve my skills so that I can keep up with the rapid developments in technology. I am confident that I can achieve my goal of becoming a successful software engineer.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}