'use client'
import { useLocation, useParams } from "react-router"
import { useEffect } from "react"

import { Button } from "@mui/material"

import patients from "@/app/mocks/patients"
import corpo1 from "@/public/corpo1.png"
import corpo2 from "@/public/colVer.png"

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
                        <div className="flex justify-center items-center w-full bg-paraizo-background rounded-md p-4 gap-4">
                            <h1 className="text-black">ADAMS</h1>
                            <div className="bg-black h-full w-[.125rem] rounded-full"></div>
                            <span className="w-full">
                                <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>GIBOSIDADES:</b> {patientDoc?.infos.adams_gibosidades}</p>
                                <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>ZONAS PLANAS:</b> {patientDoc?.infos.adams_zonasPlanas}</p>
                            </span>
                        </div>
                    </span>
                    <span className="flex flex-col justify-center items-center gap-4">
                        <img 
                        src={corpo2.src} 
                        alt="Coluna vertebral" 
                        className="w-96"/>
                        <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Alongamentos:</b> {patientDoc?.infos.alongamentos}</p>
                        <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Tração:</b> {patientDoc?.infos.tracao}</p>
                        <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Pompágem:</b> {patientDoc?.infos.pompagem}</p>
                        <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>LB/Digito-COMP:</b> {patientDoc?.infos.lb_digito_comp}</p>
                        <div className="w-full flex flex-col justify-start items-start gap-4 p-2 text-paraizo-textGray bg-paraizo-background rounded-md">
                            <h2 className="w-full text-start"><b>CADEIA ANTERIOR:</b></h2>
                                <div className="flex gap-4">
                                    {
                                        patientDoc?.infos.conduta_cadeira_anterior.map(item => <p className="bg-white p-2 rounded-md">{item}</p>)
                                    }
                                </div>
                        </div>
                        <div className="w-full flex flex-col justify-start items-start gap-4 p-2 text-paraizo-textGray bg-paraizo-background rounded-md">
                            <h2 className="w-full text-start"><b>CADEIA POSTERIOR:</b></h2>
                                <div className="flex gap-4">
                                    {
                                        patientDoc?.infos.conduta_cadeira_posterior.map(item => <p className="bg-white p-2 rounded-md">{item}</p>)
                                    }
                                </div>
                        </div>
                        <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Consciencia corporal:</b> {patientDoc?.infos.consciencia_corporal}</p>
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Escoliose:</b> {patientDoc?.infos.escoliose}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Avaliador:</b> {patientDoc?.infos.avaliador}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Crefito:</b> {patientDoc?.infos.crefito}</p>
                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Data:</b> {patientDoc?.infos.data}</p>
                </div>
                <div className="flex flex-col justify-center items-center my-4">
                    <h1 className="text-black w-full">EVOLUÇÃO</h1>
                    <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    <div className="mt-4 w-full">
                        {
                            patientDoc?.infos.evolução.map(registro => (
                                <div className="flex flex-col justify-start items-start gap-4 w-full">
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>S:</b> {registro.s}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Data:</b> {registro.data}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Estado:</b> {registro.estado}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Conduta:</b> {registro.conduta}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>EVA i/f:</b> {registro.eva_if}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Intercorrências:</b> {registro.intercorrências}</p>
                                    <p className="w-full p-2 text-paraizo-textGray bg-paraizo-background rounded-md"><b>Ass.:</b> {registro.ass}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}