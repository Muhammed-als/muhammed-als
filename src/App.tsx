import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalExpertise from './components/TechnicalExpertise';
import Projects from './components/Projects';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });

    gsap.fromTo(
      '.project-card',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top center+=120',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-900">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-accent-400 to-indigo-400"
        style={{ scaleX: progress }}
      />

      <Navbar headerRef={headerRef} />
      <main>
        <Header scale={scale} />
        <About aboutRef={aboutRef} />
        <Education />
        <TechnicalExpertise skillsRef={skillsRef} />
        <Projects projectsRef={projectsRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
