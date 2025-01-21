# **User Story Mapping (USM)**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |              **Descrição**              |           **Autor**            |
    | :------: | :--------: | :-------------------------------------: | :----------------------------: |
    |  20/01   |    1.0     | Criação do tópico de USM                | Henrique Martins Alencar       |

## **Introdução**

<p style="text-indent: 50px;text-align: justify;">
A técnica de User Story Mapping é uma abordagem colaborativa e visual para o planejamento e desenvolvimento de produtos, focada em garantir que o trabalho atenda às necessidades dos usuários e alcance os objetivos do negócio. Essa técnica organiza histórias de usuários em um formato de mapa que permite visualizar a jornada do usuário, as funcionalidades principais e as tarefas associadas. Esse mapeamento ajuda equipes a priorizarem entregas incrementais, identificarem lacunas no entendimento do produto e criarem um roadmap mais claro e alinhado às expectativas dos stakeholders. </p>

## **Estudo de Caso**

<p style="text-indent: 50px;text-align: justify;">
Para a realização da tarefa, utilizamos como base a empresa fictícia "EduConnect" que é é uma empresa fictícia que busca transformar a forma como instituições 
educacionais gerenciam projetos interdisciplinares e atividades extracurriculares. A visão é criar um sistema educacional onde professores alunos e a comunidade escolar possam colaborar efetivamente em projetos que promovam aprendizagem significativa e desenvolvimento de habilidades práticas. O mapa realizado pode ser conferido a seguir:
</p>

<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVLJ8O_A4=/?pres=1&frameId=3458764613436993404&embedId=734064771361" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
/// caption
User Story Mapping - EduConnect
///

## **Organização**

=== "Personas"

    | **ID** | **Descrição** |
    | :----: | ------------- |
    | [PS01]   | Professor coordenador |
    | [PS02]   | Professor participante |
    | [PS03]   | Coordenador pedagógico |
    | [PS04]   | Pais/Responsáveis |
    | [PS05]   | Alunos |
    | [PS06]   | Especialista Externo |

=== "Atividades"

    | **ID** | **Descrição** | **Usuários** |
    | :----: | ------------- | :----------:|
    | [AT01]   | Organizar evento interdisciplinar | [PS01],[PS02],[PS03] |
    | [AT02]   | Gerir evento interdisciplinar | [PS01],[PS02],[PS03] |
    | [AT03]   | Analisar evento interdisciplinar | [PS01],[PS02],[PS03] |
    | [AT04]   | Acompanhar progresso dos filhos | [PS04] |
    | [AT05]   | Comunicar-se com os professores | [PS04] |
    | [AT06]   | Participar de projetos | [PS05] |
    | [AT07]   | Visualizar materiais e instruções | [PS05] |
    | [AT08]   | Comunicar-se com colegas e professores | [PS05] |
    | [AT09]   | Monitorar projetos e alunos | [PS06] |

=== "Backbone"

    | **ID** | **Descrição** | **Atividades** |
    | :----: | ------------- | :----------:|
    | [BB01] | Cadastrar novo evento | [AT01] |
    | [BB02] | Criar planejamento do evento | [AT01] |
    | [BB03] | Cadastrar encontros importantes do evento | [AT01] |
    | [BB04] | Divulgar evento | [AT01] |
    | [BB05] | Realizar/executar evento | [AT02] |
    | [BB06] | Analisar projetos/atividades dos participantes | [AT02] |
    | [BB07] | Finalizar evento | [AT02] |
    | [BB08] | Visualizar resultados do evento | [AT03] |
    | [BB10] | Visualizar projetos em andamento | [AT04] |
    | [BB11] | Visualizar atividades dos filhos | [AT04] |
    | [BB12] | Manter comunicação com professores | [AT05] |
    | [BB13] | Acompanhar progresso | [AT06] |
    | [BB14] | Participar de atividades | [AT06] |
    | [BB15] | Visualizar informações sobre os projetos | [AT07] |
    | [BB16] | Acessar instruções sobre as ferramentas | [AT07] |
    | [BB17] | Enviar mensagens | [AT08] |
    | [BB18] | Acessar projetos e materiais | [AT09] |
    | [BB19] | Comunicar-se com professores e alunos | [AT09] |

