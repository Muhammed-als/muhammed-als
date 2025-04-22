import { motion } from "framer-motion";
interface Props {
    additionalKnowledgeRef: React.RefObject<HTMLDivElement>;
}
const additionalKnowledge = [
    { name: "Git"},
    { name: "Agile"},
    { name: "Scaled Agile Framework (SAFe)"},
    { name: "Scrum"},
    { name: "Large Scale Scrum (LeSS)"},
    { name: "Linux"},
    { name: "Docker"},
    { name:  "C#"},
    { name: "C"},
    { name: "Elixir"},
    { name: "Kotlin"},
    { name: "React Native"},
    { name: "Google Cloud"},
    { name: "SQL"},
    { name: "PostgreSQL"},
    { name: "Spark"},
    { name: "Kafka"},
    { name: "HDFS"},
    { name: "MongoDB"},
    { name: "Redis"},
    { name: "DSL"}
  ];
export default function AdditionalKnowledge ({additionalKnowledgeRef}: Props) {
    return (
        <section ref={additionalKnowledgeRef} className="py-20 bg-gray-900/50">
            <div className="mx-auto px-6 w-full">
                <h3 className="text-4xl font-bold mb-12 text-blue-400 text-center"> Extra Knowledge</h3>
                <p className="text-gray-400 text-center mb-8">Here are some of the additional skills I have acquired over the years.</p>
                <div className="mx-auto w-full">
                    <div className="flex flex-wrap sm:grid sm:grid-cols-3 gap-2 justify-center items-center">
                        {additionalKnowledge.map((knowledge, index) => (
                            <motion.div
                            key={index}
                            className="additional-skill relative group"
                            whileHover={{ scale: 1.05 }}
                            >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative px-3 py-4 text-center bg-gray-800/50 rounded-2xl border border-gray-700">
                                <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                                {knowledge.name}
                                </h4>
                            </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
      </section>
    );
}