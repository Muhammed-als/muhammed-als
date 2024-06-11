// CustomLink.tsx
import React from "react";
import "./Experience.css";
import { useParams } from 'react-router-dom';
import skills from "./skills";

function CustomLink() {
    const { id } = useParams<{ id: string }>();

    if (id === undefined) {
        return <div>Skill not found</div>;
    }
    const skillIndex = parseInt(id);
    if (isNaN(skillIndex) || skillIndex < 0 || skillIndex >= skills.length) {
        return <div>Skill not found</div>;
    }
    const skill = skills[skillIndex];

    return (
        <div className="skill-container">
            <div className="skill-name">
                <h1>{skill.name}</h1>
            </div>
            <div className="skill-info">
                <img src={skill.path} alt={skill.name} />
                <div className="description" dangerouslySetInnerHTML={{ __html: skill.description }} /> {/* Render HTML content */}
                </div>
            
        </div>
    );
}

export default CustomLink;
