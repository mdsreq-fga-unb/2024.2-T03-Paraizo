'use client'

import { ChangeEvent, useState } from "react";
import { InterfacePatient, InterfaceDocFichaDAP } from "../../../patient_docs_page/interfaces/docsInterface"
import { Alert, Box, Button, Snackbar, SnackbarCloseReason, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router";

interface InterfaceFormFichaRpg {
    patient:InterfacePatient
}

export default function FormFichaDAP({patient}:InterfaceFormFichaRpg){
    const patientDoc = patient.doc_dap
    const [formData, setFormData] = useState<InterfaceDocFichaDAP>(patientDoc);
    const navigate = useNavigate()
    const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'idade' ? parseInt(value) || 0 : value,
    }));
  };

  const handleAlertClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hasEmptyField = Object.keys(formData).some((key) => {
      if (typeof (formData as any)[key] === 'string') {
        return (formData as any)[key].trim() === '';
      }
      return false;
    });

    if (hasEmptyField) {
      setAlertMessage('Por favor, preencha todos os campos.');
      setAlertOpen(true);
      return;
    }

    console.log('Dados atualizados:', formData);
    // Aqui você pode realizar a chamada à API para atualizar os dados
  };
    return(
        <section className="max-h-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
        <h1 className="text-xl font-bold text-paraizo-whiteLines bg-paraizo-cyan p-4 mb-4 w-full rounded-md">Edite as informações da Ficha de Avaliação Uroginecológica</h1>
            <Box sx={{ maxWidth: '900px', margin: 'auto', p: 2 }}>
      <form onSubmit={handleSubmit}>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Dados gerais</h2>

        <Stack spacing={2}>
          {/* Campos específicos do objeto */}
          <TextField
            label="Uso de Proteção - Tipo"
            name="usoProtecaoTipo"
            value={formData.usoProtecaoTipo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Proteção - Trocas"
            name="usoProtecaoTrocas"
            value={formData.usoProtecaoTrocas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Enurese Noturna - Último Episódio"
            name="enureseNoturnaUltimoEpisodio"
            value={formData.enureseNoturnaUltimoEpisodio}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Início do Agravamento Após Parto"
            name="inicioAgravamentoAposParto"
            value={formData.inicioAgravamentoAposParto}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Quanto Tempo Após Parto"
            name="quantoTempoAposParto"
            value={formData.quantoTempoAposParto}
            onChange={handleChange}
            fullWidth
          />
          {/* Demais campos do objeto */}
          <TextField
            label="Data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Idade"
            name="idade"
            type="number"
            value={formData.idade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Estado Civil"
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Profissão"
            name="profissao"
            value={formData.profissao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Escolaridade"
            name="escolaridade"
            value={formData.escolaridade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Telefones"
            name="telefones"
            value={formData.telefones}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Clínica/Médico Solicitante"
            name="clinicaMedicoSolicitante"
            value={formData.clinicaMedicoSolicitante}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Nº SUS"
            name="nSus"
            value={formData.nSus}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Diagnóstico Médico"
            name="diagnosticoMedico"
            value={formData.diagnosticoMedico}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">1. ANTECEDENTES GINECOLÓGICOS:</h2>

          <TextField
            label="Aluno"
            name="aluno"
            value={formData.aluno}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Estado Reprodutivo"
            name="estadoReprodutivo"
            value={formData.estadoReprodutivo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Menarca"
            name="menarca"
            value={formData.menarca}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="DUM"
            name="dum"
            value={formData.dum}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="TH"
            name="th"
            value={formData.th}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tempo"
            name="tempo"
            value={formData.tempo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Ciclos Menstruais"
            name="ciclosMenstruais"
            value={formData.ciclosMenstruais}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intervalo"
            name="intervalo"
            value={formData.intervalo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Duração"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Quantidade"
            name="quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sintomas Menstruais"
            name="sintomasMenstruais"
            value={formData.sintomasMenstruais}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Dismenoreia"
            name="dismenoreia"
            value={formData.dismenoreia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Medicação"
            name="medicacao"
            value={formData.medicacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Métodos Contraceptivos"
            name="usoDeMetodosContraceptivos"
            value={formData.usoDeMetodosContraceptivos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Métodos Contraceptivos - Quais"
            name="usoDeMetodosContraceptivosQual"
            value={formData.usoDeMetodosContraceptivosQual}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">2. ANTECEDENTES OBSTÉTRICOS:</h2>

          <TextField
            label="G"
            name="g"
            value={formData.g}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="P"
            name="p"
            value={formData.p}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="A"
            name="a"
            value={formData.a}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="C"
            name="c"
            value={formData.c}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="DUP"
            name="dup"
            value={formData.dup}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Peso Maior RN"
            name="pesoMaiorRN"
            value={formData.pesoMaiorRN}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Complicações Parto/Episotomia"
            name="complicacoesPartoEpisotomia"
            value={formData.complicacoesPartoEpisotomia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Complicações Parto/Episotomia (Outra)"
            name="complicacoesPartoEpisotomiaOutra"
            value={formData.complicacoesPartoEpisotomiaOutra}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Complicações Puérpio"
            name="complicacoesPuerpio"
            value={formData.complicacoesPuerpio}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">3. HISTÓRIA DA MOLÉSTIA ATUAL:</h2>

          <TextField
            label="Queixa Principal - Início/Duração"
            name="queixaPrincipalInicioDuracao"
            value={formData.queixaPrincipalInicioDuracao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="EVA"
            name="eva"
            value={formData.eva}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">4. HÁBITOS DE VIDA E ANTECENDENTES CLÍNICOS E CIRURGICOS</h2>

          <TextField
            label="Antecedentes Familiares"
            name="antecedentesFamiliares"
            value={formData.antecedentesFamiliares}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Antecedentes Pessoais"
            name="antecedentesPessoais"
            value={formData.antecedentesPessoais}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Medicamentos em Uso"
            name="medicamentosEmUso"
            value={formData.medicamentosEmUso}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">5. HÁBITOS DE VIDA</h2>

          <TextField
            label="Ingestão Hídrica"
            name="ingestaoHidrica"
            value={formData.ingestaoHidrica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Atividade Física"
            name="atividadeFisica"
            value={formData.atividadeFisica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Atividade Física - Qual"
            name="atividadeFisicaQual"
            value={formData.atividadeFisicaQual}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Hábitos"
            name="habitos"
            value={formData.habitos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Dieta"
            name="dieta"
            value={formData.dieta}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intolerância Alimentares"
            name="intoleranciaAlimentares"
            value={formData.intoleranciaAlimentares}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">6. SINTOMAS DO TRATO URINÁRIO INFERIOR (TUI)</h2>

          <TextField
            label="Apresenta UI"
            name="apresentaUI"
            value={formData.apresentaUI}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Perdas"
            name="perdas"
            value={formData.perdas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Retardar Micção"
            name="retardarMiccao"
            value={formData.retardarMiccao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Frequência Miccional Diária"
            name="frequenciaMiccionalDiaria"
            value={formData.frequenciaMiccionalDiaria}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Noctúria"
            name="nocturia"
            value={formData.nocturia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Enurese Noturna"
            name="enureseNoturna"
            value={formData.enureseNoturna}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Dificuldade para Iniciar Micção"
            name="dificuldadeParaIniciarMiccao"
            value={formData.dificuldadeParaIniciarMiccao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sensação de Esvaziamento Incompleto"
            name="sensacaoDeEsvaziamentoIncompleto"
            value={formData.sensacaoDeEsvaziamentoIncompleto}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Necessidade de Esforço para Completar Micção"
            name="necessidadeDeEsforcoParaCompletarMiccao"
            value={formData.necessidadeDeEsforcoParaCompletarMiccao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Atividades/Situações que Desencadeiam UI"
            name="atividadesSituacoesDesencadeiamUI"
            value={formData.atividadesSituacoesDesencadeiamUI}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Atividades/Situações que Desencadeiam UI (Outros)"
            name="atividadesSituacoesDesencadeiamUIOutros"
            value={formData.atividadesSituacoesDesencadeiamUIOutros}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Quantidade de Urina Perdida"
            name="quantidadeDeUrinaPerdida"
            value={formData.quantidadeDeUrinaPerdida}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Esvaziamentos Vesicais Sem Desejo"
            name="esvaziamentosVesicalSemDesejo"
            value={formData.esvaziamentosVesicalSemDesejo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência Urinária Insensível"
            name="incontinenciaurinariaInsensivel"
            value={formData.incontinenciaurinariaInsensivel}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Proteção"
            name="usoDeProtecao"
            value={formData.usoDeProtecao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Proteção - Nº de Trocas"
            name="usoDeProtecaoNDeTrocas"
            value={formData.usoDeProtecaoNDeTrocas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="ITU"
            name="itu"
            value={formData.itu}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="ITU - Último Episódio"
            name="ituUltimoEpisodio"
            value={formData.ituUltimoEpisodio}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Outros Sintomas/OBS - TUI"
            name="outrosSintomasObsTUI"
            value={formData.outrosSintomasObsTUI}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">7. SINTOMAS INTESTINAIS</h2>

          <TextField
            label="Necessidade de Manobras para Evacuação"
            name="necessidadeDeManobrasParaEvacuacao"
            value={formData.necessidadeDeManobrasParaEvacuacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Adoção de Novas Posturas"
            name="adocaoNovasPosturas"
            value={formData.adocaoNovasPosturas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Uso de Enemas"
            name="usoDeEnemas"
            value={formData.usoDeEnemas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sensação de Esvaziamento"
            name="sensacaoEsvaziamento"
            value={formData.sensacaoEsvaziamento}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Perda Insensível de Fezes"
            name="perdaInsensivelFezes"
            value={formData.perdaInsensivelFezes}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">8. SINTOMAS VAGINAIS</h2>
          <TextField
            label="Percepção de Prolapso"
            name="percepcapDeProlapso"
            value={formData.percepcapDeProlapso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urgência"
            name="urgencia"
            value={formData.urgencia}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">9. FUNÇÃO SEXUAL </h2>

          <TextField
            label="Incontinência por Urgência"
            name="incontinenciaUrgencia"
            value={formData.incontinenciaUrgencia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Perda de Fezes"
            name="perdaDeFezes"
            value={formData.perdaDeFezes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Quantidade de Fezes"
            name="quantidadeDeFezes"
            value={formData.quantidadeDeFezes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intestinal - Uso de Proteção"
            name="intestinal_usoDeProtecao"
            value={formData.intestinal_usoDeProtecao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intestinal - Uso de Proteção (Tipo)"
            name="intestinal_usoDeProtecaoTipo"
            value={formData.intestinal_usoDeProtecaoTipo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intestinal - Uso de Proteção - Trocas"
            name="intestinal_usoDeProtecaoTrocas"
            value={formData.intestinal_usoDeProtecaoTrocas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intestinal - Uso de Proteção - Nº de Trocas"
            name="intestinal_usoDeProtecaoNTrocas"
            value={formData.intestinal_usoDeProtecaoNTrocas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Consistência das Fezes"
            name="consistenciaDasFezes"
            value={formData.consistenciaDasFezes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Percepção de Defecação das Fezes"
            name="percepcaoDefeccaoFezes"
            value={formData.percepcaoDefeccaoFezes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Cronologia em Relação às Refeições"
            name="cronologiaEmRelacaoRefeicoes"
            value={formData.cronologiaEmRelacaoRefeicoes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sintomas Associados"
            name="sintomasAssociados"
            value={formData.sintomasAssociados}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência - Sólido"
            name="incontinencia_solido"
            value={formData.incontinencia_solido}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência - Líquido"
            name="incontinencia_liquido"
            value={formData.incontinencia_liquido}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência - Gases"
            name="incontinencia_gases"
            value={formData.incontinencia_gases}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência - Fraldas"
            name="incontinencia_fraldas"
            value={formData.incontinencia_fraldas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Incontinência - Estilo de Vida"
            name="incontinencia_estiloDeVida"
            value={formData.incontinencia_estiloDeVida}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Bristol"
            name="bristol"
            value={formData.bristol}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Atividade Sexual"
            name="atividadeSexual"
            value={formData.atividadeSexual}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Grau de Satisfação"
            name="grauSatisfacao"
            value={formData.grauSatisfacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Frequência de Coito"
            name="frequenciaCoito"
            value={formData.frequenciaCoito}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Desejo"
            name="desejo"
            value={formData.desejo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Excitação"
            name="excitacao"
            value={formData.excitacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Orgasmo"
            name="orgasmo"
            value={formData.orgasmo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Dispareunia"
            name="dispareunia"
            value={formData.dispareunia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Relacionamento com o Parceiro"
            name="relacionamentoComParceiro"
            value={formData.relacionamentoComParceiro}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Histórico de Abuso"
            name="historicoAbuso"
            value={formData.historicoAbuso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Outros Sintomas (OBS)"
            name="outrosSintomasOBS"
            value={formData.outrosSintomasOBS}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">10. DOR</h2>
          
          <TextField
            label="Dor Pélvica Crônica"
            name="dorPelvicaCronica"
            value={formData.dorPelvicaCronica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sintomas de Dor"
            name="sintomasDor"
            value={formData.sintomasDor}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Horário de Agragvamento"
            name="horarioAgragvamento"
            value={formData.horarioAgragvamento}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exames Complementares - Dor"
            name="examesComplementaresDor"
            value={formData.examesComplementaresDor}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">11. EXAMES COMPLEMENTARES EM UROLOGIA/UROGINECOLOGIA</h2>

          <TextField
            label="Diagnóstico dos Exames Complementares"
            name="diagnosticoExamesComple"
            value={formData.diagnosticoExamesComple}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urodinâmico"
            name="urodinamico"
            value={formData.urodinamico}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urodinâmico - Considerações"
            name="urodinamicoConsideracoes"
            value={formData.urodinamicoConsideracoes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urodinâmico - Considerações (Data)"
            name="urodinamicoConsideracoesData"
            value={formData.urodinamicoConsideracoesData}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urodinâmico - Cistoscopia"
            name="urodinamicoCistoscopia"
            value={formData.urodinamicoCistoscopia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Urodinâmico - Cistoscopia (Data)"
            name="urodinamicoCistoscopiaData"
            value={formData.urodinamicoCistoscopiaData}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Outros Exames de Urologia"
            name="outrosExamesUrologia"
            value={formData.outrosExamesUrologia}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">12.EXAMES COMPLEMENTARES EM PROCTOLOGIA</h2>

          <TextField
            label="Manometria Anorretal"
            name="manometriaAnorretal"
            value={formData.manometriaAnorretal}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Manometria Anorretal - Considerações"
            name="manometriaAnorretalConsideracoes"
            value={formData.manometriaAnorretalConsideracoes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Manometria Anorretal (Data)"
            name="manometriaAnorretalData"
            value={formData.manometriaAnorretalData}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Outros Exames de Proctologia"
            name="outrosExamesProctologia"
            value={formData.outrosExamesProctologia}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">EXAMES FÍSICOS</h2>
          
          <TextField
            label="Exame Físico - Esclarecimento"
            name="exameFisicoEsclarecimento"
            value={formData.exameFisicoEsclarecimento}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico - Autorização"
            name="exameFisicoAutorizacao"
            value={formData.exameFisicoAutorizacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - PA"
            name="exameFisicoGeralPA"
            value={formData.exameFisicoGeralPA}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - Estatura"
            name="exameFisicoGeralEstatura"
            value={formData.exameFisicoGeralEstatura}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - FC"
            name="exameFisicoGeralFC"
            value={formData.exameFisicoGeralFC}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - Peso"
            name="exameFisicoGeralPeso"
            value={formData.exameFisicoGeralPeso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - FR"
            name="exameFisicoGeralFR"
            value={formData.exameFisicoGeralFR}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico Geral - IMC"
            name="exameFisicoGeralIMC"
            value={formData.exameFisicoGeralIMC}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico - Respiratório"
            name="exameFisicoRespiratorio"
            value={formData.exameFisicoRespiratorio}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico - Abdômen"
            name="exameFisicoAbdomem"
            value={formData.exameFisicoAbdomem}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">AVALIAÇÃO FUNCIONAL DO ASSOALHO PÉLVICO:</h2>

          <TextField
            label="Exame Físico - Períneo"
            name="exameFisicoPerineo"
            value={formData.exameFisicoPerineo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame Físico - Ânus"
            name="exameFisicoAnus"
            value={formData.exameFisicoAnus}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Prolapso Vaginal - Anterior"
            name="prolapsoVaginalAnterior"
            value={formData.prolapsoVaginalAnterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Prolapso Vaginal - Posterior"
            name="prolapsoVaginalPosterior"
            value={formData.prolapsoVaginalPosterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Prolapso Vaginal ou Uterino"
            name="prolapsoVaginalOuUterino"
            value={formData.prolapsoVaginalOuUterino}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exame da Sensibilidade"
            name="exameDaSensibilidade"
            value={formData.exameDaSensibilidade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Reflexo Citoriano"
            name="reflexoCitoriano"
            value={formData.reflexoCitoriano}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Reflexo Anocutâneo"
            name="reflexoAnocutaneo"
            value={formData.reflexoAnocutaneo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Reflexos Perineais"
            name="reflexosPerineais"
            value={formData.reflexosPerineais}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Mocimento Interno do Períneo"
            name="mocimentoInternoPerineo"
            value={formData.mocimentoInternoPerineo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Reflexo Contrátil (Tosse)"
            name="reflexoContratilTosse"
            value={formData.reflexoContratilTosse}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Estimativa MAP"
            name="estimativaMAP"
            value={formData.estimativaMAP}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Escala Oxford Modificada (Grau)"
            name="escalaOxfordModificadaGrau"
            value={formData.escalaOxfordModificadaGrau}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Escala ICS"
            name="escalaICS"
            value={formData.escalaICS}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Coativação"
            name="coativacao"
            value={formData.coativacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Relaxamento"
            name="relaxamento"
            value={formData.relaxamento}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Endurance"
            name="endurance"
            value={formData.endurance}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Contrações Rápidas"
            name="contracoesRapidas"
            value={formData.contracoesRapidas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Palpitação Dolorosa"
            name="palpitacaoDolorosa"
            value={formData.palpitacaoDolorosa}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Local de Palpitação Dolorosa"
            name="palpitacaoDolorosaLocalAchado"
            value={formData.palpitacaoDolorosaLocalAchado}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tônus Vaginal"
            name="tonusVaginal"
            value={formData.tonusVaginal}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Outros Testes"
            name="outrosTestes"
            value={formData.outrosTestes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Diastase Abdominal"
            name="diastaseAbdominal"
            value={formData.diastaseAbdominal}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Pad Test 1"
            name="padTest1"
            value={formData.padTest1}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Pad Test 2"
            name="padTest2"
            value={formData.padTest2}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Pad Test 3"
            name="padTest3"
            value={formData.padTest3}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Diagnóstico Fisioterapêutico"
            name="diagnosticoFisioterapeutico"
            value={formData.diagnosticoFisioterapeutico}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Avaliação Postural - Vista Lateral D"
            name="avaliacaoPosturalVistaLateralD"
            value={formData.avaliacaoPosturalVistaLateralD}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Avaliação Postural - Vista Lateral E"
            name="avaliacaoPosturalVistaLateralE"
            value={formData.avaliacaoPosturalVistaLateralE}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Avaliação Postural - Vista Anterior"
            name="avaliacaoPosturalVistaAnterior"
            value={formData.avaliacaoPosturalVistaAnterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Avaliação Postural - Vista Posterior"
            name="avaliacaoPosturalVistaPosterior"
            value={formData.avaliacaoPosturalVistaPosterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Marcha Antálgica"
            name="marchaAntalgica"
            value={formData.marchaAntalgica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Observações da Marcha Antálgica"
            name="marchaAntalgicaObs"
            value={formData.marchaAntalgicaObs}
            onChange={handleChange}
            fullWidth
          />
          <div className="flex justify-start gap-4 items-center">
              <Button type="submit" variant="contained" color="primary" sx={{width: 'auto'}}>
                Salvar Alterações
              </Button>
              <Button onClick={()=> navigate(-1)} variant="contained" color="primary" sx={{width: 'auto', backgroundColor: "#F44250"}}>
                Cancelar
              </Button>
            </div>
        </Stack>
      </form>
    </Box>
        </section>
    )
}