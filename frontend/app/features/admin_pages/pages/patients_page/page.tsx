'use client'
import { useEffect, useState } from "react"
import AdminMenu from "@/app/components/admin_menu"
import CardPatient from "@/app/components/cardPatient"

import patients from "@/app/mocks/patients"

import SearchComponent from "./components/searchComponent"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function PatientsPage() {
    const [filterParams, setFilterParams] = useState('')
    
    // Substituir por busca na API:
    const [patientsList, setPatientsList] = useState(patients)
    useEffect(()=>{
        setPatientsList(patients.filter(patient => 
                patient.name.toLocaleLowerCase().includes(filterParams.toLocaleLowerCase()) ||
                patient.email.toLocaleLowerCase().includes(filterParams.toLocaleLowerCase())
            )
        )
    }, [filterParams])

    return <div className="md:bg-white md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-start w-full text-2xl text-paraizo-textBlack px-4 font-bold">Seus Pacientes</h1>
                <p className="text-lg text-paraizo-textBlack p-4">Esta é sua central de gestão dos pacientes! Aqui você pode visualizar, editar, cadastrar ou excluir dados relacionados às informações gerias de cada paciente, além manipular seus regístros de atendimento a tratamendo. Abaixo está a lista com todos os pacientes da clinica.</p>
                <div className="h-[.3rem] bg-paraizo-textGray w-11/12 md:w-[97%] rounded-full"></div>
            </div>
            <SearchComponent setFilterParams={setFilterParams}/>
            <div className="bg-[#F5F4FF] mx-2 p-4 mt-6">
                <h1 className="text-paraizo-textGray text-xl font-light pl-2 pb-4">Pacientes:</h1>
                <div className="bg-paraizo-cyan rounded p-4 mb-4 flex flex-col justify-center items-center gap-4">
                    <p className="w-full">Clique em um paciente para visualizar suas informações!</p>
                    { patientsList.length === 0 ? <div className="w-full flex justify-center items-center gap-4 mx-2">
                        <ErrorOutlineIcon/>
                        <h1 className="w-full text-start text-xl my-2">Nenhum resultado encontrado, tente novamente!</h1>
                    </div>:                   
                    patientsList.map((patient)=>{
                        return <CardPatient 
                        key={`${patient.name}/${patient.email}`}
                        id={patient.id}
                        name={patient.name}
                        email={patient.email}
                        />
                    })}
                </div>
            </div>
        </div>
}