## **Backlog**


=== "MVP"

    | **ID** | **Descrição** | **Atividades** |
    | :----: | ------------- | :----------:|
    | [TA01] | Cadastrar informações básicas de um novo evento | [BB01] |
    | [TA02] | Editar informações básicas de um novo evento | [BB01] |
    | [TA03] | Cadastrar disciplinas envolvidas no evento | [BB01] |
    | [TA04] | Editar disciplinas envolvidas no evento | [BB01] |
    | [TA05] | Informar objetivos e espectativas do evento | [BB01] |
    | [TA06] | Editar objetivos e espectativas do evento | [BB01] |
    | [TA07] | Adicionar outros coordenadores ou professor(es) participante(es) no evento | [BB01] |
    | [TA08] | Editar lista de coordenadores ou professor(es) participante(es) no evento | [BB01] |
    | [TA10] | Inserir critérios de avaliação para o evento | [BB01] |
    | [TA11] | Editar critérios de avaliação para o evento | [BB01] |

    | [TA13] | Definir datas de início e fim do evento | [BB02] |
    | [TA14] | Edtar datas de início e fim do evento | [BB02] |
    | [TA15] | Definir data e horários de encontros importantes do evento | [BB02] |
    | [TA16] | Editar data e horários de encontros importantes do evento | [BB02] |
    | [TA17] | Inserir data de início e fim para as atividades de organização pré-evento | [BB02] |
    | [TA18] | Inserir materiais necessários para realização do evento | [BB02] |
    | [TA19] | Excluir materiais necessários para realização do evento | [BB02] |
    | [TA20] | Editar lista de materiais necessários para realização do evento | [BB02] |
    | [TA21] | Cadastrar encontros importantes | [BB02] |
    | [TA22] | Editar encontros importantes | [BB02] |
    | [TA23] | Excluir encontros importantes | [BB02] |

    | [TA25] | Adicionar descrição do encontro | [BB03] |
    | [TA26] | Editar descrição do encontro | [BB03] |
    | [TA27] | Adicionar roteiro para o encontro | [BB03] |
    | [TA28] | Editar roteiro do encontro | [BB03] |
    | [TA29] | Adicionar materiais necessários para realização do encontro | [BB03] |
    | [TA30] | Editar lista de materiais necessários para realização do encontro | [BB03] |
    | [TA31] | Adicionar outros membros para ajudar na organização do encontro | [BB03] |
    | [TA32] | Editar lista de membros para ajudar na organização do encontro | [BB03] |
    | [TA33] | Adicionar materiais dos professores e/ou Especialistas Externos | [BB03] |
    | [TA34] | Editar materiais dos professores e/ou Especialistas Externos | [BB03] |
    | [TA35] | Adicionar descrição de projetos e/ou atividades a serem feitas pelos participantes | [BB03] |
    | [TA36] | Editar descrição de projetos e/ou atividades a serem feitas pelos participantes | [BB03] |
    | [TA37] | Cadastrar atividades para serem realizadas | [BB03] |
    | [TA38] | Editar atividades para serem realizadas | [BB03] |
    | [TA39] | Excluir atividades para serem realizadas | [BB03] |
    | [TA40] | Inserir um ou mais responsáveis para cada atividade do encontro | [BB03] |
    | [TA41] | Inserir campo para postágem dos entregáveis do encontro por parte dos participantes | [BB03] |
    
    | [TA44] | Inserir texto para divulgação do evento para participantes e seus responsáveis | [BB04] |
    | [TA45] | Editar texto para divulgação do evento para participantes e seus responsáveis | [BB04] |
    | [TA46] | Inserir texto com os profissionais que participarão do evento | [BB04] |
    | [TA47] | Editar texto com os profissionais que participarão do evento | [BB04] |
    | [TA48] | Inserir imagens e/ou vídeos de divulgação do evento | [BB04] |
    | [TA49] | Editar imagens e/ou vídeos de divulgação do evento | [BB04] |
    | [TA50] | Excluir imagens e/ou vídeos de divulgação do evento | [BB04] |
    | [TA51] | Adicionar participantes do evento manualmente| [BB04] |
    | [TA52] | Editar lista de participantes do evento manualmente | [BB04] |
    | [TA53] | Retirar um membro da lista de participantes do evento manualmente | [BB04] |
    | [TA54] | Criar formulário para inscrição no evento | [BB04] |
    | [TA55] | Gerar link de compartilhamento do formulário de inscrição | [BB04] |

    | [TA56] | Visualizar programação dos encontros importantes | [BB05] |
    | [TA57] | Enviar mensagem a outro colaborador | [BB05] |
    | [TA58] | Visualizar mensagens enviadas por outro colaborador ou grupo | [BB05] |
    | [TA59] | Criar chat de mensagens de texto com outros dois ou mais colaboradores | [BB05] |
    | [TA60] | Adicionar ou excluir outros colabores do chat de mensagens de texto | [BB05] |
    | [TA61] | Editar informações dos encontros importantes do evento | [BB05] |
    | [TA62] | Marcar encontro importante como concluido | [BB05] |
    | [TA63] | Marcar atividades de um encontro importante como concluida | [BB05] |
    | [TA64] | Registrar texto sobre o andamento de uma atividade do encontro | [BB05] |
    | [TA65] | Editar lista de mateirais envolvidos na realização da atividade do encontro | [BB05] |
    | [TA66] | Enviar mensagens de textos para pais ou responsáveis | [BB05] |
    | [TA67] | Visualizar mensagens enviadas por pais ou responsáveis | [BB05] |
    | [TA68] | Criar chat de mensagens de texto com outros dois ou mais pais ou responsáveis | [BB05] |
    | [TA69] | Adicionar ou excluir outros pais ou responsáveis do chat de mensagens de texto | [BB05] |
    | [TA70] | Criar grupos de participantes para realização de atividades | [BB05] |
    | [TA71] | Editar grupos de participantes para realização de atividades | [BB05] |
    | [TA72] | Adicionar texto sobre os resultados do encontro | [BB05] |
    | [TA73] | Adicionar texto sobre os resultados do evento | [BB05] |

    | [TA77] | Visualizar arquivos enviados pelos participantes ou por grupos de participantes | [BB06] |
    | [TA77] | Enviar feedback em texto para os participantes ou por grupos de participantes | [BB06] |
    | [TA77] | Compartilhar feedback das atividades para os pais ou responsáveis | [BB06] |

    | [TA77] | Marcar evento como concluido | [BB07] |
    | [TA77] | Relatar feedback final sobre o evento em texto | [BB07] |
    | [TA77] | Divulgar texto, imagens e/ou vídeos de finalização do evento para os colaboradores | [BB07] |
    | [TA77] | Divulgar texto, imagens e/ou vídeos de finalização do evento para os participantes | [BB07] |
    | [TA77] | Divulgar texto, imagens e/ou vídeos de finalização do evento para os pais ou responsáveis | [BB07] |

    | [TA77] | Visualizar lista de participantes do evento | [BB08] |
    | [TA77] | Visualizar relatórios de todas as atividades do evento | [BB08] |
    | [TA77] | Visualizar informações gerais do evento | [BB08] |
    | [TA77] | Visualizar todos os feedbacks do evento | [BB08] |
    | [TA77] | Excluir evento da lista de eventos realizados | [BB08] |

