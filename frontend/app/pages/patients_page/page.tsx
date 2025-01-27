import AdminMenu from "@/app/components/admin_menu"
import CardPatient from "@/app/components/cardPatient"
import SearchComponent from "@/app/components/searchComponent"

import patients from "@/app/mocks/patients"

export default function PatientsPage() {
    return <div className="flex justify-between items-center">
    <AdminMenu/>
    <div className="w-[58rem] bg-white mx-20 py-8">
        <SearchComponent/>
        <div className="bg-[#F5F4FF] mx-2 p-4 mt-6">
            <h1 className="text-paraizo-textGray text-xl font-light pl-2 pb-4">Pacientes:</h1>
            <div className="bg-paraizo-cyan rounded p-4 mb-4 flex flex-col justify-center items-center gap-4">
                <p className="w-full">Clique em um paciente para visualizar suas informações!</p>
                {patients.map((patient)=>{
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