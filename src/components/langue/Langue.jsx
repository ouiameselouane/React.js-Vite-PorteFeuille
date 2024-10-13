import React from 'react';
import './langue.css';
import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";

export const Langue = () => {
    const languages = [
        {
            id: 1,
            titre: "HTML",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            icon: IoLogoHtml5
        },
        {
            id: 2,
            titre: "CSS",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            icon: IoLogoCss3
        },
        {
            id: 3,
            titre: "REACT",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
            icon: IoLogoReact
        },
        {
        id: 4,
        titre: "JavaScript",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        icon: FaJs
    },{
        id: 5,
        titre: "MySql",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        icon: TbBrandMysql
    }
    ];

    return (
        <div className="langue">
            {
                languages.map((division) => (
                    <div className="division">
                        <div id={division.titre}>
                            <division.icon/>
                        </div>
                        <div>
                            <h4>{division.titre}</h4>
                            <p>{division.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