=== "Release 2"

    | [TA12] | Inserir metas de porcentágem de parcitipantes ativos e atividades entregues | [BB01] |
    | [TA24] | Inserir gasto previsto para realização do evento | [BB02] |
    | [TA42] | Inserir gasto previsto para realização do encontro | [BB03] |
    | [TA43] | Inserir gasto previsto para realização das atividades do encontro | [BB03] |
    | [TA74] | Visualizar poncentágem de participantes que participaram do encontro | [BB05] |
    | [TA75] | Inserir informações de gasto real com as atividades do encontro | [BB05] |
    | [TA76] | Inserir informações de gasto real com todo o encontro | [BB05] |
    | [TA77] | Visualizar poncentágem de participantes que realizaram a entrega | [BB06] |
    | [TA77] | Visualizar comparação entre as porcentágens de participantes ativos e atividades entregues com suas respectivas metas | [BB07] |
    | [TA77] | Visualizar comparação entre gastos previstos e gastos reais de todo o evento | [BB07] |
    | [TA77] | Visualizar informações sobre todos os gastos reais do evento | [BB07] |
    | [TA77] | Filtrar informações sobre todos os gastos reais do evento por encontro | [BB07] |
    | [TA77] | Filtrar informações sobre todos os gastos reais do evento por data | [BB07] |
    | [TA77] | Filtrar informações sobre todos os gastos reais do evento por colaboradores | [BB07] |
    | [TA77] | Visualizar informações sobre gastos do evento | [BB08] |


