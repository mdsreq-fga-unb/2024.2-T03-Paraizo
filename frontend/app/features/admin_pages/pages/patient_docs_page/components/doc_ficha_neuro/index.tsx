'use client'
import { Button } from "@mui/material";
import CardText from "../cardText";
import { InterfacePatient } from "../../interfaces/docsInterface";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NotFoundDoc from "../notFoundDoc";

interface InterfaceDocFichaNeuroComponent {
    patient: InterfacePatient
}

export default function DocFichaNeuro({patient}:InterfaceDocFichaNeuroComponent){
    const patientDoc = patient.doc_neuro
    const navigate = useNavigate()

    const [docStatus, setDocStatus] = useState<boolean|undefined>()
        useEffect(()=> {
            if(patientDoc.profissao === '' && patientDoc.dataAvaliacao === '' && patientDoc.queixasPrincipais === '')
                setDocStatus(false)
        }, [])

    return <>
    <section>
      {
        docStatus ? 
        <section>
          <div className="bg-paraizo-cyan h-14 rounded-md flex justify-between items-center px-4">
              <h1 className="text-paraizo-whiteLines text-xl font-bold">Ficha de Avaliação Neurológica</h1>
              <div className="flex gap-4">
                  <Button
                  variant="contained"
                  color="primary"
                  sx={{
                      backgroundColor: "white", 
                      color: "black", 
                      fontFamily: "Rubik", 
                      height: "40px",
                  }}
                  onClick={()=> navigate("edit")}>Editar
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
          <div className="flex flex-wrap gap-4 my-4">
          <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Informações da Ficha:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
          <CardText tag="Data da Avaliação:" texto={patientDoc.dataAvaliacao} />
            <CardText tag="Convênio/Particular:" texto={patientDoc.convenioParticular} />
            <CardText tag="N Carteirinha:" texto={patientDoc.carteirinha} />
            <CardText tag="CPF:" texto={patientDoc.cpf} />

            <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">DADOS PESSOAIS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
          <CardText tag="Nome:" texto={patient.name} />
          <CardText tag="Data de Nascimento:" texto={patient.birthDate} />
            <CardText tag="Idade:" texto={patientDoc.idade} />
          <CardText tag="Sexo:" texto={patientDoc.sexo} />
          <CardText tag="Estado Civil:" texto={patientDoc.estadoCivil} />
            <CardText tag="Endereço:" texto={patientDoc.endereco} />
            <CardText tag="Telefone Residencial:" texto={patientDoc.telResidencial} />
            <CardText tag="Celular:" texto={patientDoc.celular} />
            <CardText tag="Escolaridade:" texto={patientDoc.escolaridade} />
            <CardText tag="Profissão:" texto={patientDoc.profissao} />
            <CardText tag="Queixas Principais:" texto={patientDoc.queixasPrincipais} />
            <CardText tag="Diagnóstico Médico:" texto={patientDoc.diagnosticoMedico} />
            <CardText tag="Faz Uso de Medicamentos:" texto={patientDoc.fazUsoMedicaoces} />
            <CardText tag="Faz Uso de Medicamentos - Quais:" texto={patientDoc.fazUsoMedicaocesQuais} />
            <CardText tag="Diagnóstico de Fisioterapeuta:" texto={patientDoc.diagnosticoFisioterapeuta} />
            <CardText tag="Possui Exames Complementares:" texto={patientDoc.possuiExamesComplementares} />
            <CardText tag="Possui Exames Complementares - Quais:" texto={patientDoc.possuiExamesComplementaresQuais} />
            <CardText tag="Tratamentos Adotados Pelo Fisioterapeuta:" texto={patientDoc.tratamentosAdotadosPeloFisioterapeuta} />

          <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Anamnese</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
            <CardText tag="PA:" texto={patientDoc.pa} tagEnd="mmHg"/>
            <CardText tag="Peso:" texto={patientDoc.peso} tagEnd="Kg"/>
            <CardText tag="Altura:" texto={patientDoc.altura} tagEnd="m"/>
            <CardText tag="IMC:" texto={patientDoc.imc} />
            <CardText tag="RCQ:" texto={patientDoc.rcq} />
            <CardText tag="Tabagista:" texto={patientDoc.tabagista} />
            <CardText tag="Diabetes:" texto={patientDoc.diabetes} />
            <CardText tag="Etilista:" texto={patientDoc.etilista} />
            <CardText tag="AVC:" texto={patientDoc.avc} />
            <CardText tag="Hipertensão:" texto={patientDoc.hipertensao} />
            <CardText tag="Cardiopatia:" texto={patientDoc.cardiopatia} />
            <CardText tag="Histórico Familiar:" texto={patientDoc.historicoFamiliar} />
            
          <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">História da doença</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
            <CardText tag="Data da Lesão:" texto={patientDoc.dataLesao} />
            <CardText tag="Internação:" texto={patientDoc.internacao} />
            <CardText tag="Hospital de Atendimento:" texto={patientDoc.hospitalDeAtendimento} />
            <CardText tag="UTI:" texto={patientDoc.uti} />
            <CardText tag="Traqueostomia:" texto={patientDoc.traqueostopia} />
            <CardText tag="Dependente para Banho:" texto={patientDoc.dependentePara_banho} />
            <CardText tag="Dependente para Vestir:" texto={patientDoc.dependentePara_vestir} />
            <CardText tag="Dependente para Alimentar:" texto={patientDoc.dependentePara_alimentar} />
            <CardText tag="Dependente para Bexiga:" texto={patientDoc.dependentePara_bexiga} />
            <CardText tag="Dependente para Intestino:" texto={patientDoc.dependentePara_intestino} />
            <CardText tag="Dependente para Pinça Grossa:" texto={patientDoc.dependentePara_pincaGrossa} />
            <CardText tag="Dependente para Subir Escada:" texto={patientDoc.dependentePara_subirEscada} />
            <CardText tag="Dependente para Locomoção:" texto={patientDoc.dependentePara_locomocao} />
            <CardText tag="Dependente para Pinça Fina:" texto={patientDoc.dependentePara_pincaFina} />

          <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Teste Sensorial</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
            <CardText tag="Calor:" texto={patientDoc.calor} />
            <CardText tag="Frio:" texto={patientDoc.frio} />
            <CardText tag="Pressão:" texto={patientDoc.pressao} />
            <CardText tag="Distância entre Dois Pontos:" texto={patientDoc.distanciaEntreDoisPontos} />
            <CardText tag="Grafestesia:" texto={patientDoc.grafestesia} />
            <CardText tag="Reflexos:" texto={patientDoc.reflexos} />
            <CardText tag="Patelar:" texto={patientDoc.palatear} />
            <CardText tag="No Queixo:" texto={patientDoc.noQueixo} />
            <CardText tag="No Antebraço:" texto={patientDoc.noAntebraco} />

            <CardText tag="Achados Fisioterapêuticos:" texto={patientDoc.achadosFisioterapeuticos} />

          <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Evolição</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
            <CardText texto={patientDoc.evolucao} />
          </div>
        </section>
        : <section>
          <NotFoundDoc
          title="Este paciente não possui uma Ficha de Avaliação Neurológica registrada!"
          text="Deseja preencher uma ficha de Ficha de Avaliação Neurológica para este paciente?"/>
        </section>
      }
    </section>
    </>
}