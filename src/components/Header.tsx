import { motion, MotionValue } from "framer-motion";
import MyImage from '../assets/about_me.jpg';
import { Briefcase, Code } from "lucide-react";
import DanishCV from '../assets/cv/Muhammed Alsabban-CV_danish.pdf';
import EnglishCV from '../assets/cv/Muhammed Alsabban-CV_english.pdf';
interface Props {
    scale: MotionValue<number>
}
export default function Header({scale}: Props) {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient pt-32">
      <motion.div 
        className="container mx-auto px-6 text-center space-y-4"
        style={{ scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-8 relative w-48 h-48 mx-auto group"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-75 blur-lg"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <img
            src={MyImage}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-blue-500 relative z-10"
          />
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-300 opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 text-blue-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          Muhammed Alsabban
        </motion.h2>

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Master student at Software Engineering
        </motion.p>

        <motion.div 
          className="flex justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[{ icon: Briefcase, label: "Years Experience", value: "3+" }].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h4 className="text-3xl font-bold mb-2 text-white">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>     

        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center group text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <motion.span
              className="inline-block ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >→</motion.span>
          </motion.a>

          <motion.a 
            href="#contact" 
            className="px-8 py-3 border border-blue-500 rounded-full text-blue-400 hover:bg-blue-600/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* CV Download Buttons */}
        <motion.div 
          className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a 
            href={EnglishCV} 
            download
            className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full hover:opacity-90 transition-all flex items-center justify-center text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download CV (EN)</span>
            <motion.svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </motion.svg>
          </motion.a>

          <motion.a 
            href={DanishCV} 
            download
            className="group px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full hover:opacity-90 transition-all flex items-center justify-center text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(96, 165, 250, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Hent CV (DA)</span>
            <motion.svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}