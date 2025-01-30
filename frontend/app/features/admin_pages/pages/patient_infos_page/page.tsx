'use client'
import { useNavigate, useParams } from "react-router"
import { useState } from "react"

import AdminMenu from "@/app/components/admin_menu"
import patients from "@/app/mocks/patients"
import HeaderMenu from "./components/header_menu"

import { Alert, Button } from "@mui/material"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DeletePatientModal from "./components/delete_patient_modal"

export default function PatientInfo(){
    const navigate = useNavigate()
    const params = useParams()
    const patientId = Number(params.id)
    const [infosStatus, setInfosStatus] = useState(true)
    const [docsStatus, setDocsStatus] = useState(true)

    // Substituir com get da api:
    const patient = patients.find((patient) => patient.id === patientId)

    const handleClickEdit = () => {
        navigate(`edit`)
    }

    const handleClickAdd = () => {
        
    }

    return(
        <div className="md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <HeaderMenu name="Dados Gerais" tagButton="Editar" infosStatus={infosStatus} setInfosStatus={setInfosStatus} handleClick={handleClickEdit}/>
            { 
            infosStatus && <div 
            className="my-4 flex flex-col justify-center items-center gap-2">
                <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Nome completo:</b> {patient?.name}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>CPF:</b> {patient?.cpf}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Data de nascimento:</b> {patient?.birthDate}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.phone}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>E-mail:</b> {patient?.email}</p>
            </div>
            }
            
            <HeaderMenu name="Avaliações e tratamentos" tagButton="Cadastrar" infosStatus={docsStatus} setInfosStatus={setDocsStatus} handleClick={handleClickAdd}/>
            { 
            docsStatus && <div 
            className="my-4 flex flex-col justify-center items-center gap-2">
                {/* INSERIR RELATÓRIOS DO PACIENTE! */}
            </div>
            }

            <DeletePatientModal 
            patient={patient ? patient : null} 
            title="Deseja excluir os dados deste pacimente?" 
            msgAlert="Atenção: Ao excluir um paciente, todos os dados serão apagados. Isso inclui seus dados pessoais, documentos e registros de atendimentos!"/>
        </div>
    )
}