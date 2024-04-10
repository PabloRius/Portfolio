import React, { ReactElement } from "react";
import { Presentation } from "./Subsections/Presentation";
// import { Timeline } from "./Subsections/Timeline";

export const Feed = ():ReactElement => {
    return (
        <div className="MainFeed">
            <Presentation />
            {/* <Timeline /> */}
        </div>
    )
}