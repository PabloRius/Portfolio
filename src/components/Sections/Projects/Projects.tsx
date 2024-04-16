import React from "react";

import { SassOriginal, TypescriptOriginal, PythonOriginal, GoOriginalWordmark, COriginal, JavascriptOriginal  } from 'devicons-react';

interface ProjectsProps{
    projects: any[],
    expanded: any | null,
    setExpanded: (project: any)=> void,
}

const dev_icons:{[key:string]:React.FunctionComponent} = {
    "SCSS": SassOriginal,
    "TypeScript": TypescriptOriginal,
    "Go": GoOriginalWordmark,
    "JavaScript": JavascriptOriginal,
    "Python": PythonOriginal,
    "C": COriginal
}

export const Projects = ({projects, expanded, setExpanded}:ProjectsProps) => {

    const expandProject = (project:any) => {
        setExpanded(project)
    }

    return (
        <div className="Projects">
        <div className="Background" />
            <h2>My Project Vault</h2>
            <p><em>Click on a project to read the full description</em></p>
            <div className="Body">
                {projects.map((project, index)=>{
                    if(!project.fork && project.language){
                        return (
                            <div className="Project" key={index} >
                                <h3 onClick={()=>{
                                    expandProject(project)
                                    setTimeout(()=>{
                                        const expandedElem = document.getElementById("Expanded")
                                        window.scrollTo({
                                            top: expandedElem ? expandedElem.getBoundingClientRect().top + 20 + window.scrollY: 0,
                                            behavior: "smooth"
                                        })
                                    },500)
                                    
                                }}>
                                    {project.name}
                                </h3>
                                <p className="Subtitle">{project.description}</p>
                                <div className="Language">{dev_icons[project.language]({}) || <></>}<p className="Language">{project.language}</p></div>
                            </div>
                        )
                    }
                    return <></>
                })}
            </div>
            {expanded && <div id="Expanded" className="Expanded" >
                <div dangerouslySetInnerHTML={{__html: expanded.md}}></div>
            </div> }
        </div>
    )
}