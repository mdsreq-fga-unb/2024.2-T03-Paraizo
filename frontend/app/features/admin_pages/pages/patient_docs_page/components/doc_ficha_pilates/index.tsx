import { Button } from "@mui/material";
import CardText from "../cardText";
import { InterfacePatient } from "../../interfaces/docsInterface";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import NotFoundDoc from "../notFoundDoc";

interface InterfaceDocFichaPilatesComponent {
    patient: InterfacePatient
}

export default function DocFichaPilates ({patient}:InterfaceDocFichaPilatesComponent){
    const patientDoc = patient.doc_pilates
    const navigate = useNavigate()

    const [docStatus, setDocStatus] = useState<boolean|undefined>()
            useEffect(()=> {
                if(patientDoc.profissao === '' && patientDoc.queixasPrincipais === '' && patientDoc.altura === '')
                    setDocStatus(false)
            }, [])
    return <>
    <section>
        {
            docStatus ? 
            <section>
                <div className="bg-paraizo-cyan h-14 rounded-md flex justify-between items-center px-4">
                    <h1 className="text-paraizo-whiteLines text-xl font-bold">Ficha Pilates</h1>
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
                        onClick={() => navigate("edit")}>Editar
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
                        <h1 className="text-black w-full">DADOS PESSOAIS</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                    <CardText tag="Nome:" texto={patient.name}/>
                    <CardText tag="Data de Nascimento:" texto={patient.birthDate}/>
                    <CardText tag="Estado Civil:" texto={patientDoc.estadoCivil}/>
                    <CardText tag="Idade:" texto={patientDoc.idade}/>
                    <CardText tag="Endereço:" texto={patientDoc.endereco}/>
                    <CardText tag="Escolaridade:" texto={patientDoc.escolaridade}/>
                    <CardText tag="Profissão:" texto={patientDoc.profissao}/>
                    <CardText tag="Queixas Princiapis:" texto={patientDoc.queixasPrincipais}/>
                    <CardText tag="Diagnóstico médico:" texto={patientDoc.diagnosticoMedico}/>
                    <CardText tag="Faz uso de medicações:" texto={patientDoc.medicacoes}/>
                    <CardText tag="Se sim, quais?" texto={patientDoc.medicacoesQuais}/>
                    <CardText tag="Diagnostico do Fisioterapeuta/Profissional de Educação física:" texto={patientDoc.diagnosticoFisioterapeuta}/>
                    <CardText tag="Possui exames complementares:" texto={patientDoc.examesComplementares}/>
                    <CardText tag="Se sim, quais?" texto={patientDoc.examesComplementaresQuais}/>
                    <CardText tag="Tratamentos adotados:" texto={patientDoc.tratamentosAdotados}/>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Anamnese</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                    <CardText tag="PA" texto={patientDoc.pa} tagEnd="mmHg"/>
                    <CardText tag="Peso" texto={patientDoc.peso} tagEnd="Kg"/>
                    <CardText tag="Altura" texto={patientDoc.altura} tagEnd="m"/>
                    <CardText tag="IMC" texto={patientDoc.imc}/>
                    <CardText tag="RCQ" texto={patientDoc.rcq}/>
                    <CardText tag="Tabagista" texto={patientDoc.tabagista}/>
                    <CardText tag="Etilista" texto={patientDoc.etilista}/>
                    <CardText tag="Hipertensão" texto={patientDoc.hipertensao}/>
                    <CardText tag="Diabetes" texto={patientDoc.diabetes}/>
                    <CardText tag="AVC" texto={patientDoc.avc}/>
                    <CardText tag="Cardiopatia" texto={patientDoc.cardiopatia}/>
                    <CardText tag="Tireoide" texto={patientDoc.tireoide}/>
                    <CardText tag="Labirintite" texto={patientDoc.labirintite}/>
                    <CardText tag="Prática alguma atividade física? Qual? Frequência?" texto={patientDoc.praticaAtividadeFisica}/>
                    <CardText tag="Problema ósseo ou articular?" texto={patientDoc.praticaAtividadeFisica}/>
                    <CardText tag="Fez alguma cirurgia? Qual?" texto={patientDoc.fezCirurgia}/>
                    <CardText tag="Toma algum medicamento? Qual?" texto={patientDoc.tomaMedicamento}/>
                    <CardText tag="Antecedentes pessoais:" texto={patientDoc.antecedentesPessoais}/>
                    <CardText tag="Antecedentes pessoais:" texto={patientDoc.antecedentesPessoais}/>
                    <CardText tag="Quais os objetivos em fazer o pilates?" texto={patientDoc.objetivosPilates}/>
                    <CardText tag="ACHADOS FISIOTERAPÊUTICOS: " texto={patientDoc.acahdosFisioterapeuticos}/>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Observação</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                    <CardText tag="Capacidade Cardiovascular" texto={patientDoc.obs_capacidadeCardiovascular}/>
                    <CardText tag="Coordenação Motora" texto={patientDoc.obs_coordenacaoMotora}/>
                    <CardText tag="Equilíbrio" texto={patientDoc.obs_equilibrio}/>
                    <CardText tag="Força" texto={patientDoc.obs_forca}/>
                    <CardText tag="Flexibilidade" texto={patientDoc.obs_flexibilidade}/>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">Tratamento Clínico</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                    <CardText tag="Medicamentoso:" texto={patientDoc.tratamento_medicamentoso}/>
                    <CardText tag="Imobilização:" texto={patientDoc.tratamento_imobilizacao}/>
                    <CardText tag="Cirúrgico:" texto={patientDoc.tratamento_cirurgico}/>
                    <CardText tag="Outros:" texto={patientDoc.tratamento_outros}/>

                    <h2 className="text-black"></h2>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-black w-full">AVALIAÇÃO DA DOR</h1>
                        <div className="h-[.125rem] bg-black w-full rounded-full"></div>
                    </div>
                    <CardText tag="História da dor: " texto={patientDoc.historiaDaDor}/>
                    <CardText tag="Frequência: " texto={patientDoc.frequencia}/>
                    <CardText tag="Intensidade: " texto={patientDoc.intensidade}/>
                    <CardText tag="Grau da dor:  " texto={patientDoc.grauDaDor}/>
                    <CardText tag="Tipo da Dor:  " texto={patientDoc.tipoDaDor}/>
                    <CardText tag="Fatores que agravam a dor: " texto={patientDoc.fatoresAgravamADor}/>
                    <CardText tag="Fatores que Diminuem a dor: " texto={patientDoc.fatoresDiminuemADor}/>
                
                    <h2 className="text-black">Exames Complementares:</h2>
                    <CardText tag="RX, TC, RM ou outros" texto={patientDoc.examesComplementares}/>
                    <CardText tag="Laudos" texto={patientDoc.laudos}/>

                    <h2 className="text-black">Testes Especiais Membros:</h2>
                    <h2 className="text-black">Membros SS:</h2>
                    <h2 className="text-black">Funcional Coçadura de Apley:</h2>
                    <CardText tag="Arco doloroso:" texto={patientDoc.arcoDoloroso}/>
                    <CardText tag="Biceps  Braquial:" texto={patientDoc.bicepsBraquial}/>
                    <CardText tag="IMPACTO:" texto={patientDoc.impacto}/>
                    <CardText tag="Supra Espinhoso:" texto={patientDoc.supraEspinhoso}/>
                    <CardText tag="Instabilidade:" texto={patientDoc.instabilidade}/>

                    <h2 className="text-black">Tendinite e Ruptura:</h2>
                    <CardText tag="Jobe, Supra - espinhoso:" texto={patientDoc.jobeSupraEspinhoso}/>
                    <CardText tag="Speed CLB: " texto={patientDoc.speedCLB}/>
                    <CardText tag=" Queda de Braço Espinhoso MR:" texto={patientDoc.quedaDeBracoEspinhoso}/>
                    <CardText tag="Patte Infra- Espinhoso:" texto={patientDoc.patteInfraEspinhoso}/>
                    <CardText tag="Gerber ,Subescapular:" texto={patientDoc.gerberSubescapular}/>

                    <h2 className="text-black">Desfiladeiro Torácico:</h2>
                    <CardText tag="Manobra de Adson:" texto={patientDoc.manobraAdson}/>
                    <CardText tag="Teste de Allen:" texto={patientDoc.testeAllen}/>
                    <CardText tag="Teste de Roos (Desaparecimento ou diminuição do pulso radial):" texto={patientDoc.testeRoos}/>
                
                    <h2 className="text-black">Punho e Mão:</h2>
                    <CardText tag="Allem:" texto={patientDoc.allem}/>
                    <CardText tag="Filkelnstein:" texto={patientDoc.filkelntein}/>
                    <CardText tag="Phalen:" texto={patientDoc.phalen}/>
                    <CardText tag="Phalen Reverso:" texto={patientDoc.phalenReverso}/>
                    <CardText tag="Sinal de Tínel:" texto={patientDoc.sinalTinel}/>
                    
                    <h2 className="text-black">Especiais do Cotovelo: </h2>
                    <CardText tag="Instabilidade:" texto={patientDoc.instabilidadeCotovelo}/>
                    <CardText tag="Ligamentar:" texto={patientDoc.ligamentar}/>
                    <CardText tag="Estresse em valgo e em varo:" texto={patientDoc.estresseValgoVaro}/>

                    <h2 className="text-black">NEUROLÓGICOS: </h2>
                    <CardText tag="Tínel , Preensão em pinça:" texto={patientDoc.tinelPreensaoPinca}/>
                    <CardText tag="Flexão do Cotovelo:" texto={patientDoc.flexaoCotovelo}/>
                    <CardText tag="Síndrome do Pronador redondo:" texto={patientDoc.sindromePronadorRedondo}/>
                    <CardText tag="Epicondilite Medial:" texto={patientDoc.epicondiliteMedial}/>
                    <CardText tag="Epicondilite Lateral:" texto={patientDoc.epicondiliteLateral}/>

                    <h2 className="text-black">TESTES MEMBROS II: </h2>
                    <CardText tag="Ely:" texto={patientDoc.ely}/>
                    <CardText tag="Patrick Fabere:" texto={patientDoc.patrickFabere}/>
                    <CardText tag="Teste de Piriforme:" texto={patientDoc.testePiriforme}/>
                    <CardText tag="Trendelenburg:" texto={patientDoc.trendelenburg}/>
                    <CardText tag="Ober:" texto={patientDoc.ober}/>
                    <CardText tag="Thomas:" texto={patientDoc.thomas}/>
                    <CardText tag="Elevação de Perna retal/ Lazégue:" texto={patientDoc.elevacaoPerna}/>

                    <h2 className="text-black">JOELHOS:</h2>
                    <CardText tag="Instabilidade:" texto={patientDoc.instabilidade}/>
                    <CardText tag="Gaveta Anterior:" texto={patientDoc.gavetaAnterior}/>
                    <CardText tag="Gaveta Posterior:" texto={patientDoc.gavetaPosterior}/>
                    <CardText tag="Stress em Valgo:" texto={patientDoc.stressValgo}/>
                    <CardText tag="Stress em Varo:" texto={patientDoc.stressVaro}/>
                    <CardText tag="Apley, decoaptação Lachman:" texto={patientDoc.apleyDecoaptacao}/>
                    <CardText tag="Lesão Meniscal:" texto={patientDoc.lesaoMeniscal}/>
                    <CardText tag="Apley Compressão:" texto={patientDoc.apleyCompreenssao}/>
                    <CardText tag="MC Murray:" texto={patientDoc.mcMurray}/>
                    <CardText tag="Derrame Articular:" texto={patientDoc.derrameArticular}/>

                    <h2 className="text-black">TORNOZELO E PÉ:</h2>
                    <CardText tag="Gaveta Anterior:" texto={patientDoc.gaveraAnteriorPe}/>
                    <CardText tag="Gaveta Posterior:" texto={patientDoc.gaveraPosteriorPe}/>
                    <CardText tag="Stress em Valgo:" texto={patientDoc.stressValgoPe}/>
                    <CardText tag="Stress em Varo:" texto={patientDoc.stressVaroPe}/>
                    <CardText tag="Sinal de Homans – TVP:" texto={patientDoc.sinaisHomans}/>
                    <CardText tag="Thompson – Ruptura do Tendão do TS:" texto={patientDoc.thompson}/>

                    <CardText tag="Inspeções/Palpação/Observações:" texto={patientDoc.inspecoesPalpacaoObs}/>
                    <CardText tag="Marcha:" texto={patientDoc.marcha}/>
                    <CardText tag="Conduta:" texto={patientDoc.conduta}/>
                </div>
            </section> :
            <section>
                <NotFoundDoc
                title="Este paciente não possui uma Ficha de Avaliação Pilates registrada!"
                text="Deseja preencher uma ficha de Ficha de Avaliação Pilates para este paciente?"/>
            </section>
        }
    </section>
    </>
}