import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
interface Props {
    headerRef : React.RefObject<HTMLDivElement>;
}
export default function Navbar({headerRef}: Props) {
    return (
        <header ref={headerRef} className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4 flex justify-between">
                <motion.h1 className="text-2xl font-bold text-[#3B82F6]" whileHover={{ scale: 1.05 }}>
                    Portfolio
                </motion.h1>
                <div className="flex space-x-6">
                    <a href="https://github.com/Muhammed-als" target="_blank" className="hover:text-blue-400 transition-colors"><Github className="w-6 h-6" /></a>
                    <a href="https://www.linkedin.com/in/muhammed-alsabban-b6518227b/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                    <a href="mailto:muhammedalsabban@hotmail.com"  className="hover:text-blue-400 transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
            </nav>
        </header>
    )
}