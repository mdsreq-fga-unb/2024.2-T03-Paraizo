'use client'
import { useLocation, useParams } from "react-router"
import { useEffect } from "react"

import { Button } from "@mui/material"

import patients from "@/app/mocks/patients"
import corpo1 from "@/public/corpo1.png"
import corpo2 from "@/public/corpo2.png"

export default function PatientDocsPage(){
    const params = useParams()
    const location = useLocation()
    const patientID = Number(location.pathname.split("/")[3])
  
    // Substituir por GET da api:
    const patient = patients.find(patient => patient.id === patientID)
    const patientDoc = patient?.docs.find(doc=> doc.id === Number(params.id))

    useEffect(()=>{
        console.log(patientDoc)
    },[])

    return(
        <section className="max-h-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <div className="bg bg-paraizo-cyan h-14 rounded-md flex justify-between items-center px-4">
                <h1 className="text-paraizo-whiteLines text-xl font-bold">Ficha Anamnese</h1>
                <div className="flex gap-4">
                    <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: "white", 
                        color: "black", 
                        fontFamily: "Rubik", 
                        height: "40px",
                    }}>Editar
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontFamily: "Rubik", 
                        height: "40px",
                    }}>Descartar
                    </Button>
                </div>
            </div>
            <div className="my-4">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black w-full">ANAMNESE</h1>
                    <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-4 my-4">
                    <p className="w-full  p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Pacient:</b> {patient?.name}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>D.N:</b> {patient?.birthDate}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>End.:</b> {patientDoc?.infos.endereco}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Profissão:</b> {patientDoc?.infos.profissao}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.phone}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Telefone:</b> {patient?.email}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Diagnóstico:</b> {patientDoc?.infos.diagnostico}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Patologias Associadas:</b> {patientDoc?.infos.patologias_associadas}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Queixa Principal:</b> {patientDoc?.infos.queixa_principal}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Etiologia:</b> {patientDoc?.infos.etiologia}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Sinais:</b> {patientDoc?.infos.sinais}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Sintomas:</b> {patientDoc?.infos.sintomas}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Início:</b> {patientDoc?.infos.inicio}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Melhora:</b> {patientDoc?.infos.melhora}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Piora:</b> {patientDoc?.infos.piora}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>OBS.::</b> {patientDoc?.infos.obs}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black w-full">EXAME FÍSICO</h1>
                    <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-4 my-4 w-full">
                    <span className="w-auto flex flex-col justify-center items-center gap-4">
                        <img 
                        src={corpo1.src} 
                        alt="Corpo humano"
                        className="w-96"/>
                        <span className="w-full flex flex-col justify-start items-start gap-4 p-2 text-paraizo-textGray bg-paraizo-background rounded-md">
                            <h2 className="w-full text-start"><b>CADEIA ANTERIOR:</b></h2>
                            <div className="flex gap-4">
                                {
                                    patientDoc?.infos.cadeira_anterior.map(item => <p className="bg-white p-2 rounded-md">{item}</p>)
                                }
                            </div>
                        </span>
                        <span className="w-full flex flex-col justify-start items-start gap-4 p-2 text-paraizo-textGray bg-paraizo-background rounded-md">
                            <h2 className="w-full text-start"><b>CADEIA POSTERIOR:</b></h2>
                            <div className="flex gap-4">
                                {
                                    patientDoc?.infos.cadeira_posterior.map(item => <p className="bg-white p-2 rounded-md">{item}</p>)
                                }
                            </div>
                        </span>
                    </span>
                    <span>
                        <img src={corpo2.src} alt="Coluna vertebral" />
                        <span>
                            <h2></h2>
                            <div></div>
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}