## **Critérios de Aceitação**

    | Tarefa do usuário | Critérios de Aceitação |    
    | [TA13]  | O sistema deve emitir um alerta caso o usuário tente inserir uma data anterior ao dia em que está realizando essa atividade; O sistema deve mostrar ao usuário a duração, em dias, do evento ao ser informado as datas de início e fim do mesmo; O sistema deve impedir que o usuário defina uma data que seja um feriado ou ponto facultativo; O sistema deve impedir que o usuário defina uma data que ocorra concomitante à outro evento com mesma equipe de coordenadores; |
    | [TA17] | O sistema deve impedir que o usuário defina uma data fora o período de duração do evento; O sistema deve emitir um alerta caso o usuário tente inserir uma data anterior ao dia em que está realizando essa atividade; |
    | [TA21] | O sistema deve impedir que o usuário tente cadastrar o encontro caso não tenha inserido as informações obrigatórias; O sistema deve permitir que o usuário cadastre um novo encontro importante se, e somente se, ele inserir as seguintes informações: Data, horário, descrição, lista de organizadores e lista de materiais; O sistema deve impedir que usuário que não sejam da equipe de coordenadores tentem cadastrar um encontro importante; |
    | [TA31] | O sistema deve impedir que o usuário tente adicionar um membro que não esteja na equipe do evento; O sistema deve impedir que o usuário tente adicionar um membro que já esteja presente em outra equipe de um encontro importante que ocorrerá na mesma data e horário; O sistema deve impedir que o usuário tente adicionar um membro já presente na lista. |
    | [TA48] | O sistema deve impedir que o usuário tente adicionar imagens que não sejam de extensões .png e .jpeg; O sistema deve impedir que o usuário tente inserir uma imagem que exceda o tamanho de 5mb; O sistema deve impedir que o usuário tente inserir um vídeo que não seja de extensão .mp4; O sistema deve impedir que o usuário tente inserir um vídeo que exceda o tamanho de 100mb; |
    | [TA56] | O sistema deve permitir que o usuário visualize todas as informações do encontro em uma só interface; O sistema deve apresentar um design de interface responsivo, permitindo que todas as informações sejam visíveis para qualquer tamanho de tela. |
    | [TA77] | O sistema deve permitir que o usuário visualize os arquivos enviados pelos participantes dentro do próprio sistema; O sistema deve permitir que o usuário exporte os arquivos enviados pelos participantes para seu próprio computador. |