import React from "react";

import { MainDrawer, MainFeed, MainSidebar } from "../components"

export function Default(){
    return (
        <div className="DefaultLayout">
            <MainFeed />
            <MainSidebar />
            <MainDrawer />
        </div>
    )
}