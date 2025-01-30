'use client'
import { Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

interface InterfaceSearchComponent {
    setFilterParams: Dispatch<SetStateAction<string>>
}

export default function SearchComponent({setFilterParams}:InterfaceSearchComponent){
    const [input, setInput] = useState<string>("")

    const handleClick = () => {
        setFilterParams(input)
    }
    
    return <div className="xl:mx-4">
        <h2 className="text-paraizo-textBlack text-xl p-4">Procure pelo nome ou email de um paciente abaixo:</h2>
        <div className="flex justify-around items-center md:gap-4">
            <TextField 
            className="md:w-full"
            id="outlined-basic" 
            label="Digite o nome de um paciente" 
            variant="outlined" 
            sx={{
                backgroundColor: "#F5F4FF",
            }}
            onChange={(e)=> setFilterParams(e.target.value)}/>
            <Button 
            variant="contained" 
            sx={{
                backgroundColor: "#739DAB", 
                color: "white", 
                fontFamily: "Rubik", 
                height: "55px",
            }}
            onClick={handleClick}>Pesquisar</Button>
        </div>
    </div>
}