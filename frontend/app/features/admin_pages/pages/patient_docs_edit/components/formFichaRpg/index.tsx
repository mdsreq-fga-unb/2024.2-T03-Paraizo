'use client'

import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"
import { InterfacePatient, InterfaceDocFichaRPG, InterfaceEvolucao } from "../../../patient_docs_page/interfaces/docsInterface"

interface InterfaceFormFichaRpg {
    patient:InterfacePatient
}

export default function FormFichaRpg({patient}:InterfaceFormFichaRpg){
    const patientDoc = patient.doc_rpg

    const [formData, setFormData] = useState<InterfaceDocFichaRPG>(patientDoc);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Para campos numéricos, se necessário, converta o valor
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Para campos que são arrays (entrada como valores separados por vírgula)
  const handleArrayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(',').map((item) => item.trim())
    }));
  };

  // Manipulador para atualizar um registro de evolução
  const handleEvolutionChange = (
    index: number,
    field: keyof InterfaceEvolucao,
    value: string
  ) => {
    const newEvolucao = [...formData.evolução];
    newEvolucao[index] = { ...newEvolucao[index], [field]: value };
    setFormData((prev) => ({ ...prev, evolução: newEvolucao }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados atualizados:', formData);
    // Chamada à API para atualização dos dados
  };

  return (
    <div className="max-h-[800px] overflow-y-auto md:bg-white md:w-full mx-4 md:mx-12 md:p-4 md:my-20 xl:mx-32">
      <Box sx={{ maxWidth: '800px', margin: 'auto', p: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Editar Ficha de Avaliação e Tratamento - RPG
        </Typography>
        <form onSubmit={handleSubmit}>
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

            {/* Campos para arrays */}
            <TextField
              label="Cadeira Anterior (separado por vírgula)"
              name="cadeira_anterior"
              value={formData.cadeira_anterior.join(', ')}
              onChange={handleArrayChange}
              fullWidth
            />
            <TextField
              label="Cadeira Posterior (separado por vírgula)"
              name="cadeira_posterior"
              value={formData.cadeira_posterior.join(', ')}
              onChange={handleArrayChange}
              fullWidth
            />
            <TextField
              label="Conduta Cadeira Anterior (separado por vírgula)"
              name="conduta_cadeira_anterior"
              value={formData.conduta_cadeira_anterior.join(', ')}
              onChange={handleArrayChange}
              fullWidth
            />
            <TextField
              label="Conduta Cadeira Posterior (separado por vírgula)"
              name="conduta_cadeira_posterior"
              value={formData.conduta_cadeira_posterior.join(', ')}
              onChange={handleArrayChange}
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
            <Typography variant="h6">Evolução</Typography>
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
            <Button type="submit" variant="contained" color="primary">
              Salvar Alterações
            </Button>
          </Stack>
        </form>
      </Box>
    </div>
  );
}