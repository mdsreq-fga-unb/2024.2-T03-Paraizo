'use client'

import logo from "../../../public/logo_azul.png"

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Button } from "@mui/material";

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";


export default function AdminMenu(){
    const location = useLocation()
    let currentUrl
    (location.pathname.split("/").length >= 3) ? currentUrl = location.pathname.split("/")[2] : currentUrl = 'home' 
    const [statusMenu, setStatusMenu] = useState(false)

    useEffect(()=>{
        console.log(currentUrl.split("/")[2])

    },[])

    return <section>
        <div className="md:hidden py-4 w-full bg-paraizo-cyan flex flex-col">
            <div>
                {!statusMenu ? 
                <Button
                onClick={() => setStatusMenu(prev => !prev)}>
                    <MenuIcon
                    sx={{
                        color: "white",
                        width: "3rem",
                        height: "3rem",
                    }}/>
                </Button> :
                <div className="flex justify-between items-center">
                <Button
                onClick={() => setStatusMenu(prev => !prev)}>
                    <CloseIcon
                    sx={{
                        color: "white",
                        width: "3.5rem",
                        height: "3.5rem",
                    }}/>
                </Button>
                <img 
                className="mt-4 w-20"
                src={logo.src} 
                alt="Logo Janayna Paraizo"/>
                </div>
                }
            </div>
            {statusMenu && <div className="w-screen h-screen my-4 bg-paraizo-cyan flex justify-start items-center flex-col gap-9">
                <div className="flex flex-col justify-start items-center w-full gap-9 py-4 pl-6">
                <NavLink 
                to={"/admin"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "home" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <AccountBalanceIcon />
                    <p>Visão Geral</p>
                </NavLink>
                <NavLink
                to={"/admin/central"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "central" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <AccountBoxIcon />
                    <p>Área do Administrador</p>
                </NavLink>
                <NavLink
                to={"/admin/calendar"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "calendar" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <CalendarViewDayIcon />
                    <p>Agendamentos</p>
                </NavLink>
                <NavLink
                to={"/admin/patients"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "patients" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <SupervisedUserCircleIcon />
                    <p>Pacientes</p>
                </NavLink>
                </div>
            </div>}
        </div>
        <div className="hidden h-screen w-80 md:w-60 bg-paraizo-cyan md:flex justify-start items-center flex-col gap-9">
            <img 
            className="mt-4"
            src={logo.src} 
            alt="Logo Janayna Paraizo"/>
            <div className="w-full h-[0.125rem] bg-paraizo-whiteLines "></div>
            <div className="flex flex-col justify-start items-center w-full gap-9 py-4 pl-6">
                <NavLink 
                to={"/admin"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "home" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <AccountBalanceIcon />
                    <p>Visão Geral</p>
                </NavLink>
                <NavLink
                to={"/admin/central"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "central" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <AccountBoxIcon />
                    <p>Área do Administrador</p>
                </NavLink>
                <NavLink
                to={"/admin/calendar"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "calendar" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <CalendarViewDayIcon />
                    <p>Agendamentos</p>
                </NavLink>
                <NavLink
                to={"/admin/patients"}
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "patients" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}>
                    <SupervisedUserCircleIcon />
                    <p>Pacientes</p>
                </NavLink>
            </div>
        </div>
    </section>
}