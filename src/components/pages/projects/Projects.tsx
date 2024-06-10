import React, { useEffect, useState } from "react";
import "./Project.css";
import projects, {Project} from "./allProjects";
import { Link } from "react-router-dom";
function Projects(){
    const [projectsList, setProjectsList] = useState<Project[]>([]);
    useEffect(() => {
        setProjectsList(projects);
    },[]);
    return (
        <div className="projects-container">
            <h1>Porjects</h1>
            <div className="contnet">
                <div className="projects">
                    {projectsList.map((project, index) => (
                        <Link className="project" key={index} to={`/muhammed-als/projects/${index}/${encodeURIComponent(project.name)}`}>
                            <div className="project-image">
                                <img src={project.path} alt={project.name} />
                            </div>
                            <div className="project-info">
                                <p>{project.name}</p>
                                <p>{project.tools}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Projects;