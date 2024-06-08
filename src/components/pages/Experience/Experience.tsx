// Experience.tsx

import React, { useEffect, useState } from "react";
import "./Experience.css";
import skills, { Skill } from "./skills";
import { Routes, Route, Link} from 'react-router-dom';
import CustomLink from "./CustomLink";

function Experience() {
    const [skillsList, setSkillsList] = useState<Skill[]>([]);

    useEffect(() => {
        setSkillsList(skills);
    }, []); // avoid infinite re-renders

    return (
        <div className="experience-container">
            <h1>Skills</h1>
            <div className="contnet">
                <div className="skills">
                    {skillsList.map((skill, index) => (
                        <>
                            <Link className="skill" key={index} to={"/muhammed-als/skills/"+index+"/"+encodeURIComponent(skill.name)}>
                                <div className="skill-image">
                                        <img src={skill.path} alt={skill.name} />
                                    </div>
                                    <div className="skill-info">
                                        <p>{skill.name}</p>
                                        <p>{skill.years} {skill.years == 1?(<>
                                            year
                                        </>): <>years</>} of experience</p>
                                    </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
