import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import TechnicalExpertise from './components/TechnicalExpertise';
import AdditionalKnowledge from './components/AdditionalKnowledge';
import Projects from './components/Projects';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const headerRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const additionalKnowledgeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    gsap.from(".skill-item", {
      width: "0%",
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top center+=100",
        toggleActions: "play none none none"
      }
    });

    gsap.fromTo(
      ".additional-skill",
      {
        scale: 0,
        opacity: 0,
        rotation: -180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: additionalKnowledgeRef.current,
          start: "top center+=100",
          toggleActions: "play none none none"
        }
      }
    );

    gsap.fromTo(
      ".project-card",
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <Navbar
        headerRef={headerRef}
      />
      {/* Hero Section with Personal Image */}
      <Header
        scale={scale}
      />
      {/* About Section */}
      <About
        aboutRef={aboutRef}
      />
      {/* Education Section */}
      <Education/>
      {/* Technical Expertise */}
      <TechnicalExpertise
        skillsRef={skillsRef}
      />
      {/* Additional Technical Knowledge */}
      <AdditionalKnowledge
        additionalKnowledgeRef={additionalKnowledgeRef}
      />
      {/* Projects Section */}
      <Projects
        projectsRef={projectsRef}
      />
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;