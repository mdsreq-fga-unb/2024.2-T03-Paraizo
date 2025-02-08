'use client'
import { Button } from "@mui/material";
import CardText from "../cardText";
import { InterfacePatient } from "../../interfaces/docsInterface";

interface InterfaceDocFichaNeuroComponent {
    patient: InterfacePatient
}

export default function DocFichaNeuro({patient}:InterfaceDocFichaNeuroComponent){
    const patientDoc = patient.doc_neuro

    return <>
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
            >Editar
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
    <h2 className="text-black">Informações da Ficha:</h2>
    <CardText tag="Data da Avaliação:" texto={patientDoc.dataAvaliacao} />
      <CardText tag="Convênio/Particular:" texto={patientDoc.convenioParticular} />
      <CardText tag="N Carteirinha:" texto={patientDoc.carteirinha} />
      <CardText tag="CPF:" texto={patientDoc.cpf} />

    <h2 className="text-black">Dados Pessoais</h2>
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

    <h2 className="text-black">Anamnese:</h2>
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
      
    <h2 className="text-black">História da doença</h2>
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

    <h2 className="text-black">Teste Sensorial</h2>
      <CardText tag="Calor:" texto={patientDoc.calor} />
      <CardText tag="Frio:" texto={patientDoc.frio} />
      <CardText tag="Pressão:" texto={patientDoc.pressao} />
      <CardText tag="Distância entre Dois Pontos:" texto={patientDoc.distanciaEntreDoisPontos} />
      <CardText tag="Grafestesia:" texto={patientDoc.grafestesia} />
      <CardText tag="Reflexos:" texto={patientDoc.reflexos} />
      <CardText tag="Patelar:" texto={patientDoc.palatear} />
      <CardText tag="No Queixo:" texto={patientDoc.noQueixo} />
      <CardText tag="No Antebraço:" texto={patientDoc.noAntebraco} />

    <h2 className="text-black">Achados Fisioterapêuticos</h2>
      <CardText tag="Achados Fisioterapêuticos:" texto={patientDoc.achadosFisioterapeuticos} />

    <h2 className="text-black">Evolição:</h2>
      <CardText texto={patientDoc.evolucao} />
    </div>
    </>
}