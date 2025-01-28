'use client'
import { Dispatch, SetStateAction } from "react";

import { Button } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface InterfaceHeaderMenu{
    name:string,
    tagButton: string,
    infosStatus: boolean,
    setInfosStatus: Dispatch<SetStateAction<boolean>>,
    handleClick: () => void,
}

export default function HeaderMenu({name, tagButton, infosStatus, setInfosStatus, handleClick}:InterfaceHeaderMenu){
    
    return (
        <div className="flex justify-center items-center bg-paraizo-cyan rounded-md mb-4">
                    <h1 className="text-black my-2 w-full p-2 rounded-md flex justify-between">
                        {name}
                    </h1>
                    <Button 
                    variant="contained" 
                    sx={{
                        backgroundColor: "white", 
                        color: "black", 
                        fontSize: 16, 
                        fontFamily: "Rubik", 
                        width: "35%",
                        height: "40px",
                    }}
                    onClick={handleClick}>{tagButton}</Button>
                    <Button
                    onClick={()=>setInfosStatus(prev => !prev)}
                    sx={{color:'black'}}>
                        { infosStatus ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
                    </Button>
                </div>
    )
}