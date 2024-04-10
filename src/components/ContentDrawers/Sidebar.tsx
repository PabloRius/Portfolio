import React from "react";
import { IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";

interface SidebarProps{
    toggleDrawer:()=>void
}

export const Sidebar = ({toggleDrawer}:SidebarProps) => {
    return (
        <div className="MainSidebar">
            <div className="ToggleDrawerIcon">
                <IconButton
                aria-label="Expand lateral menu"
                onClick={() => { toggleDrawer() }} children={<MenuIcon  />} size="large" />
            </div>
            <div className="Title">
                <div className="Content">
                    <h1>Pablo García Rius</h1>
                    <h4>Software Engineer</h4>
                </div>
            </div>
        </div>
    )
}