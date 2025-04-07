import { motion } from "framer-motion";
interface Props {
    skillsRef: React.RefObject<HTMLDivElement>;
}
const skills = [
    { name: "HTML", level: 95, color: "#E34F26" },
    { name: "CSS", level: 90, color: "#1572B6" },
    { name: "Tailwind CSS", level: 90, color: "#38B2AC" },
    { name: "Java", level: 80, color: "#E2472E" },
    { name: "JavaScript", level: 80, color: "#F7DF1E" },
    { name: "PHP", level: 75, color: "#777BB4" },
    { name: "Laravel", level: 75, color: "#FF2D20" },
    { name: "TypeScript", level: 70, color: "#3178C6" },
    { name: "React", level: 70, color: "#61DAFB" },
    { name: "Next.js", level: 70, color: "#000000" },
    { name: "Spring", level: 60, color: "#6DB33F" },
    { name: "Python", level: 50, color: "#3776AB" },
];
export default function TechnicalExpertise ({skillsRef}: Props) {
    return (
        <section ref={skillsRef} className="py-20">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-bold mb-12 text-blue-400 text-center">Technical Expertise</h3>
                <div className="max-w-3xl mx-auto space-y-6">
                    {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="skill-item h-full rounded-full"
                            style={{
                            backgroundColor: skill.color,
                            width: `${skill.level}%`,
                            transition: 'width 1.5s ease-out'
                            }}
                        />
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
      </section>
    );
}
  