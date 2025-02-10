import { Button } from "@mui/material";
import { useNavigate } from "react-router";

interface InterfaceNotFoundDoc{
    title: string, text: string,
}

export default function NotFoundDoc({title, text}:InterfaceNotFoundDoc){
    const navigate = useNavigate()

    return <>
    <div className="flex flex-col justify-center items-center w-full">
                <h1 className="bg-paraizo-cyan rounded-md p-4 text-paraizo-whiteLines text-xl font-bold ">{title}</h1>
                <p className="my-4 text-paraizo-textGray text-lg">{text}</p>
                <span className="w-auto flex gap-4">
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#739DAB", 
                        color: "white", 
                        fontFamily: "Rubik", 
                        width: "auto",
                        height: "55px",
                    }}
                    onClick={() => navigate("edit")}>
                        Cadastrar Ficha
                    </Button>
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontFamily: "Rubik", 
                        width: "auto",
                        height: "55px",
                    }}
                    onClick={() => navigate(-1)}>
                        Cancelar
                    </Button>
                </span>
            </div>
            </>
}