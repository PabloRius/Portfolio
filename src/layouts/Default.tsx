import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../routes/routes";

import { MainDrawer, MainSidebar } from "../components"

export function Default(){
    const [drawer, setDrawer] = useState(false)
    const toggleDrawer = () => {
        setDrawer(prevState=>!prevState)
    }
    return (
        <div className="DefaultLayout">
            <div className="MainBody">
                <Routes>
                    {routes.map((route)=>{
                        return (
                            <Route element={route.element} path={route.path} key={route.id} />
                        )
                    })}
                </Routes>
            </div>
            <MainSidebar toggleDrawer={toggleDrawer} />
            <MainDrawer active={drawer} toggle={toggleDrawer} routes={routes} />
        </div>
    )
}