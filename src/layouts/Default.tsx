import React, { useEffect, useState } from "react";
import { Route, RouteObject, Routes } from "react-router-dom";
import Axios from "axios"

import { routes as def_routes } from "../routes/routes";

import { MainDrawer, MainSidebar } from "../components"
import { marked } from "marked";

export const Default = () => {
    const [drawer, setDrawer] = useState(false)
    const [expandedProject, setExpandedProject] = useState<{"project":any, "md":any} | null>(null)
    const [githubProjects, setGithubProjects] = useState<any[]>([])

    const changeExpandedProject = (new_project:any) => {
        console.log(new_project.url + "/readme")
        Axios.get(new_project.url + "/readme").then((result:{[key:string]:any})=>{
            setExpandedProject({"project": new_project, "md":marked(decodeURIComponent(escape(atob(result.data?.content))))})
        })
    }

    const [routes, setRoutes] = useState<RouteObject[]>(def_routes([], expandedProject, changeExpandedProject))

    useEffect(()=>{

        Axios.get("https://api.github.com/users/PabloRius/repos").then((response:any)=>{
            if(response){
                if(response?.status === 200){
                    setRoutes(def_routes(response.data, expandedProject, changeExpandedProject))
                    setGithubProjects(response.data)
                }
            }
        })
    },[expandedProject])

    useEffect(()=>{
        if(githubProjects.length > 0){
            setRoutes(def_routes(githubProjects, expandedProject, changeExpandedProject))
        }
    },[expandedProject, githubProjects])

    const toggleDrawer = () => {
        setDrawer(prevState=>!prevState)
    }

    return (
        <div className="DefaultLayout">
            <div className="MainBody">
                <Routes>
                    {routes.map((route)=>{
                        return (
                            <Route element={route.element} path={`/${route.path}`} key={route.id} />
                        )
                    })}
                </Routes>
            </div>
            <MainSidebar toggleDrawer={toggleDrawer} />
            <MainDrawer active={drawer} toggle={toggleDrawer} routes={routes} />
        </div>
    )
}