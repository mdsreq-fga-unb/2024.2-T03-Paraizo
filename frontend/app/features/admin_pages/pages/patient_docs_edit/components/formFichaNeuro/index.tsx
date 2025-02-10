'use client'

import { Alert, Box, Button, Snackbar, SnackbarCloseReason, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { InterfacePatient, InterfaceDocFichaNeuro } from "../../../patient_docs_page/interfaces/docsInterface";
import { useNavigate } from "react-router";

interface InterfaceFormFichaRpg {
    patient:InterfacePatient
}

export default function FormFichaNeuro({patient}:InterfaceFormFichaRpg){
    const patientDoc = patient.doc_neuro
    const [formData, setFormData] = useState<InterfaceDocFichaNeuro>(patientDoc);
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

  return (
    <div className="max-h-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
        <h1 className="text-xl font-bold text-paraizo-whiteLines bg-paraizo-cyan p-4 mb-4 w-full rounded-md">Edite as informações da Ficha de Avaliação Neurológica</h1>
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
                label="Estado Civil"
                name="estadoCivil"
                value={formData.estadoCivil}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Data de Avaliação"
                name="dataAvaliacao"
                value={formData.dataAvaliacao}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Convênio/Particular"
                name="convenioParticular"
                value={formData.convenioParticular}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Carteirinha"
                name="carteirinha"
                value={formData.carteirinha}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="CPF"
                name="cpf"
                value={formData.cpf}
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
                label="Idade"
                name="idade"
                type="number"
                value={formData.idade}
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
                label="Telefone Residencial"
                name="telResidencial"
                value={formData.telResidencial}
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
                label="Profissão"
                name="profissao"
                value={formData.profissao}
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
                label="Faz Uso de Medicamentos"
                name="fazUsoMedicaoces"
                value={formData.fazUsoMedicaoces}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Medicamentos Utilizados (Quais)"
                name="fazUsoMedicaocesQuais"
                value={formData.fazUsoMedicaocesQuais}
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
                label="Exames Complementares (Quais)"
                name="possuiExamesComplementaresQuais"
                value={formData.possuiExamesComplementaresQuais}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Tratamentos Adotados pelo Fisioterapeuta"
                name="tratamentosAdotadosPeloFisioterapeuta"
                value={formData.tratamentosAdotadosPeloFisioterapeuta}
                onChange={handleChange}
                fullWidth
            />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">ANAMNESE</h2>
            
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
                label="Histórico Familiar"
                name="historicoFamiliar"
                value={formData.historicoFamiliar}
                onChange={handleChange}
                fullWidth
            />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">HISTÓRIA DA DOENÇA</h2>

            <TextField
                label="Data da Lesão"
                name="dataLesao"
                value={formData.dataLesao}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Internação"
                name="internacao"
                value={formData.internacao}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Hospital de Atendimento"
                name="hospitalDeAtendimento"
                value={formData.hospitalDeAtendimento}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="UTI"
                name="uti"
                value={formData.uti}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Traqueostopia"
                name="traqueostopia"
                value={formData.traqueostopia}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Banho"
                name="dependentePara_banho"
                value={formData.dependentePara_banho}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Vestir"
                name="dependentePara_vestir"
                value={formData.dependentePara_vestir}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Alimentar"
                name="dependentePara_alimentar"
                value={formData.dependentePara_alimentar}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Bexiga"
                name="dependentePara_bexiga"
                value={formData.dependentePara_bexiga}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Intestino"
                name="dependentePara_intestino"
                value={formData.dependentePara_intestino}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Pinça Grossa"
                name="dependentePara_pincaGrossa"
                value={formData.dependentePara_pincaGrossa}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Subir Escada"
                name="dependentePara_subirEscada"
                value={formData.dependentePara_subirEscada}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Locomoção"
                name="dependentePara_locomocao"
                value={formData.dependentePara_locomocao}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Dependente para Pinça Fina"
                name="dependentePara_pincaFina"
                value={formData.dependentePara_pincaFina}
                onChange={handleChange}
                fullWidth
            />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">TESTE SENSORIAL:</h2>
            <TextField
                label="Calor"
                name="calor"
                value={formData.calor}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Frio"
                name="frio"
                value={formData.frio}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Pressão"
                name="pressao"
                value={formData.pressao}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Distância Entre Dois Pontos"
                name="distanciaEntreDoisPontos"
                value={formData.distanciaEntreDoisPontos}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Grafestesia"
                name="grafestesia"
                value={formData.grafestesia}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Reflexos"
                name="reflexos"
                value={formData.reflexos}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Palpetação"
                name="palatear"
                value={formData.palatear}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="No Queixo"
                name="noQueixo"
                value={formData.noQueixo}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="No Antebraço"
                name="noAntebraco"
                value={formData.noAntebraco}
                onChange={handleChange}
                fullWidth
            />
            <TextField
                label="Achados Fisioterapêuticos"
                name="achadosFisioterapeuticos"
                value={formData.achadosFisioterapeuticos}
                onChange={handleChange}
                fullWidth
            />
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">EVOLUÇÃO:</h2>
            <TextField
                label="Evolução"
                name="evolucao"
                value={formData.evolucao}
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
    </div>
  );
}
