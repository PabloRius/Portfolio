import React, { useEffect, useState } from "react";
import { Route, RouteObject, Routes } from "react-router-dom";
import Axios from "axios"

import { routes as def_routes } from "../routes/routes";

import { MainDrawer, MainSidebar } from "../components"

export const Default = () => {
    const [drawer, setDrawer] = useState(false)
    const [routes, setRoutes] = useState<RouteObject[]>(def_routes())
    useEffect(()=>{

        Axios.get("https://api.github.com/users/PabloRius/repos").then((response:any)=>{
            if(response){
                if(response?.status === 200){
                    setRoutes(def_routes(response.data))
                }
            }
        })
    },[])

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