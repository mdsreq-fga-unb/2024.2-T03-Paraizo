export interface InterfaceInfos {
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
    cadeira_anterior: string[],
    cadeira_posterior: ['',''],
    alongamentos: string,
    tracao: string,
    pompagem: true,
    lb_digito_comp: true,
    conduta_cadeira_anterior:  string[],
    conduta_cadeira_posterior:  string[],
    consciencia_corporal: string,
    adams_gibosidades: string,
    adams_zonasPlanas: string,
    ca: Number,
    cp: Number,
    escoliose: string,
    avaliador: string,
    drefito: string,
    data: string,
    evolução: [
        {
            s: string,
            data: string,
            estado: string,
            conduta: string,
            eva_if: string,
            intercorrências: string,
            ass: string
        }
    ]
}

export interface InterfaceDocs {
    id: Number,
    type: string,
    infos: InterfaceInfos,
}

export interface InterfaceDocsCard {
    id: Number,
    idDocs: Number,
    name: string,
    dateDocs: string,
    typeDocs: string,
}