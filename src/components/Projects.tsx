import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Tic_Tac_Toe from "../assets/images/Tic_Tac_Toe.png";
import Converter from "../assets/images/Converter.png";
interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
}
const projects = [
    {
        title: "Tic_Tac_Toe",
        description: "A simple CLI Tic Tac Toe game with a basic computer opponent",
        image: Tic_Tac_Toe,
        tags: ["Java"],
        link: "https://github.com/Muhammed-als/Tic_Tac_Toe"
    },
    {
      title: "Converter",
      description: "A simple desktop app that can convert between different types of files (e.g. Audio to Text)",
      image: Converter,
      tags: ["Python"],
      link: "https://github.com/Muhammed-als/Converter"
    },
    {
      title: "Dyslexia Simulator",
      description: "A chrome extension, where user can select a Dyslexia type and it will simulate the effect of that Dyslexia on the user's screen. The extension does also provide aids to help the user read the text.",
      image: "https://raw.githubusercontent.com/Muhammed-als/Dyslexia-Simulator/refs/heads/main/image-3.png",
      tags: ["React", "JavaScript"],
      link: "https://github.com/Muhammed-als/Dyslexia-Simulator"
    }
  ];
export default function Projects ({projectsRef}: Props) {
    return (
        <section id="projects" ref={projectsRef} className="py-20">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold mb-12 text-center text-blue-400">Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card rounded-xl overflow-hidden card-gradient border border-gray-800"
                        whileHover={{ y: -10 }}
                    >
                        <img src={project.image} alt={project.title} className="w-full h-96" />
                        <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">
                                {tag}
                            </span>
                            ))}
                        </div>
                        <a 
                            href={project.link} 
                            target="_blank"
                            className="inline-flex items-center text-purple-400 hover:text-purple-300"
                        >
                            View Project <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}