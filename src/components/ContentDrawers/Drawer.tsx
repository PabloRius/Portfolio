import React from "react";

interface DrawerProps{
    active: boolean
}

export function Drawer({active}:DrawerProps){
    return (
        <div className={`MainDrawer ${active ? "on": "off"}`}>
            <div className="Content">
                <div className="DrawerItem">Home</div>
                <div className="DrawerItem">About Me</div>
                <div className="DrawerItem">CV</div>
                <div className="DrawerItem">Projects</div>
                <div className="DrawerItem">Contact</div>
            </div>
        </div>
    )
}