import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

interface InterfacePatient {
    id: Number,
    name: string,
    cpf: string,
    birthDate: string,
    email: string,
    phone: string,
}

interface InterfaceDeletePatientModal {
    title: string,
    msgAlert: string,
    patient: InterfacePatient|null,
}

export default function DeletePatientModal({patient=null, title, msgAlert}:InterfaceDeletePatientModal){
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(prev => !prev)

    }
    const handleClose = () => {
        setOpen(prev => !prev)
    }
    const handleDelete = () => {
        // Implementar requisição DELETE na API:
        console.log('deletado!')
        setOpen(prev => !prev)
        navigate(-1)
    }
    
    return (
        <div className="my-4">
            <span className="flex w-full justify-start items-center gap-4">
                    <Button
                    type="submit"
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontFamily: "Rubik",
                        height: "10%",
                        width: "35%",
                    }}
                    onClick={handleOpen}>
                        Excluir paciente
                    </Button>
                    <Alert sx={{width:"100%"}} severity="warning">{msgAlert}oi</Alert>
                </span>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-tittle"
            aria-describedby="alert-dialog-description">
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                <Alert sx={{width:"100%"}} severity="warning">{msgAlert}oi</Alert>
                <div 
                className="my-4 flex flex-col justify-center items-center gap-2">
                    <h1 className="w-full text-start font-bold">Paciente:</h1>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Nome completo:</b> {patient?.name}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>CPF:</b> {patient?.cpf}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Data de nascimento:</b> {patient?.birthDate}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.phone}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>E-mail:</b> {patient?.email}</p>
                </div>
                </DialogContent>

                <DialogActions>
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                    }}
                    onClick={handleDelete}>
                        Confirmar exclusão
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancelar
                    </Button>
                    
                </DialogActions>
            </Dialog>
        </div>
    )
}