'use client'

import { Alert, Box, Button, Snackbar, SnackbarCloseReason, Stack, TextField, Typography } from "@mui/material"
import { InterfacePatient, InterfaceDocFichaPilates } from "../../../patient_docs_page/interfaces/docsInterface"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router"

interface InterfaceFormFichaRpg {
    patient:InterfacePatient
}

export default function FormFichaPilates({patient}:InterfaceFormFichaRpg){
    const patientDoc = patient.doc_pilates
    const [formData, setFormData] = useState<InterfaceDocFichaPilates>(patientDoc);
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
        <h1 className="text-xl font-bold text-paraizo-whiteLines bg-paraizo-cyan p-4 mb-4 w-full rounded-md">Edite as informações da Ficha de Avaliação Pilates</h1>
        <Box sx={{ maxWidth: '800px', margin: 'auto', p: 2 }}>
        <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit}>
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">DADOS PESSOAIS</h2>
        <Stack spacing={2}>
          <TextField
            label="Idade"
            name="idade"
            type="number"
            value={formData.idade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sexo"
            name="sexo"
            value={formData.sexo}
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
            label="Telefone Residencial"
            name="teleResidencial"
            value={formData.teleResidencial}
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
            label="Profissão"
            name="profissao"
            value={formData.profissao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Patrick Fabere"
            name="patrickFabere"
            value={formData.patrickFabere}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Celular"
            name="celular"
            value={formData.celular}
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
            label="Queixas Principais"
            name="queixasPrincipais"
            value={formData.queixasPrincipais}
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
          <TextField
            label="Medicações"
            name="medicacoes"
            value={formData.medicacoes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Medicações - Quais"
            name="medicacoesQuais"
            value={formData.medicacoesQuais}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Diagnóstico Fisioterapeuta"
            name="diagnosticoFisioterapeuta"
            value={formData.diagnosticoFisioterapeuta}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Possui Exames Complementares"
            name="possuiExamesComplementares"
            value={formData.possuiExamesComplementares}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Exames Complementares - Quais"
            name="examesComplementaresQuais"
            value={formData.examesComplementaresQuais}
            onChange={handleChange}
            fullWidth
          />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">ANAMNESE</h2>

          <TextField
            label="Tratamentos Adotados"
            name="tratamentosAdotados"
            value={formData.tratamentosAdotados}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="PA"
            name="pa"
            value={formData.pa}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Peso"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Altura"
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="IMC"
            name="imc"
            value={formData.imc}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="RCQ"
            name="rcq"
            value={formData.rcq}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tabagista"
            name="tabagista"
            value={formData.tabagista}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Diabetes"
            name="diabetes"
            value={formData.diabetes}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Etilista"
            name="etilista"
            value={formData.etilista}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="AVC"
            name="avc"
            value={formData.avc}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Hipertensão"
            name="hipertensao"
            value={formData.hipertensao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Cardiopatia"
            name="cardiopatia"
            value={formData.cardiopatia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tireoide"
            name="tireoide"
            value={formData.tireoide}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Labirintite"
            name="labirintite"
            value={formData.labirintite}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Pratica Atividade Física"
            name="praticaAtividadeFisica"
            value={formData.praticaAtividadeFisica}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Problema Ósseo"
            name="problemaOsseo"
            value={formData.problemaOsseo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Fez Cirurgia"
            name="fezCirurgia"
            value={formData.fezCirurgia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Toma Medicamento"
            name="tomaMedicamento"
            value={formData.tomaMedicamento}
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
            label="Objetivos Pilates"
            name="objetivosPilates"
            value={formData.objetivosPilates}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Acahdos Fisioterapêuticos"
            name="acahdosFisioterapeuticos"
            value={formData.acahdosFisioterapeuticos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Obs - Capacidade Cardiovascular"
            name="obs_capacidadeCardiovascular"
            value={formData.obs_capacidadeCardiovascular}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Obs - Coordenação Motora"
            name="obs_coordenacaoMotora"
            value={formData.obs_coordenacaoMotora}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Obs - Equilíbrio"
            name="obs_equilibrio"
            value={formData.obs_equilibrio}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Obs - Força"
            name="obs_forca"
            value={formData.obs_forca}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Obs - Flexibilidade"
            name="obs_flexibilidade"
            value={formData.obs_flexibilidade}
            onChange={handleChange}
            fullWidth
          />
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">TRATAMENTO CLÍNICO</h2>

          <TextField
            label="Tratamento Medicamentoso"
            name="tratamento_medicamentoso"
            value={formData.tratamento_medicamentoso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tratamento de Imobilização"
            name="tratamento_imobilizacao"
            value={formData.tratamento_imobilizacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tratamento Cirúrgico"
            name="tratamento_cirurgico"
            value={formData.tratamento_cirurgico}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tratamento Outros"
            name="tratamento_outros"
            value={formData.tratamento_outros}
            onChange={handleChange}
            fullWidth
          />
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">AVALIAÇÃO DA DOR </h2>

          <TextField
            label="História da Dor"
            name="historiaDaDor"
            value={formData.historiaDaDor}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Frequência"
            name="frequencia"
            value={formData.frequencia}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Intensidade"
            name="intensidade"
            value={formData.intensidade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Grau da Dor"
            name="grauDaDor"
            value={formData.grauDaDor}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tipo da Dor"
            name="tipoDaDor"
            value={formData.tipoDaDor}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Cansada"
            name="cansada"
            value={formData.cansada}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Fatores que Agravam a Dor"
            name="fatoresAgravamADor"
            value={formData.fatoresAgravamADor}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Fatores que Diminuem a Dor"
            name="fatoresDiminuemADor"
            value={formData.fatoresDiminuemADor}
            onChange={handleChange}
            fullWidth
          />
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Exames Complementares</h2>

          <TextField
            label="Exames Complementares"
            name="examesComplementares"
            value={formData.examesComplementares}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Laudos"
            name="laudos"
            value={formData.laudos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Arco Doloroso"
            name="arcoDoloroso"
            value={formData.arcoDoloroso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Bíceps Braquial"
            name="bicepsBraquial"
            value={formData.bicepsBraquial}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Impacto"
            name="impacto"
            value={formData.impacto}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Supraespinhoso"
            name="supraEspinhoso"
            value={formData.supraEspinhoso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Instabilidade"
            name="instabilidade"
            value={formData.instabilidade}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Jobe Supraespinhoso"
            name="jobeSupraEspinhoso"
            value={formData.jobeSupraEspinhoso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Speed CLB"
            name="speedCLB"
            value={formData.speedCLB}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Queda de Braço Espinhoso"
            name="quedaDeBracoEspinhoso"
            value={formData.quedaDeBracoEspinhoso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Patte Infraespinhoso"
            name="patteInfraEspinhoso"
            value={formData.patteInfraEspinhoso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gerber Subescapular"
            name="gerberSubescapular"
            value={formData.gerberSubescapular}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Manobra Adson"
            name="manobraAdson"
            value={formData.manobraAdson}
            onChange={handleChange}
            fullWidth
          />
      <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Testes Especiais Membros:</h2>
      
          <TextField
            label="Teste Allen"
            name="testeAllen"
            value={formData.testeAllen}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Teste Roos"
            name="testeRoos"
            value={formData.testeRoos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="AlleM"
            name="allem"
            value={formData.allem}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Filkelntein"
            name="filkelntein"
            value={formData.filkelntein}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phalen"
            name="phalen"
            value={formData.phalen}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phalen Reverso"
            name="phalenReverso"
            value={formData.phalenReverso}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sinal Tinel"
            name="sinalTinel"
            value={formData.sinalTinel}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Instabilidade do Cotovelo"
            name="instabilidadeCotovelo"
            value={formData.instabilidadeCotovelo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Ligamentar"
            name="ligamentar"
            value={formData.ligamentar}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Estresse Valgo Varo"
            name="estresseValgoVaro"
            value={formData.estresseValgoVaro}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Tinel Preensão Pinca"
            name="tinelPreensaoPinca"
            value={formData.tinelPreensaoPinca}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Flexão do Cotovelo"
            name="flexaoCotovelo"
            value={formData.flexaoCotovelo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Síndrome do Pronador Redondo"
            name="sindromePronadorRedondo"
            value={formData.sindromePronadorRedondo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Epicondilite Medial"
            name="epicondiliteMedial"
            value={formData.epicondiliteMedial}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Epicondilite Lateral"
            name="epicondiliteLateral"
            value={formData.epicondiliteLateral}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Ely"
            name="ely"
            value={formData.ely}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Aptrick Fabere"
            name="aptrickFabere"
            value={formData.aptrickFabere}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Teste Piriforme"
            name="testePiriforme"
            value={formData.testePiriforme}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Trendelenburg"
            name="trendelenburg"
            value={formData.trendelenburg}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Ober"
            name="ober"
            value={formData.ober}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Thomas"
            name="thomas"
            value={formData.thomas}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Elevação da Perna"
            name="elevacaoPerna"
            value={formData.elevacaoPerna}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Instabilidade dos Joelhos"
            name="instabilidadeJoelhos"
            value={formData.instabilidadeJoelhos}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gaveta Anterior"
            name="gavetaAnterior"
            value={formData.gavetaAnterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gaveta Posterior"
            name="gavetaPosterior"
            value={formData.gavetaPosterior}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Stress Valgo"
            name="stressValgo"
            value={formData.stressValgo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Stress Varo"
            name="stressVaro"
            value={formData.stressVaro}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Apley Decoaptacao"
            name="apleyDecoaptacao"
            value={formData.apleyDecoaptacao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Lesão Meniscal"
            name="lesaoMeniscal"
            value={formData.lesaoMeniscal}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Apley Compreensão"
            name="apleyCompreenssao"
            value={formData.apleyCompreenssao}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="McMurray"
            name="mcMurray"
            value={formData.mcMurray}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Derrame Articular"
            name="derrameArticular"
            value={formData.derrameArticular}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gavera Anterior (PE)"
            name="gaveraAnteriorPe"
            value={formData.gaveraAnteriorPe}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Gavera Posterior (PE)"
            name="gaveraPosteriorPe"
            value={formData.gaveraPosteriorPe}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Stress Valgo (PE)"
            name="stressValgoPe"
            value={formData.stressValgoPe}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Stress Varo (PE)"
            name="stressVaroPe"
            value={formData.stressVaroPe}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Sinais Homans"
            name="sinaisHomans"
            value={formData.sinaisHomans}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Thompson"
            name="thompson"
            value={formData.thompson}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Inspeções/Palpação - Obs"
            name="inspecoesPalpacaoObs"
            value={formData.inspecoesPalpacaoObs}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Marcha"
            name="marcha"
            value={formData.marcha}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Conduta"
            name="conduta"
            value={formData.conduta}
            onChange={handleChange}
            fullWidth
          />
          <div className="flex justify-start gap-4 items-center">
                <Button type="submit" variant="contained" color="primary" sx={{width: 'auto'}}>
                    Salvar Alterações
                </Button>
                <Button onClick={()=> navigate(-1)} type="submit" variant="contained" color="primary" sx={{width: 'auto', backgroundColor: "#F44250"}}>
                    Cancelar
                </Button>
            </div>
        </Stack>
      </form>
    </Box>
        </section>
    )
}