import React from "react";
import { useParams } from "react-router-dom";
import projects from "./allProjects";
function SelectedProject(){
    const {id} = useParams<{id: string}>();
    if (id === undefined) {
        return <div>Project not found</div>;
    }
    const projectIndex = parseInt(id);
    if (isNaN(projectIndex) || projectIndex < 0 || projectIndex >= projects.length) {
        return <div>Skill not found</div>;
    }
    const project = projects[projectIndex];
    return (
        <div className="project-container">
            <div className="project-name">
                <h1>{project.name}</h1>
            </div>
            <div className="project-info">
                <img src={project.path} alt={project.name} />
                <div className="description" dangerouslySetInnerHTML={{ __html: project.description }}></div>
            </div>

        </div>
    );
}

export default SelectedProject;