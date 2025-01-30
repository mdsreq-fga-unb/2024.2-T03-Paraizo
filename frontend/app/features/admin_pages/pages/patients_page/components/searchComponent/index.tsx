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
    
    return <div className="flex justify-around gap-8 items-center">
        <TextField 
        id="outlined-basic" 
        label="Digite o nome de um paciente" 
        variant="outlined" 
        sx={{
            backgroundColor: "#F5F4FF",
            width: "65%",
        }}
        onChange={(e)=> setFilterParams(e.target.value)}/>
        <Button 
        variant="contained" 
        sx={{
            backgroundColor: "#739DAB", 
            color: "white", 
            fontSize: 20, 
            fontFamily: "Rubik", 
            width: "25%",
            height: "55px",
        }}
        onClick={handleClick}>Pesquisar</Button>
    </div>
}