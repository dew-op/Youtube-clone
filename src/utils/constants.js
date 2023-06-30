import React from "react";


// Some React Icons

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { id: "0", name: "New", icon: <AiFillHome />, type: "home" },
    { id: "1", name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { id: "2", name: "Music", icon: <CgMusicNote />, type: "category" },
    { id: "3", name: "Films", icon: <FiFilm />, type: "category" },
    { id: "4", name: "Live", icon: <MdLiveTv />, type: "category" },
    { id: "5", name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { id: "6", name: "News", icon: <ImNewspaper />, type: "category" },
    { id: "7", name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { id: "8", name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    { id: "9", name: "Fashion & beauty", icon: <GiEclipse />, type: "category", divider: true,},
    { id: "10", name: "Settings", icon: <FiSettings />, type: "menu" },
    { id: "11", name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { id: "12", name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { id: "13", name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];