import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { DefaultLayout } from "../layouts";

export function Default(){
    console.log(`${process.env.PUBLIC_URL}`)
    return (
        <div className="DefaultView">
            <Routes>
                <Route index path={`${process.env.PUBLIC_URL}/*`} Component={DefaultLayout} />
                <Route path="/*" element={<Navigate to={`${process.env.PUBLIC_URL}`} />} />
            </Routes>
        </div>
    )
}