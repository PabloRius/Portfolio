import React, { useCallback, useEffect, useState } from "react";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";
import { Project } from "../../../ContentDrawers/Project";

const AUTO:number = 5000

interface ProjectsCarouselProps{
    cards: any[]
}

export const ProjectsCarousel = ({cards}:ProjectsCarouselProps) => {
    const [index, setIndex] = useState<[number, number, number, number, number]>([
        0,
        cards.length > 1 
            ? 1 : 0,
        cards.length > 2
            ? 2 : 0,
        cards.length > 3
            ? 3 : 0,
        cards.length > 4
            ? 4 : 0
    ]);
    const [auto, setAuto] = useState<boolean>(true)
    
    let shift_right = useCallback(() => {
        setIndex(prev=>[
            prev[0] === 0 ? cards.length - 1: prev[0] - 1,
            prev[0],
            prev[1],
            prev[2],
            prev[3],
        ])
    },[cards.length])

    useEffect(()=>{
        if(cards.length > 0){
            setIndex([
                0,
                cards.length > 1 
                    ? 1 : 0,
                cards.length > 2
                    ? 2 : 0,
                cards.length > 3
                    ? 3 : 0,
                cards.length > 4
                    ? 4 : 0
            ]);
        }
    },[cards])
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(auto){
                shift_right()
            }
        }, AUTO)
        return () => clearInterval(interval)
    },[auto, shift_right])

    const delayAuto = () => {
        setAuto(false)
        setTimeout(()=>{
            setAuto(true)
        }, AUTO)
    }
    
    const shiftLeft = () => {
        setIndex(prev=>[
            prev[1],
            prev[2],
            prev[3],
            prev[4],
            prev[4] === cards.length - 1 ? 0: prev[2] + 1
        ])
    }
    
    return (
        <div className="ProjectsCarousel">
            <div className="CarouselShiftLeft">
                <IconButton children={<ArrowBackIosIcon />} onClick={()=>{
                    delayAuto()
                    shiftLeft()
                }} />
            </div>
            <div className="Body">
                {cards.map((card, id)=>{
                    return (
                        Project({project:card, uuid: id, className: `Card ${id === index[0] ? "next-left": id === index[1] ? "left": id === index[2] ? "center": id === index[3] ? "right": id === index[4] ? "next-right": "hidden"}`})
                    )
                })}
            </div>
            <div className="CarouselShiftRight">
                <IconButton children={<ArrowForwardIosIcon />} onClick={()=>{
                    delayAuto()
                    shift_right()
                }} />
            </div>
        </div>
    )
}