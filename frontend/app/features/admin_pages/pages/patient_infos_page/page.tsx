'use client'
import { useNavigate, useParams } from "react-router"
import { useState } from "react"

import patients from "@/app/mocks/patients"
import HeaderMenu from "./components/header_menu"

import DeletePatientModal from "./components/delete_patient_modal"
import DocsCard from "./components/docs_card"

export default function PatientInfo(){
    const navigate = useNavigate()
    const params = useParams()
    const patientId = Number(params.id)
    const [infosStatus, setInfosStatus] = useState(true)
    const [docsStatus, setDocsStatus] = useState(true)

    // Substituir com get da api:
    const patient = patients.find((patient) => patient.id === patientId)
    const patientDocs = patient?.docs

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
                patient && patientDocs?.map(doc => <DocsCard idDocs={doc.id} key={`${parent.name}-${doc.id}`} name={patient.name} id={patient.id} typeDocs={doc.type} dateDocs={doc.infos.data}/>)
            }

            <DeletePatientModal 
            patient={patient ? patient : null} 
            title="Deseja excluir os dados deste pacimente?" 
            msgAlert="Atenção: Ao excluir um paciente, todos os dados serão apagados. Isso inclui seus dados pessoais, documentos e registros de atendimentos!"/>
        </div>
    )
}