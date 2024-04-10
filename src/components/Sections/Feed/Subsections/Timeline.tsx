import React from "react";
// import { Chrono } from "react-chrono";

const items = [
    {
    title: "2024",
    cardTitle: "Graduated from my CS Bachelor's Degree",
    cardSubtitle: "Finished & presented my bachelor's thesis.",
    },
    {
    title: "2024",
    cardTitle: "Graduated from my CS Bachelor's Degree",
    cardSubtitle: "Finished & presented my bachelor's thesis.",
    },
    {
    title: "2018",
    cardTitle: "Enrolled in a CS Degree",
    cardSubtitle:   'Fresh from college, bought my first laptop and enrolled in a Computer Science Engineering degree at Univesidad Carlos III in Madrid, Spain, my home country.',
    },
]

export const Timeline = () => {
    return (
        <div className="Timeline">
            {/* <Chrono mode="VERTICAL_ALTERNATING" items={items} /> */}
        </div>
    )
}