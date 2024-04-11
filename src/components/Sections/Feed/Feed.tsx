import React from "react";
import { Presentation } from "./Subsections/Presentation";
import { ProjectsCarousel } from "./Subsections/ProjectsCarousel";
import { Link } from "react-router-dom";
// import { Timeline } from "./Subsections/Timeline";

interface FeedProps{
    projects: any[]
}

export const Feed = ({projects}:FeedProps) => {
    return (
        <div className="MainFeed">
            <Presentation />
            {/* <Timeline /> */}
            <h2>My projects vault</h2>
            <ProjectsCarousel cards={projects} />
            <Link to="projects" >See all projects...</Link>
        </div>
    )
}