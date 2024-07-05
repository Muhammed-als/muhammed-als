import React from "react";
import "./About.css";
import AboutMe from "../../../assets/about_me.jpg";
function About(){
    return(
        <div className="about-container">
            <h1>About me</h1>
            <div className="content">
                <img src={AboutMe} alt="AboutMe" />
                <p>
                    I  study  civil  engineering, software  engineering  in  my  first semester of my master's degree at SDU (University  of 
                    Southern Denmark). As a student in Software Engineering, I have gained a strong foundation 
                    in software development methods, data structures, algorithms, networks, computer systems 
                    as well as software testing and quality assurance. I have been able to develop my 
                    programming skills that I got from high school and at the same time I have gained experience 
                    with different programming languages and frameworks. My projects have also allowed me to 
                    become  better  and  faster  at  solving  problems.  I  am  currently  in  the  last  semesters  of 
                    completing my bachelor's and looking forward to starting my master's after bachelor's. I am 
                    motivated  by  the  endless  possibilities  that  Software  Engineering  offers  and  the  ability  to 
                    create  something  that  can  change  the  world.  I  am  excited  at  the  prospect  of  working  on 
                    projects that challenge me to think creatively and push the boundaries of what is possible. 
                    I'm  also  motivated  by  the  opportunity  to  make  a  difference  in  people's  lives  by  creating 
                    software  that  solves  real-world  problems.  I  am  highly  motivated  to  continuously  learn  and 
                    improve  my  skills  so  that  I  can  keep  up  with  the  rapid  developments  in  technology.  I  am 
                    confident that I can achieve my goal of becoming a successful software engineer.
                </p>
            </div>
        </div>
    )
}

export default About;