'use client'

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"

import { PatientInterface } from "../patient_infos_edit/interfaces/patient"
import patients from "@/app/mocks/patients"
import InterfaceInfosPatientDoc from "./interfaces/infosPatientDoc"

import { Box, Button, TextField } from "@mui/material"
import SelectInputItens from "./components/selectInput"

export default function PatientDocsEdit(){
    const navigate = useNavigate()
    const location = useLocation()
    const patientID = Number(location.pathname.split("/")[3])
    const patientDocID = Number(location.pathname.split("/")[5])
  
    // Substituir por GET da api:
    const patient = patients.find(patient => patient.id === patientID)
    const patientDoc = patient?.docs.find(doc=> doc.id === patientDocID)

    const [formDataPatient, setFormDataPatient] = useState<PatientInterface|undefined>(patient)
    const [formDataDoc, setFormDataDoc] = useState<InterfaceInfosPatientDoc|undefined>(patientDoc?.infos)
    
    const handleChangePatient = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(formDataPatient)
            setFormDataPatient({
        ...formDataPatient,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeDoc = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(formDataDoc)
            setFormDataDoc({
            ...formDataDoc,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            // Substituir por requisição da API:
            navigate(-1)
    }

    const handleCancel = () => {
        navigate(-1)
    }

    const [arrayFormDataCadeiraAnteriror, setArrayFormDataCadeiraAnteriror] = useState<Array<string>>([])
    const names_cadeira_anterior = [
        'Pé plano / Tnz valgo', 'Joelho valgo', 'Anteversão pélvica', 'Hiperlordose lombar', 'Hipercifose torácica', 'Hiperlordose cervical', 'Retificação cervical', 'Ombros enrolados'
    ]

    const [arrayFormDataCondutaCadeiraAnteriror, setArrayFormDataCondutaCadeiraAnteriror] = useState<Array<string>>([])
    const names_conduta_cadeira_anterior = [
        'DE PÉ NO MEIO', 'RÃ NO CHÃO', 'DE PÉ PAREDE'
    ]
    
    const [arrayFormDataCadeiraPosterior, setArrayFormDataCadeiraPosterior] = useState<Array<string>>([])
    const names_cadeira_posterior = [
        'Pé cavo / Tnz varo', 'Joelho varo', 'Retroversão pélvica', 'Retificação lombar', 'Retificação torácica', 'Hiperlordose cervical', 'Ombros retraídos', 'Ombros elevados'
    ]

    const [arrayFormDataCondutaCadeiraPosterior, setArrayFormDataCondutaCadeiraPosterior] = useState<Array<string>>([])
    const names_conduta_cadeira_posterior = [
        'ASA DELTA', 'RÃ NO AR', 'SENTADO'
    ]

    useEffect(()=>{
        if (formDataDoc?.cadeira_anterior){
            setArrayFormDataCadeiraAnteriror(formDataDoc?.cadeira_anterior)
        }
        if (formDataDoc?.cadeira_posterior){
            setArrayFormDataCadeiraPosterior(formDataDoc?.cadeira_posterior)
        }
    },[])

 

    return (
        <section className="max-w-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
            <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                margin: '0 auto',
            }}>
                
                <TextField
                label="Paciente"
                name="name"
                value={formDataPatient?.name}
                onChange={handleChangePatient}
                fullWidth/>
    
                <TextField
                label="Data de nascimento"
                name="birthDate"
                value={formDataPatient?.birthDate}
                onChange={handleChangePatient}
                fullWidth/>
    
                <TextField
                label="Endereço"
                name="endereco"
                value={formDataDoc?.endereco}
                onChange={handleChangeDoc}
                fullWidth/>
    
                <TextField
                label="Profissão"
                name="profissao"
                value={formDataDoc?.profissao}
                onChange={handleChangeDoc}
                fullWidth/>
    
                <TextField
                label="Telefone"
                name="phone"
                value={formDataPatient?.phone}
                onChange={handleChangePatient}
                fullWidth/>

                <TextField
                label="Email"
                name="email"
                value={formDataPatient?.email}
                onChange={handleChangePatient}
                fullWidth/>

                <TextField
                label="Diagnóstico"
                name="diagnostico"
                value={formDataDoc?.diagnostico}
                onChange={handleChangeDoc}
                fullWidth/>
                
                <TextField
                label="Patologias Associadas"
                name="patologias_associadas"
                value={formDataDoc?.patologias_associadas}
                onChange={handleChangeDoc}
                fullWidth/>
                
                <TextField
                label="Queixa Principal"
                name="queixa_principal"
                value={formDataDoc?.queixa_principal}
                onChange={handleChangeDoc}
                fullWidth/>
                
                <TextField
                label="Etiologia"
                name="etiologia"
                value={formDataDoc?.etiologia}
                onChange={handleChangeDoc}
                fullWidth/>
                
                <TextField
                label="Sinais"
                name="sinais"
                value={formDataDoc?.sinais}
                onChange={handleChangeDoc}
                fullWidth/>
                
                <TextField
                label="Início"
                name="inicio"
                value={formDataDoc?.inicio}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Melhora"
                name="melhora"
                value={formDataDoc?.melhora}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="OBS."
                name="obs"
                value={formDataDoc?.obs}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="OBS."
                name="obs"
                value={formDataDoc?.obs}
                onChange={handleChangeDoc}
                fullWidth/>

                <SelectInputItens tag="Cadeira Anterior" names={names_cadeira_anterior} arrayFormData={arrayFormDataCadeiraAnteriror} setArrayFormData={setArrayFormDataCadeiraAnteriror}/>
                <SelectInputItens tag="Cadeira Posteior" names={names_cadeira_posterior} arrayFormData={arrayFormDataCadeiraPosterior} setArrayFormData={setArrayFormDataCadeiraPosterior}/>

                <TextField
                label="ADAMS - GIBOSIDADES"
                name="adams_gibosidades"
                value={formDataDoc?.adams_gibosidades}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="ADAMS - ZONAS PLANAS"
                name="adams_zonasPlanas"
                value={formDataDoc?.adams_zonasPlanas}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="CA"
                name="ca"
                value={formDataDoc?.ca}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="CP"
                name="cp"
                value={formDataDoc?.cp}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Alongamentos"
                name="alongamentos"
                value={formDataDoc?.alongamentos}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Tração"
                name="tracao"
                value={formDataDoc?.tracao}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Pompágem"
                name="pompagem"
                value={formDataDoc?.pompagem}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="LB/Digito-COMP"
                name="lb_digito_comp"
                value={formDataDoc?.lb_digito_comp}
                onChange={handleChangeDoc}
                fullWidth/>

                <SelectInputItens tag="Conduta Cadeira Anterior" names={names_conduta_cadeira_anterior} arrayFormData={arrayFormDataCondutaCadeiraAnteriror} setArrayFormData={setArrayFormDataCondutaCadeiraAnteriror}/>
                <SelectInputItens tag="Conduta Cadeira Posteior" names={names_conduta_cadeira_posterior} arrayFormData={arrayFormDataCondutaCadeiraPosterior} setArrayFormData={setArrayFormDataCondutaCadeiraPosterior}/>

                <TextField
                label="Consciencia corporal"
                name="consciencia_corporal"
                value={formDataDoc?.consciencia_corporal}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Escoliose"
                name="escoliose"
                value={formDataDoc?.escoliose}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Avaliador"
                name="avaliador"
                value={formDataDoc?.avaliador}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="Crefito"
                name="crefito"
                value={formDataDoc?.crefito}
                onChange={handleChangeDoc}
                fullWidth/>

                <TextField
                label="DATA"
                name="data"
                value={formDataDoc?.data}
                onChange={handleChangeDoc}
                fullWidth/>

                

                <div className="flex w-full justify-start gap-4">
                    <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#739DAB", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}>Salvar</Button>
                    <Button
                    variant="contained" 
                    sx={{
                        backgroundColor: "#F44250", 
                        color: "white", 
                        fontSize: 16, 
                        fontFamily: "Rubik",
                        height: "40px",
                        width: "30%",
                    }}
                    fullWidth
                    onClick={handleCancel}>Cancelar</Button>
                </div>
            </Box>
        </section>
    )
}