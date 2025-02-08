'use client'
import { useLocation, useNavigate, useParams } from "react-router"
import { useState } from "react"

import patients from "@/app/mocks/patients"
import DocFichaRpg from "./components/doc_ficha_rpg"

import DocFichaNeuro from "./components/doc_ficha_neuro"
import DocFichaPilates from "./components/doc_ficha_pilates"
import DocFichaDap from "./components/doc_ficha_dap"

export default function PatientDocsPage(){
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const patientID = Number(location.pathname.split("/")[3])
    const docType = params.type

    // Substituir por GET da api:
    const [patient, setPatient] = useState(patients.find(patient => patient.id === patientID))


    const showDoc = () => {
        switch (docType){
            case 'doc_rpg':
                if(patient)
                    return <DocFichaRpg 
                        patient={patient}/> 
            
            case 'doc_neuro':
                if(patient)
                    return <DocFichaNeuro
                    patient={patient}/>
    
            case 'doc_pilates':
                if(patient)
                    return <DocFichaPilates
                    patient={patient}/>
    
            case 'doc_dap':
                if(patient)
                    return <DocFichaDap
                    patient={patient}/>
        }
    }

    return(
        <section className="max-h-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            {showDoc()}
        </section>
    )
}