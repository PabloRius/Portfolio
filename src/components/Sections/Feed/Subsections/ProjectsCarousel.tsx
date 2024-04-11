import React, { useEffect, useState } from "react";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";

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
                shiftRight()
            }
        }, AUTO)
        return () => clearInterval(interval)
    },[auto])

    const delayAuto = () => {
        setAuto(false)
        setTimeout(()=>{
            setAuto(true)
        }, AUTO)
    }
    const shiftRight = () => {
        setIndex(prev=>[
            prev[0] === 0 ? cards.length - 1: prev[0] - 1,
            prev[0],
            prev[1],
            prev[2],
            prev[3],
        ])
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
                        <div key={id} className={`Card ${id === index[0] ? "next-left": id === index[1] ? "left": id === index[2] ? "center": id === index[3] ? "right": id === index[4] ? "next-right": "hidden"}`}>
                            <h3>{card.name}</h3>
                            <p className="Subtitle">{card.description}</p>
                            <p className="Language">{card.language}</p>
                        </div>
                    )
                })}
            </div>
            <div className="CarouselShiftRight">
                <IconButton children={<ArrowForwardIosIcon />} onClick={()=>{
                    delayAuto()
                    shiftRight()
                }} />
            </div>
        </div>
    )
}