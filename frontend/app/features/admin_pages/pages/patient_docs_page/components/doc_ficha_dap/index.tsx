import { Alert, Button } from "@mui/material";
import CardText from "../cardText";
import { InterfacePatient } from "../../interfaces/docsInterface";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NotFoundDoc from "../notFoundDoc";

interface InterfaceDocFichaDAPComponent {
    patient: InterfacePatient
}

export default function DocFichaDap({patient}:InterfaceDocFichaDAPComponent){
    const patientDoc = patient.doc_dap
    const navigate = useNavigate()

    const [docStatus, setDocStatus] = useState<boolean|undefined>()
                useEffect(()=> {
                    if(patientDoc.profissao === '' && patientDoc.estadoCivil === '' && patientDoc.escolaridade === '')
                        setDocStatus(false)
                }, [])
    return <>
    <section>
        {
            docStatus ? <section>

                <div className="bg-paraizo-cyan h-14 rounded-md flex justify-between items-center px-4">
                    <h1 className="text-paraizo-whiteLines text-xl font-bold">FICHA DE AVALIAÇÃO UROGINECOLÓGICA</h1>
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
                        <h1 className="text-black w-full">Dados gerais:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Data:" texto={patientDoc.data} />

                <CardText tag="Nome:" texto={patient.name} />
                <CardText tag="Idade:" texto={patientDoc.idade.toString()} />
                <CardText tag="Nome:" texto={patient.birthDate} />
                <CardText tag="Estado Civil:" texto={patientDoc.estadoCivil} />
                <CardText tag="Profissão:" texto={patientDoc.profissao} />
                <CardText tag="Endereço:" texto={patientDoc.endereco} />
                <CardText tag="Escolaridade:" texto={patientDoc.escolaridade} />
                <CardText tag="Telefones:" texto={patientDoc.telefones} />
                <CardText tag="Clínica/Médico Solicitante:" texto={patientDoc.clinicaMedicoSolicitante} />
                <CardText tag="Nº SUS:" texto={patientDoc.nSus} />
                <CardText tag="Diagnóstico Médico:" texto={patientDoc.diagnosticoMedico} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">1. ANTECEDENTES GINECOLÓGICOS:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Aluno:" texto={patientDoc.aluno} />
                <CardText tag="Estado Reprodutivo:" texto={patientDoc.estadoReprodutivo} />
                <CardText tag="Menarca:" texto={patientDoc.menarca} />
                <CardText tag="DUM:" texto={patientDoc.dum} />
                <CardText tag="TH:" texto={patientDoc.th} />
                <CardText tag="Tempo:" texto={patientDoc.tempo} />
                <CardText tag="Ciclos Menstruais:" texto={patientDoc.ciclosMenstruais} />
                <CardText tag="Intervalo:" texto={patientDoc.intervalo} />
                <CardText tag="Duração:" texto={patientDoc.duracao} />
                <CardText tag="Quantidade:" texto={patientDoc.quantidade} />
                <CardText tag="Sintomas Menstruais:" texto={patientDoc.sintomasMenstruais} />
                <CardText tag="Dismenoréia:" texto={patientDoc.dismenoreia} />
                <CardText tag="Medicação?" texto={patientDoc.medicacao} />
                <CardText tag="Uso de Métodos Contraceptivos:" texto={patientDoc.usoDeMetodosContraceptivos} />
                <CardText tag="Uso de Métodos Contraceptivos - Quais?" texto={patientDoc.usoDeMetodosContraceptivosQual} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">2. ANTECEDENTES OBSTÉTRICOS:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="G:" texto={patientDoc.g} />
                <CardText tag="P:" texto={patientDoc.p} />
                <CardText tag="A:" texto={patientDoc.a} />
                <CardText tag="C:" texto={patientDoc.c} />
                <CardText tag="DUP:" texto={patientDoc.dup} />
                <CardText tag="Peso Maior RN:" texto={patientDoc.pesoMaiorRN} />
                <CardText tag="Complicações no Parto:" texto={patientDoc.complicacoesPartoEpisotomia} />
                <CardText tag="Complicações no Parto (Outra):" texto={patientDoc.complicacoesPartoEpisotomiaOutra} />
                <CardText tag="Complicações no Puérpio:" texto={patientDoc.complicacoesPuerpio} />

                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">3. HISTÓRIA DA MOLÉSTIA ATUAL:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Queixa principal, início, duração, evolução, limitações funcionais/ participação social:" texto={patientDoc.queixaPrincipalInicioDuracao} />

                <CardText tag="EVA:" texto={patientDoc.eva} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">4. HÁBITOS DE VIDA E ANTECENDENTES CLÍNICOS E CIRURGICOS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                
                <CardText tag="Antecedentes Familiares:" texto={patientDoc.antecedentesFamiliares} />
                <CardText tag="Antecedentes Pessoais:" texto={patientDoc.antecedentesPessoais} />
                <CardText tag="Medicamentos em Uso:" texto={patientDoc.medicamentosEmUso} />
                
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">5. HÁBITOS DE VIDA</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Ingestão Hídrica:" texto={patientDoc.ingestaoHidrica} />
                <CardText tag="Atividade Física:" texto={patientDoc.atividadeFisica} />
                <CardText tag="Atividade Física - Qual:" texto={patientDoc.atividadeFisicaQual} />
                <CardText tag="Hábitos:" texto={patientDoc.habitos} />
                <CardText tag="Dieta:" texto={patientDoc.dieta} />
                <CardText tag="Intolerância Alimentar:" texto={patientDoc.intoleranciaAlimentares} />

                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">6. SINTOMAS DO TRATO URINÁRIO INFERIOR (TUI)</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Apresenta UI:" texto={patientDoc.apresentaUI} />
                <CardText tag="Essas perdas são:" texto={patientDoc.perdas} />
                <CardText tag="Urgência:" texto={patientDoc.urgencia} />
                <CardText tag="Por quanto tempo consegue retardar a micção:" texto={patientDoc.retardarMiccao} />
                <CardText tag="Frequência Miccional Diária - Estimativa do n° diário:" texto={patientDoc.frequenciaMiccionalDiaria} />
                <CardText tag="Noctúria - Estimativa do n° diário:" texto={patientDoc.nocturia} />
                <CardText tag="Enurese Noturna:" texto={patientDoc.enureseNoturna} />
                <CardText tag="Enurese Noturna - Último episódio:" texto={patientDoc.enureseNoturnaUltimoEpisodio} />
                <CardText tag="Dificuldade para Iniciar Micção:" texto={patientDoc.dificuldadeParaIniciarMiccao} />
                <CardText tag="Sensação de Esvaziamento Incompleto:" texto={patientDoc.sensacaoDeEsvaziamentoIncompleto} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">7. SINTOMAS INTESTINAIS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Necessidade de Esforço para Completar Micção:" texto={patientDoc.necessidadeDeEsforcoParaCompletarMiccao} />
                <CardText tag="Atividades/Situações que Desencadeiam UI:" texto={patientDoc.atividadesSituacoesDesencadeiamUI} />
                <CardText tag="Atividades/Situações que Desencadeiam UI (Outros):" texto={patientDoc.atividadesSituacoesDesencadeiamUIOutros} />
                <CardText tag="Quantidade de Urina Perdida:" texto={patientDoc.quantidadeDeUrinaPerdida} />
                <CardText tag="Inicio ou agravamento após o parto:" texto={patientDoc.inicioAgravamentoAposParto} />
                <CardText tag="Quanto tempo após o parto:" texto={patientDoc.quantoTempoAposParto} />
                <CardText tag="Esvaziamentos Vesicais Sem Desejo (profilaxia):" texto={patientDoc.esvaziamentosVesicalSemDesejo} />
                <CardText tag="Incontinência Urinária Insensível:" texto={patientDoc.incontinenciaurinariaInsensivel} />
                <CardText tag="Uso de Proteção:" texto={patientDoc.usoDeProtecao} />
                <CardText tag="Uso de Proteção - Nº de Trocas:" texto={patientDoc.usoDeProtecaoNDeTrocas} />
                <CardText tag="Uso de Proteção - Tipo:" texto={patientDoc.usoProtecaoTipo} />
                <CardText tag="Uso de Proteção - Trocas:" texto={patientDoc.usoProtecaoTrocas} />
                <CardText tag="ITU:" texto={patientDoc.itu} />
                <CardText tag="ITU - Último Episódio:" texto={patientDoc.ituUltimoEpisodio} />
                <CardText tag="Outros Sintomas/OBS - TUI:" texto={patientDoc.outrosSintomasObsTUI} />

                <CardText tag="Necessidade de Manobras para Completar Evacuação:" texto={patientDoc.necessidadeDeManobrasParaEvacuacao} />
                <CardText tag="Adoção de Novas Posturas para Evacuação:" texto={patientDoc.adocaoNovasPosturas} />
                <CardText tag="Uso de enemas, lavagens e supositórios:" texto={patientDoc.usoDeEnemas} />
                <CardText tag="Sensação de esvaziamento incompleto:" texto={patientDoc.sensacaoEsvaziamento} />
                <CardText tag="Perda insensível de fezes: " texto={patientDoc.perdaInsensivelFezes} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">8. SINTOMAS VAGINAIS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Percepção de prolapso:" texto={patientDoc.percepcapDeProlapso} />
                <CardText tag="Urgência:" texto={patientDoc.urgencia} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">9. FUNÇÃO SEXUAL</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Incontinência por Urgência:" texto={patientDoc.incontinenciaUrgencia} />
                <CardText tag="Perda de Fezes/ flatos aos esforços:" texto={patientDoc.perdaDeFezes} />
                <CardText tag="Quantidade de Fezes/flatos perdida:" texto={patientDoc.quantidadeDeFezes} />
                <CardText tag="Uso de Proteção:" texto={patientDoc.intestinal_usoDeProtecao} />
                <CardText tag="Uso de Proteção (Tipo):" texto={patientDoc.intestinal_usoDeProtecaoTipo} />
                <CardText tag="Uso de Proteção - Trocas:" texto={patientDoc.intestinal_usoDeProtecaoTrocas} />
                <CardText tag="Uso de Proteção - Nº de Trocas:" texto={patientDoc.intestinal_usoDeProtecaoNTrocas} />
                <CardText tag="Consistência das Fezes:" texto={patientDoc.consistenciaDasFezes} />
                <CardText tag="Percepção (desejo de defecação e distinção de fezes/gases):" texto={patientDoc.percepcaoDefeccaoFezes} />
                <CardText tag="Cronologia em relação às refeições:" texto={patientDoc.cronologiaEmRelacaoRefeicoes} />
                <CardText tag="Sintomas Associados:" texto={patientDoc.sintomasAssociados} />
                
                <CardText tag="TIPO DE INCONTINÊNCIA E FREQUÊNCIA - Sólido:" texto={patientDoc.incontinencia_solido} />
                <CardText tag="TIPO DE INCONTINÊNCIA E FREQUÊNCIA - Líquido:" texto={patientDoc.incontinencia_liquido} />
                <CardText tag="TIPO DE INCONTINÊNCIA E FREQUÊNCIA - Gases:" texto={patientDoc.incontinencia_gases} />
                <CardText tag="TIPO DE INCONTINÊNCIA E FREQUÊNCIA - Fraldas:" texto={patientDoc.incontinencia_fraldas} />
                <CardText tag="TIPO DE INCONTINÊNCIA E FREQUÊNCIA - Estilo de Vida:" texto={patientDoc.incontinencia_estiloDeVida} />
                <Alert>
                    <p>
                    0 = Perfeito <br />
                    20 = Completa incontinência <br />
                    Nunca= 0 (Nota: 0) <br />
                    Raramente = Menor que uma vez por mês (Nota: 1) <br />
                    Às vezes = Menor que uma vez por semana e maior ou igual a uma vez por mês (Nota: 2) <br />
                    Frequentemente = Menor que uma vez por dia e maior ou igual a uma vez por semana (Nota: 3) <br />
                    Sempre = Maior ou igual a uma vez por dia (Nota: 4)
                    </p>
                </Alert>
                <CardText tag="Bristol:" texto={patientDoc.bristol} />

                <CardText tag="Percepção de prolapso:" texto={patientDoc.percepcapDeProlapso} />

                <CardText tag="Atividade Sexual:" texto={patientDoc.atividadeSexual} />
                <CardText tag="Grau de Satisfação:" texto={patientDoc.grauSatisfacao} />
                <CardText tag="Frequência de Coito:" texto={patientDoc.frequenciaCoito} />
                <CardText tag="Desejo:" texto={patientDoc.desejo} />
                <CardText tag="Excitação:" texto={patientDoc.excitacao} />
                <CardText tag="Orgasmo:" texto={patientDoc.orgasmo} />
                <CardText tag="Dispareunia:" texto={patientDoc.dispareunia} />
                <CardText tag="Relacionamento com o Parceiro:" texto={patientDoc.relacionamentoComParceiro} />
                <CardText tag="Histórico de abuso / traumas / violência sexual:" texto={patientDoc.historicoAbuso} />
                <CardText tag="Outros sintomas/Observações:" texto={patientDoc.outrosSintomasOBS} />


                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">10. DOR</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Dor Pélvica Crônica:" texto={patientDoc.dorPelvicaCronica} />
                <CardText tag="Sintomas de Dor:" texto={patientDoc.sintomasDor} />
                <CardText tag="Horário de agravamento / limitações de atividades / Fatores que agravam ou diminuem a dor:" texto={patientDoc.horarioAgragvamento} />
                <CardText tag="Exames Complementares:" texto={patientDoc.examesComplementaresDor} />

                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">11. EXAMES COMPLEMENTARES EM UROLOGIA/UROGINECOLOGIA</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Diagnóstico:" texto={patientDoc.diagnosticoExamesComple} />
                <CardText tag="Urodinâmico:" texto={patientDoc.urodinamico} />
                <CardText tag="Urodinâmico - Considerações do exame urodinâmico: :" texto={patientDoc.urodinamicoConsideracoes} />
                <CardText tag="Urodinâmico - Data:" texto={patientDoc.urodinamicoConsideracoesData} />
                <CardText tag="Cistoscopia:" texto={patientDoc.urodinamicoCistoscopia} />
                <CardText tag="Cistoscopia (Data):" texto={patientDoc.urodinamicoCistoscopiaData} />
                <CardText tag="Outros Exames de Urologia:" texto={patientDoc.outrosExamesUrologia} />

                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">12.EXAMES COMPLEMENTARES EM PROCTOLOGIA</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Manometria Anorretal:" texto={patientDoc.manometriaAnorretal} />
                <CardText tag="Manometria Anorretal - Considerações:" texto={patientDoc.manometriaAnorretalConsideracoes} />
                <CardText tag="Manometria Anorretal (Data):" texto={patientDoc.manometriaAnorretalData} />
                <CardText tag="Outros Exames de Proctologia:" texto={patientDoc.outrosExamesProctologia} />

                <CardText tag="A paciente foi esclarecida e orientada com relação aos procedimentos intravaginais e intra-anais que serão realizados no exame físico?" texto={patientDoc.exameFisicoEsclarecimento} />
                <CardText tag="A paciente autorizou a realização dos procedimentos?" texto={patientDoc.exameFisicoAutorizacao} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">EXAMES FÍSICOS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Exame Físico Geral - PA:" texto={patientDoc.exameFisicoGeralPA} />
                <CardText tag="Exame Físico Geral - Estatura:" texto={patientDoc.exameFisicoGeralEstatura} />
                <CardText tag="Exame Físico Geral - FC:" texto={patientDoc.exameFisicoGeralFC} />
                <CardText tag="Exame Físico Geral - Peso:" texto={patientDoc.exameFisicoGeralPeso} />
                <CardText tag="Exame Físico Geral - FR:" texto={patientDoc.exameFisicoGeralFR} />
                <CardText tag="Exame Físico Geral - IMC:" texto={patientDoc.exameFisicoGeralIMC} />
                <CardText tag="Exame Físico Especial - Aparelho respiratório (tipo de respiração):" texto={patientDoc.exameFisicoRespiratorio} />
                <CardText tag="Exame Físico Especial - ABDÔMEM: (estrias, cicatrizes, pigmentação, hérnia, palpação)::" texto={patientDoc.exameFisicoAbdomem} />
                <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">AVALIAÇÃO FUNCIONAL DO ASSOALHO PÉLVICO:</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                <CardText tag="Exame Físico Especial - PERÍNEO: (roturas, tumorações, cicatrizes)::" texto={patientDoc.exameFisicoPerineo} />
                <CardText tag="Exame Físico Especial - ÂNUS: (esfíncter, fístulas, mucosa retal, tumorações, hemorroidas):" texto={patientDoc.exameFisicoAnus} />

                <CardText tag="Prolapso de parede vaginal anterior:" texto={patientDoc.prolapsoVaginalAnterior} />
                <CardText tag="Prolapso de parede vaginal posterior:" texto={patientDoc.prolapsoVaginalPosterior} />
                <CardText tag="Prolapso de cúpula vaginal ou uterino:" texto={patientDoc.prolapsoVaginalOuUterino} />
                <CardText tag="Exame da Sensibilidade:" texto={patientDoc.exameDaSensibilidade} />
                <CardText tag="Reflexo Citoriano/Bulbocavernoso:" texto={patientDoc.reflexoCitoriano} />
                <CardText tag="Reflexo Anocutâneo:" texto={patientDoc.reflexoAnocutaneo} />
                <CardText tag="Reflexos Perineais:" texto={patientDoc.reflexosPerineais} />

                <CardText tag="Mocimento Interno do Períneo:" texto={patientDoc.mocimentoInternoPerineo} />
                <CardText tag="Reflexo Contrátil à Tosse:" texto={patientDoc.reflexoContratilTosse} />
                <CardText tag="Estimativa MAP:" texto={patientDoc.estimativaMAP} />
                <CardText tag="Escala Oxford Modificada (Grau):" texto={patientDoc.escalaOxfordModificadaGrau} />
                <CardText tag="Contração voluntária - Escala ICS:" texto={patientDoc.escalaICS} />
                <CardText tag="Coativação:" texto={patientDoc.coativacao} />
                <CardText tag="Relaxamento:" texto={patientDoc.relaxamento} />
                <CardText tag="Endurance (tempo de sustentação)::" texto={patientDoc.endurance} />
                <CardText tag="Contrações Rápidas:" texto={patientDoc.contracoesRapidas} />
                <CardText tag="Palpitação Dolorosa:" texto={patientDoc.palpitacaoDolorosa} />
                <CardText tag="Local de Palpitação Dolorosa:" texto={patientDoc.palpitacaoDolorosaLocalAchado} />
                <CardText tag="Tônus  do canal vaginal:" texto={patientDoc.tonusVaginal} />
                <CardText tag="Outros testes específicos (Perineometria, EMG):" texto={patientDoc.outrosTestes} />
                <CardText tag="Diástase Abdominal (cm ou dedos):" texto={patientDoc.diastaseAbdominal} />
                <CardText tag="Pad Test 1:" texto={patientDoc.padTest1} />
                <CardText tag="Pad Test 2:" texto={patientDoc.padTest2} />
                <CardText tag="Pad Test 3:" texto={patientDoc.padTest3} />
                <CardText tag="Diagnóstico Fisioterapêutico:" texto={patientDoc.diagnosticoFisioterapeutico} />

                <CardText tag="Vista Lateral D:" texto={patientDoc.avaliacaoPosturalVistaLateralD} />
                <CardText tag="Vista Lateral E:" texto={patientDoc.avaliacaoPosturalVistaLateralE} />
                <CardText tag="Vista Anterior:" texto={patientDoc.avaliacaoPosturalVistaAnterior} />
                <CardText tag="Vista Posterior:" texto={patientDoc.avaliacaoPosturalVistaPosterior} />

                <CardText tag="Marcha Antálgica:" texto={patientDoc.marchaAntalgica} />
                <CardText tag="Observações da Marcha Antálgica:" texto={patientDoc.marchaAntalgicaObs} />
                </div>
            </section> : <section>
                <NotFoundDoc
                title="Este paciente não possui uma Ficha de Avaliação Uroginecológica registrada!"
                text="Deseja preencher uma ficha de Ficha de Avaliação Uroginecológica para este paciente?"/>
            </section>
        }
    </section>
    </>
}