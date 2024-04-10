import React from "react";

interface ProjectsProps{
    projects: any[]
}

export const Projects = ({projects}:ProjectsProps) => {

    return (
        <div className="Projects">
            <div className="Background" />
            <h2>My Project Vault</h2>
            {projects.map((project)=>{
                if(!project.fork){
                    return (
                        <div className="Project" key={project.name}>
                            <h3>{project.name}</h3>
                            <p className="Subtitle">{project.description}</p>
                            <p className="Language">{project.language}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}