'use client'

import { Alert, Box, Button, Snackbar, SnackbarCloseReason, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { InterfacePatient, InterfaceDocFichaRPG, InterfaceEvolucao } from "../../../patient_docs_page/interfaces/docsInterface"
import { useNavigate } from "react-router"

interface InterfaceFormFichaRpg {
    patient:InterfacePatient
}

export default function FormFichaRpg({patient}:InterfaceFormFichaRpg){
    const patientDoc = patient.doc_rpg
    const navigate = useNavigate()

    const [formData, setFormData] = useState<InterfaceDocFichaRPG>(patientDoc);

  const handleArrayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(',').map((item) => item.trim())
    }));
  };

  const handleEvolutionChange = (
    index: number,
    field: keyof InterfaceEvolucao,
    value: string
  ) => {
    const newEvolucao = [...formData.evolução];
    newEvolucao[index] = { ...newEvolucao[index], [field]: value };
    setFormData((prev) => ({ ...prev, evolução: newEvolucao }));
  };

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
      <Box sx={{ maxWidth: '800px', margin: 'auto', p: 2 }}>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
        <h1 className="text-xl font-bold text-paraizo-whiteLines bg-paraizo-cyan p-4 mb-4 w-full rounded-md">Edite as informações da Ficha de Avaliação - RPG</h1>
        <form onSubmit={handleSubmit}>
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Anamnese</h2>
          <Stack spacing={2}>
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
              label="Diagnóstico"
              name="diagnostico"
              value={formData.diagnostico}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Patologias Associadas"
              name="patologias_associadas"
              value={formData.patologias_associadas}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Queixa Principal"
              name="queixa_principal"
              value={formData.queixa_principal}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Etiologia"
              name="etiologia"
              value={formData.etiologia}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Sinais"
              name="sinais"
              value={formData.sinais}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Sintomas"
              name="sintomas"
              value={formData.sintomas}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Observações"
              name="obs"
              value={formData.obs}
              onChange={handleChange}
              fullWidth
            />

            {/* Campos de tempo */}
            <Stack direction="row" spacing={2}>
              <TextField
                label="Início"
                name="inicio"
                value={formData.inicio}
                onChange={handleChange}
                fullWidth
              />
              
              <TextField
                label="Melhora"
                name="melhora"
                value={formData.melhora}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="Piora"
                name="piora"
                value={formData.piora}
                onChange={handleChange}
                fullWidth
              />
            </Stack>


        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Exame Físico</h2>
            <TextField
              label="Cadeira Anterior"
              name="cadeira_anterior"
              value={formData.cadeira_anterior}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Cadeira Posterior"
              name="cadeira_posterior"
              value={formData.cadeira_posterior}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Conduta Cadeira Anterior"
              name="conduta_cadeira_anterior"
              value={formData.conduta_cadeira_anterior}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Conduta Cadeira Posterior"
              name="conduta_cadeira_posterior"
              value={formData.conduta_cadeira_posterior}
              onChange={handleChange}
              fullWidth
            />

            {/* Outros campos */}
            <TextField
              label="Alongamentos"
              name="alongamentos"
              value={formData.alongamentos}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Tração"
              name="tracao"
              value={formData.tracao}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Pompagem"
              name="pompagem"
              value={formData.pompagem}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="LB/Digito-COMP"
              name="lb_digito_comp"
              value={formData.lb_digito_comp}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Consciência Corporal"
              name="consciencia_corporal"
              value={formData.consciencia_corporal}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Adams Gibosidades"
              name="adams_gibosidades"
              value={formData.adams_gibosidades}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Adams Zonas Planas"
              name="adams_zonasPlanas"
              value={formData.adams_zonasPlanas}
              onChange={handleChange}
              fullWidth
            />

            {/* Campos numéricos */}
            <Stack direction="row" spacing={2}>
              <TextField
                label="CA"
                name="ca"
                type="number"
                value={formData.ca}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                label="CP"
                name="cp"
                type="number"
                value={formData.cp}
                onChange={handleChange}
                fullWidth
              />
            </Stack>

            <TextField
              label="Escoliose"
              name="escoliose"
              value={formData.escoliose}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Avaliador"
              name="avaliador"
              value={formData.avaliador}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Crefito"
              name="crefito"
              value={formData.crefito}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Data"
              name="data"
              value={formData.data}
              onChange={handleChange}
              fullWidth
            />

            {/* Seção Evolução */}
        <h2 className="text-lg text-paraizo-whiteLines bg-paraizo-cyan p-2 mb-2 w-full rounded-md">Evolução</h2>
            {formData.evolução.map((evo, index) => (
              <Stack key={index} spacing={2}>
                <TextField
                  label="S:"
                  name={`evolucao_${index}_s`}
                  value={evo.s}
                  onChange={(e) => handleEvolutionChange(index, 's', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Data:"
                  name={`evolucao_${index}_data`}
                  value={evo.data}
                  onChange={(e) => handleEvolutionChange(index, 'data', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Estado:"
                  name={`evolucao_${index}_estado`}
                  value={evo.estado}
                  onChange={(e) => handleEvolutionChange(index, 'estado', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Conduta:"
                  name={`evolucao_${index}_conduta`}
                  value={evo.conduta}
                  onChange={(e) => handleEvolutionChange(index, 'conduta', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="EVA i/f:"
                  name={`evolucao_${index}_eva_if`}
                  value={evo.eva_if}
                  onChange={(e) => handleEvolutionChange(index, 'eva_if', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Intercorrências:"
                  name={`evolucao_${index}_intercorrências`}
                  value={evo.intercorrências}
                  onChange={(e) => handleEvolutionChange(index, 'intercorrências', e.target.value)}
                  fullWidth
                />
                <TextField
                  label="Ass:"
                  name={`evolucao_${index}_ass`}
                  value={evo.ass}
                  onChange={(e) => handleEvolutionChange(index, 'ass', e.target.value)}
                  fullWidth
                />
              </Stack>
            ))}

            {/* Botão de submissão */}
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
    </div>
  );
}