import React from "react";
import { Button, IconButton, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

interface socialPocket{
    id: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string },
    href: string,
    color: string
}

const socials:socialPocket[] = [
    {
        id: "Linkedin",
        icon: LinkedInIcon,
        href: "https://www.linkedin.com/in/pablo-rius/",
        color: "#0a66c2"
    },
    {
        id: "Github",
        icon: GitHubIcon,
        href: "https://github.com/PabloRius",
        color: "#010409"
    },
    {
        id: "Instagram",
        icon: InstagramIcon,
        href: "https://www.instagram.com/pgriuss/",
        color: "#E1306C"
    },
]

export const Presentation = () => {
    return (
        <div className="Presentation">
            <div className="Text">
                <div className="Email">
                    <p className="Plain">Email: </p>
                    <p 
                        className="Redirect underline-effect" 
                        onClick={()=>{window.location.href = "mailto:pablogrius@gmail.com";}}
                    >
                        pablogrius@gmail.com
                    </p>
                </div>
                <div className="Body">
                    <h2>Hello. I'm Pablo</h2>
                    <p className="Content">
                        I'm a recent Computer Science graduate currently embarking on my
                        professional journey as an intern at NTT Data. I'm passionate about
                        soaking up knowledge in the dynamic realm of software development and
                        project management. My ultimate dream is to traverse the globe with my
                        work, continuously expanding my skill set as a software engineer and
                        contributing meaningful value to the world. Join me on this exciting
                        adventure!
                    </p>
                </div>
                <div className="Files">
                <Button 
                    variant="contained" 
                    endIcon={<DownloadRoundedIcon />} 
                    onClick={()=>{window.open("https://drive.google.com/uc?export=download&id=1GaIXqKC1Jf-6DQ71H7ZWAYcPh_yN3Glf");}}>
                        Download my Resume
                </Button>
                </div>
                <div className="Photo" >
                    <div className="Background"></div>
                    <div className="SocialIcons">
                        { socials.map((social)=>{
                            return (
                                <IconButton onClick={()=>{ window.open(social.href, '_blank') }} children={<social.icon sx={{fill:social.color}} />} key={social.id} />
                            )
                        }) }
                    </div>
                </div>
            </div>
        </div>
    )
}