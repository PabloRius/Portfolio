import React from "react";
import { Link, RouteObject } from "react-router-dom";

interface DrawerProps{
    active: boolean,
    toggle: ()=>void,
    routes: RouteObject[]
}

export const Drawer = ({active, toggle, routes}:DrawerProps) => {
    return (
        <div className={`MainDrawer ${active ? "on": "off"}`}>
            <div className="Content">
                {routes.map((route, index)=>{
                    return (
                    <Link 
                        className="DrawerItem" 
                        to={`${route.path!}`} 
                        onClick={()=>{toggle()}} 
                        key={index}>
                            { route.id }
                        </Link>)
                })}
            </div>
        </div>
    )
}