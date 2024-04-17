import React from "react";
import "./Project.scss"
import { dev_icons } from "../../assets/icons/icons";

interface ProjectProps{
    project:any,
    interactWProject?: (arg?:any)=>void,
    className?:string,
    uuid?: number
}

export const Project = ({project, interactWProject, className, uuid}:ProjectProps) => {
    // console.log(dev_icons[project.language]({}))
    return (
        <div className={className} key={`${project.name}-${uuid}`} onClick={()=>{
                if(interactWProject){interactWProject(project)}
            }} >
            <div className="ProjectTitle"><h3>{ project.name }</h3></div>
            <p className="Subtitle">{project.description}</p>
            <div className="Language">{dev_icons[project.language] || <></>}<p className="Language">{project.language}</p></div>
        </div>
    )
}