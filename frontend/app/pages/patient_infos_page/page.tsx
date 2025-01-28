'use client'
import AdminMenu from "@/app/components/admin_menu"
import { useParams } from "react-router"
import patients from "@/app/mocks/patients"
import { useState } from "react"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function PatientInfo(){
    const params = useParams()
    const patientId = Number(params.id)

    // Substituir com get da api:
    const patient = patients.find((patient) => patient.id === patientId)

    const [infosStatus, setInfosStatus] = useState(true)
    const [docsStatus, setDocsStatus] = useState(true)

    return(
        <div 
        className="flex justify-start items-center bg-paraizo-background">
            <AdminMenu/>
            <div 
            className="h-1/2 min-h-96 mx-[10%] p-4 mt-6 w-2/3 bg-white">
                <h1 
                className="text-black bg-paraizo-cyan my-2 w-full p-2 rounded-md flex justify-between">
                    Dados Gerais
                    <button onClick={()=>setInfosStatus(prev => !prev)}>
                        { infosStatus ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
                        
                    </button>
                </h1>
                { 
                infosStatus && <div 
                className="my-4 flex flex-col justify-center items-center gap-2">
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background"><b>Nome completo:</b> {patient?.name}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background"><b>CPF:</b> {patient?.cpf}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background"><b>Data de nascimento:</b> {patient?.birthDate}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background"><b>Telefone:</b> {patient?.phone}</p>
                    <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background"><b>E-mail:</b> {patient?.email}</p>
                </div>
                }
                
                <h1 
                className="text-black bg-paraizo-cyan my-2 w-full p-2 rounded-md flex justify-between">
                    Avaliações e Tratamento
                    <button onClick={()=>setDocsStatus(prev => !prev)}>
                        { docsStatus ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/> }
                        
                    </button>
                </h1>
                { 
                docsStatus && <div 
                className="my-4 flex flex-col justify-center items-center gap-2">
                    
                </div>
                }
            </div>
        </div>
    )
}