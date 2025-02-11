'use client'
import { useNavigate, useParams } from "react-router"
import { useState } from "react"

import patients from "@/app/mocks/patients"
import HeaderMenu from "./components/header_menu"

import DeletePatientModal from "./components/delete_patient_modal"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    const navigateToDoc = (typeDoc:string) => {
        navigate(`${typeDoc}`)
    }

    const handleClickAdd = () => {
        
    }

    return(
        <div className="overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <HeaderMenu name="Dados Gerais" tagButton="Editar" infosStatus={infosStatus} setInfosStatus={setInfosStatus} handleClick={handleClickEdit}/>
            { 
            infosStatus && <div 
            className="my-4 flex flex-col justify-center items-center gap-2">
                <p className="w-11/12 p-2 text-paraizo-textGray bg-white md:bg-paraizo-background rounded-md"><b>Nome completo:</b> {patient?.name}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-white md:bg-paraizo-background rounded-md"><b>CPF:</b> {patient?.cpf}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-white md:bg-paraizo-background rounded-md"><b>Data de nascimento:</b> {patient?.birthDate}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-white md:bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.phone}</p>
                <p className="w-11/12 p-2 text-paraizo-textGray bg-white md:bg-paraizo-background rounded-md"><b>E-mail:</b> {patient?.email}</p>
            </div>
            }
            
            <HeaderMenu name="Avaliações e tratamentos" infosStatus={docsStatus} setInfosStatus={setDocsStatus}/>
            <div>
                {
                    docsStatus && patient?.doc_rpg && <button onClick={() => navigateToDoc('docs/doc_rpg')} className="bg-white md:md:bg-paraizo-background my-2 p-4 rounded-md flex justify-between w-full">
                        <h1 className="text-paraizo-textGray"><b>RPG - FICHA DE AVALIAÇÃO E TRATAMENTO</b></h1>
                        <ArrowForwardIosIcon className="text-black"/>
                    </button>
                }
                {
                    docsStatus && patient?.doc_pilates && <button onClick={() => navigateToDoc('docs/doc_pilates')} className="bg-white md:md:bg-paraizo-background my-2 p-4 rounded-md flex justify-between w-full">
                        <h1 className="text-paraizo-textGray"><b>FICHA DE AVALIAÇÃO PILATES</b></h1>
                        <ArrowForwardIosIcon className="text-black"/>
                    </button>
                }
                {
                    docsStatus && patient?.doc_neuro && <button onClick={() => navigateToDoc('docs/doc_neuro')} className="bg-white md:md:bg-paraizo-background my-2 p-4 rounded-md flex justify-between w-full">
                        <h1 className="text-paraizo-textGray"><b>FICHA DE AVALIAÇÃO NEUROLÓGICA</b></h1>
                        <ArrowForwardIosIcon className="text-black"/>
                    </button>
                }
                {
                    docsStatus && patient?.doc_dap && <button onClick={() => navigateToDoc('docs/doc_dap')} className="bg-white md:md:bg-paraizo-background my-2 p-4 rounded-md flex justify-between w-full">
                        <h1 className="text-paraizo-textGray"><b>FICHA DE AVALIAÇÃO UROGINECOLÓGICA</b></h1>
                        <ArrowForwardIosIcon className="text-black"/>
                    </button>
                }
            </div>


            <DeletePatientModal 
            patient={patient ? patient : null} 
            title="Deseja excluir os dados deste pacimente?" 
            msgAlert="Atenção: Ao excluir um paciente, todos os dados serão apagados. Isso inclui seus dados pessoais, documentos e registros de atendimentos!"/>
        </div>
    )
}