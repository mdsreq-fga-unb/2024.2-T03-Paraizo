import AdminMenu from "@/app/components/admin_menu"
import CardPatient from "@/app/components/cardPatient"
import patients from "@/app/mocks/patients"
import SearchComponent from "./components/searchComponent"
import { useEffect, useState } from "react"

export default function PatientsPage() {
    const [patientsList, setPatientsList] = useState(patients)
    const [filterParams, setFilterParams] = useState('')

    useEffect(()=>{
        // Substituir por busca na API:
        setPatientsList(patients.filter(patient => 
                patient.name.toLocaleLowerCase().includes(filterParams.toLocaleLowerCase()) ||
                patient.email.toLocaleLowerCase().includes(filterParams.toLocaleLowerCase())
            )
        )
    }, [filterParams])

    return <div className="flex justify-start items-center bg-paraizo-background">
        <AdminMenu/>
        <div className="h-1/2 min-h-96 mx-[10%] p-4 mt-6 w-2/3 bg-white">
            <SearchComponent setFilterParams={setFilterParams}/>
            <div className="bg-[#F5F4FF] mx-2 p-4 mt-6">
                <h1 className="text-paraizo-textGray text-xl font-light pl-2 pb-4">Pacientes:</h1>
                <div className="bg-paraizo-cyan rounded p-4 mb-4 flex flex-col justify-center items-center gap-4">
                    <p className="w-full">Clique em um paciente para visualizar suas informações!</p>
                    { patientsList.length === 0 ? <div className="w-full">
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
    </div>
}