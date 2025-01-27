'use client'
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchComponent(){
    const [input, setInput] = useState<string>("")

    const handleClick = () => {
        console.log('pesquisar', input)
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
        onChange={(e)=> setInput(e.target.value)}/>
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