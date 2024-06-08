import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import personalImage from "../../../assets/myImage.jpg"
import "./Home.css";
import { faCentercode, faCodepen, faCodiepie, faConnectdevelop, faFacebook, faFreeCodeCamp, faGithub, faLinkedin, faStrava, faSuperpowers } from "@fortawesome/free-brands-svg-icons";
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
                        <a href="../../public/downloads/Muhammed Alsabban-CV_english.pdf" download="Muhammed Alsabban-CV_english.pdf">
                            Download CV (English)
                        </a>
                        <a href="../../public/downloads/Muhammed Alsabban-CV_danish.pdf" download="Muhammed Alsabban-CV_danish.pdf">
                            Download CV (Danish)
                        </a>
                    </div>
                </div>
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
            </div>
            <div className="overview">
                <h1>Overview</h1> 
                <div className="info">
                    <div className="education">
                        <h2>Education</h2>
                        <p className="line">________________________________________</p>
                        <p>
                            <strong>Struer Statsgymnasium</strong>
                        </p>
                        <p>HTX</p>
                        <i>2018 - 2021</i>
                    </div>
                    <div className="experience">
                        <h2>Experience</h2>
                        <p className="line">________________________________________</p>
                        <p>2 years Frontend and Backend Development </p>
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