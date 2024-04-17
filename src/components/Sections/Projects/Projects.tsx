import React from "react";
import { Project } from "../../ContentDrawers/Project";

interface ProjectsProps{
    projects: any[],
    expanded: any | null,
    setExpanded: (project: any)=> void,
}

export const Projects = ({projects, expanded, setExpanded}:ProjectsProps) => {

    const expandProject = (project:any) => {
        setExpanded(project)
        setTimeout(()=>{
            const expandedElem = document.getElementById("Expanded")
            window.scrollTo({
                top: expandedElem ? expandedElem.getBoundingClientRect().top + 20 + window.scrollY: 0,
                behavior: "smooth"
            })
        },500)
    }

    return (
        <div className="Projects">
        <div className="Background" />
            <h2>My Project Vault</h2>
            <p><em>Click on a project to read the full description</em></p>
            <div className="Body">
                {projects.map((project, index)=>{
                    if(!project.fork && project.language){
                        return Project({project: project, uuid: index, interactWProject: expandProject, className: "Project"})
                    }
                    return <div className="null" key={index}></div>
                })}
            </div>
            {expanded && <div id="Expanded" className="Expanded" >
                <div dangerouslySetInnerHTML={{__html: expanded.md}}></div>
            </div> }
        </div>
    )
}