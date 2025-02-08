'use client'

import patients from "@/app/mocks/patients"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import FormFichaRpg from "./components/formFichaRpg"
import FormFichaNeuro from "./components/formFichaNeuro"
import FormFichaPilates from "./components/formFichaPilates"
import FormFichaDAP from "./components/formFichaDAP"

export default function PatientDocsEdit(){
    const navigate = useNavigate()
    const location = useLocation().pathname.split("/")
    const docType = location[5]
    
    // SUBSTITUIR POR GET DA API:
    const patient = patients.find(patient => patient.id === Number(location[3]))

    const showForm = () => {
            switch (docType){
                case 'doc_rpg':
                    if(patient)
                        return <FormFichaRpg
                        patient={patient}/>
                case 'doc_neuro':
                    if(patient)
                        return <FormFichaNeuro
                        patient={patient}/>
        
                case 'doc_pilates':
                    if(patient)
                        return <FormFichaPilates
                        patient={patient}/>
        
                case 'doc_dap':
                    if(patient)
                        return <FormFichaDAP
                        patient={patient}/>
            }
        }

    return (
        <section>
            {showForm()}
        </section>
    )
}