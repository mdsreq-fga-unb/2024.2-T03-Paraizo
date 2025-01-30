'use client'

import AdminMenu from "@/app/components/admin_menu"
import patients from "@/app/mocks/patients"
import React, { useState } from "react"
import { useNavigate, useParams } from "react-router"

import {PatientInterface} from './interfaces/patient'
import { Box, Button, TextField } from "@mui/material"

export default function PatientInfosEdit(){
    const navigate = useNavigate()
    const params = useParams()
    const patientId = Number(params.id)

    // Substituir com get da api:
    const patient = patients.find((patient) => patient.id === patientId)

    const [formData, setFormData] = useState<PatientInterface|undefined>(patient)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(formData)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Substituir por requisição da API:
        console.log(formData)
        navigate(-1)
    }
    
    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="flex justify-center items-start w-full bg-white rounded mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <div className="min-h-96 px-4 w-full">
            <div className="lex justify-center items-center bg-paraizo-cyan rounded-md mb-4">
                <h1 className="text-black my-2 w-full p-2 rounded-md flex justify-between text-xl">
                    Edite as informações gerais do paciente:
                </h1>
            </div>
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                margin: '0 auto'
            }}>
                <TextField
                label="Nome"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="CPF"
                name="cpf"
                value={formData?.cpf}
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Data de Nascimento"
                name="birthDate"
                value={formData?.birthDate}
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Telefone"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                fullWidth/>
    
                <TextField
                label="Email"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                fullWidth/>
                
                <div className="flex w-full justify-start gap-4">
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#739DAB", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}>Salvar</Button>
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}
                    fullWidth
                    onClick={handleCancel}>Cancelar</Button>
                </div>
            </Box>
            </div>
        </div>
    )
}