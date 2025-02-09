interface InterfaceEvolucao {
    s: string,
    data: string,
    estado: string,
    conduta: string,
    eva_if: string,
    intercorrências: string,
    ass: string,
}

interface InterfaceInfosPatientDoc {
    endereco: string,
    profissao: string,
    diagnostico: string,
    patologias_associadas: string,
    queixa_principal: string,
    etiologia: string,
    sinais: string,
    sintomas: string,
    obs: string,
    inicio: string,
    melhora: string,
    piora: string,
    cadeira_anterior: Array<string>,
    cadeira_posterior: Array<string>,
    alongamentos: string,
    tracao: string,
    pompagem: Boolean,
    lb_digito_comp: Boolean,
    conduta_cadeira_anterior: Array<string>,
    conduta_cadeira_posterior: Array<string>,
    consciencia_corporal: string,
    adams_gibosidades: string,
    adams_zonasPlanas: string,
    ca: Number,
    cp: Number,
    escoliose: string,
    avaliador: string,
    crefito: string,
    data: string,
    evolução: Array<InterfaceEvolucao>
}

export default InterfaceInfosPatientDoc 