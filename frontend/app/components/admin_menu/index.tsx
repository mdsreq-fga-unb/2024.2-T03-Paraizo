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
import { useLocation } from "react-router";


export default function AdminMenu(){
    const location = useLocation()
    const currentUrl = location.pathname.split("/")[2]
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
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "home" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/home">
                    <AccountBalanceIcon />
                    <p>Visão Geral</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "central" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/central">
                    <AccountBoxIcon />
                    <p>Área do Administrador</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "calendar" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/calendar">
                    <CalendarViewDayIcon />
                    <p>Agendamentos</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "patients" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/patients">
                    <SupervisedUserCircleIcon />
                    <p>Pacientes</p>
                </a>
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
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "home" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/home">
                    <AccountBalanceIcon />
                    <p>Visão Geral</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "central" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/central">
                    <AccountBoxIcon />
                    <p>Área do Administrador</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "calendar" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/calendar">
                    <CalendarViewDayIcon />
                    <p>Agendamentos</p>
                </a>
                <a 
                className={`flex justify-start items-center w-full gap-2 md:gap-1 ${currentUrl === "patients" ? 'bg-paraizo-background text-paraizo-textBlack h-20 pl-4 rounded-tl-xl rounded-bl-xl' : ''}`}
                href="/admin/patients">
                    <SupervisedUserCircleIcon />
                    <p>Pacientes</p>
                </a>
            </div>
        </div>
    </section>
}