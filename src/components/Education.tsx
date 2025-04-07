import { motion } from "framer-motion";

export default function Education () {
    return (
        <div className="container mx-auto px-6">
            <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-4xl font-bold mb-8 text-blue-400 text-center">Education</h3>
                <div className="space-y-8">
                    <motion.div 
                        className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-2xl font-bold mb-2">Master's in Software Engineering</h4>
                        <p className="text-purple-400 mb-4">University of Southern Denmark, SDU • 2024 - 2026</p>
                        <p className="text-gray-300">Expected graduation: 2026</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-2xl font-bold mb-2">Bachelor's in Software Engineering</h4>
                        <p className="text-purple-400 mb-4">University of Southern Denmark, SDU • 2021 - 2024</p>        
                    </motion.div>
                    <motion.div 
                        className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="text-2xl font-bold mb-2">HTX</h4>
                        <p className="text-purple-400 mb-4">Struer Statsgymnasium, • 2018 - 2021</p>        
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}