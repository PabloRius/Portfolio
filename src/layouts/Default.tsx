import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { defaultRouter } from "../routes/routes";

import { MainDrawer, MainFeed, MainSidebar } from "../components"

export function Default(){
    const [drawer, setDrawer] = useState(false)
    const toggleDrawer = () => {
        setDrawer(prevState=>!prevState)
    }
    return (
        <div className="DefaultLayout">
            <div className="MainBody">
                <RouterProvider router={defaultRouter} />
            </div>
            <MainSidebar toggleDrawer={toggleDrawer} />
            <MainDrawer active={drawer} />
        </div>
    )
}