import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import personalImage from "../../../assets/myImage.jpg"
import danishCV from "../../../assets/cv/Muhammed Alsabban-CV_danish.pdf";
import englishCV from "../../../assets/cv/Muhammed Alsabban-CV_english.pdf";
import "./Home.css";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Home(){
    const [isFlipped, setIsFlipped] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsFlipped(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }, []); 
    return (
        <div className="home-container">
            <div className="introduction">
            {!isFlipped?(
                    <div className="hiddenImage">

                    </div>
                ):
                <img
                    className="personalImage"
                    src={personalImage}
                    alt="personalImage"
                />
                } 
                <div className="info">
                    <p>
                        Hello, I'm <br />
                        <span className="name">
                            <strong>
                                Muhammed Alsabban
                            </strong>
                        </span>
                        <br />
                        <span className="position">
                            A software engineering student at SDU (University of Southern Denmark).
                        </span>
                    </p>
                    <div className="socialmedia">
                        <a href="https://github.com/Muhammed-als" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-alsabban-b6518227b/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/muhammed.alsabban.1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                    <div className="cv">
                        <a href={englishCV} download={englishCV}>
                            Download CV (English)
                        </a>
                        <a href={danishCV} download={danishCV}>
                            Download CV (Danish)
                        </a>
                    </div>
                </div>             
            </div>
            <div className="overview">
                <h1>Overview</h1> 
                <div className="info">
                    <div className="education">
                        <h2>Education</h2>
                        <p className="line"></p>
                        <p>
                            <strong>Struer Statsgymnasium</strong>
                        </p>
                        <p>HTX</p>
                        <i>2018 - 2021</i>
                        <br />
                        <p>______________________________</p>
                        <p>
                                <strong>University of Southern Denmark (SDU)</strong>
                        </p>
                        <p>Software Engineering (Bachelor)</p>
                        <i>2021 - 2024</i>

                    </div>
                    <div>
                        <div className="education">
                            <h2>Next Education</h2>
                            <p className="line"></p>
                            <p>
                                <strong>University of Southern Denmark (SDU)</strong>
                            </p>
                            <p>Software Engineering (Master)</p>
                            <i>2024 - 2026</i>
                        </div>
                    </div>
                    <div className="experience">
                        <h2>Experience</h2>
                        <p className="line"></p>
                        <p>3 years Frontend and Backend Development </p>
                    </div>
                </div>  
                <p className="about">
                    I am a dedicated Software Engineering student at the University of Southern Denmark (SDU), currently in my 6th semester. 
                    As I approach the completion of my bachelor’s degree and look forward to my master's, I am driven by the transformative potential of software engineering to solve real-world challenges and innovate for a better future. 
                    Passionate about continuous learning, I am eager to engage in projects that challenge my creativity and push technological boundaries.
                </p>
            </div>
        </div>
    )
    
}
export default Home;