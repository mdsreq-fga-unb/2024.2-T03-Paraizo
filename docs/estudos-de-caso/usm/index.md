# **User Story Mapping (USM)**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |              **Descrição**              |           **Autor**            |
    | :------: | :--------: | :-------------------------------------: | :----------------------------: |
    |  20/01   |    1.0     | Criação do tópico de USM                | Henrique Martins Alencar       |
    |  10/02   |    1.1     | Correções das issues                    | Henrique Martins Alencar       |

## **Introdução**

<p style="text-indent: 50px;text-align: justify;">
A técnica de User Story Mapping é uma abordagem colaborativa e visual para o planejamento e desenvolvimento de produtos, focada em garantir que o trabalho atenda às necessidades dos usuários e alcance os objetivos do negócio. Essa técnica organiza histórias de usuários em um formato de mapa que permite visualizar a jornada do usuário, as funcionalidades principais e as tarefas associadas. Esse mapeamento ajuda equipes a priorizarem entregas incrementais, identificarem lacunas no entendimento do produto e criarem um roadmap mais claro e alinhado às expectativas dos stakeholders. </p>

## **Estudo de Caso**

<p style="text-indent: 50px;text-align: justify;">
Para a realização da tarefa, utilizamos como base a empresa fictícia "EduConnect" que busca transformar a forma como instituições educacionais gerenciam projetos interdisciplinares e atividades extracurriculares. A visão é criar um sistema educacional onde professores alunos e a comunidade escolar possam colaborar efetivamente em projetos que promovam aprendizagem significativa e desenvolvimento de habilidades práticas. O mapa realizado pode ser conferido a seguir:
</p>

<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVLJ8O_A4=/?pres=1&frameId=3458764613436993404&embedId=734064771361" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
/// caption
User Story Mapping - EduConnect
///

## **Organização**

=== "Personas"

    | **ID** | **Descrição** |
    | :----: | ------------- |
    | [PS01]   | Professor |
    | [PS02]   | Coordenador pedagógico |
    | [PS03]   | Pais/Responsáveis |
    | [PS04]   | Alunos |
    | [PS05]   | Especialista Externo |

=== "Atividades"

    | **ID** | **Descrição** | **Usuários** |
    | :----: | ------------- | :----------:|
    | [AT01]   | Planejar projetos | [PS01] |
    | [AT02]   | Organizar atividades do projeto | [PS01] |
    | [AT03]   | Comunicar com os participantes do projeto | [PS01] |
    | [AT04]   | Supervisionar proejtos | [PS02] |
    | [AT05]   | Acompanhar progresso dos filhos | [PS03] |
    | [AT06]   | Comunicar-se com os professores | [PS03] |
    | [AT07]   | Participar de projetos | [PS04] |
    | [AT08]   | Visualizar materiais e instruções | [PS04] |
    | [AT09]   | Comunicar-se com colegas e professores | [PS04] |
    | [AT10]   | Monitorar projetos e alunos | [PS05] |

=== "Backbone"

    | **ID** | **Descrição** | **Atividades** |
    | :----: | ------------- | :----------:|
    | [BB01] | Administrar projetos | [AT01] |
    | [BB02] | Aprovar inscirções | [AT01] |
    | [BB03] | Gerenciar atividades do projeto | [AT02] |
    | [BB04] | Mandar mensagens aos participantes do projeto | [AT03] |
    | [BB05] | Fornecer feedbacks aos alunos participantes | [AT03] |
    | [BB06] | Documentar o projeto | [AT04] |
    | [BB07] | Revisar o projeto | [AT04] |
    | [BB08] | Fornecer feedbacks aos alunos e progessores | [AT04] |
    | [BB09] | Visualizar projetos em andamento | [AT05] |
    | [BB10] | Visualizar atividades dos filhos | [AT05] |
    | [BB11] | Manter comunicação com professores | [AT06] |
    | [BB12] | Acompanhar progresso | [AT07] |
    | [BB13] | Participar de atividades | [AT07] |
    | [BB14] | Visualizar informações sobre os projetos | [AT08] |
    | [BB15] | Acessar instruções sobre as ferramentas | [AT08] |
    | [BB16] | Enviar mensagens | [AT09] |
    | [BB17] | Acessar projetos e materiais | [AT10] |
    | [BB18] | Comunicar-se com professores e alunos | [AT10] |

## **User Stories**


=== "MVP"

| **ID**  | **Nome**  | **Atividades** |
| :----:  | ------------- | :----------: |
| [US01]  | Registrar novo projeto  | [BB01] |
| [US02]  | Visualizar lista de alunos inscritos  | [BB02] |
| [US03]  | Confirmar participação de alunos  | [BB02] |
| [US04]  | Visualizar projetos  | [BB02] |
| [US05]  | Editar projeto  | [BB03] |
| [US06]  | Excluir projeto  | [BB03] |
| [US07]  | Registrar planejamento do projeto  | [BB03] |
| [US08]  | Disponibilizar materiais didáticos  | [BB03] |
| [US09]  | Registrar atividades do projeto  | [BB03] |
| [US10]  | Visualizar atividades entregues  | [BB04] |
| [US11]  | Definir responsabilidades do projeto  | [BB04] |
| [US12]  | Enviar avisos para todos os participantes  | [BB05] |
| [US13]  | Enviar mensagem direta para participante do projeto  | [BB05] |
| [US14]  | Enviar feedback para o andamento do projeto  | [BB06] |
| [US15]  | Gerar relatórios sobre o andamento do projeto  | [BB06] |
| [US16]  | Visualizar métricas do projeto  | [BB06] |
| [US17]  | Gerar histórico do projeto  | [BB07] |
| [US18]  | Visualizar alunos participantes  | [BB07] |
| [US19]  | Adicionar objetivo pedagógico  | [BB08] |
| [US20]  | Enviar feedback para professores  | [BB08] |
| [US21]  | Enviar feedback para alunos  | [BB09] |
| [US22]  | Visualizar relatórios sobre desempenho  | [BB09] |
| [US23]  | Visualizar participações (entregas e atividades realizadas)  | [BB09] |
| [US24]  | Visualizar atividades pendentes  | [BB09] |
| [US25]  | Receber notificações sobre o projeto  | [BB09] |
| [US26]  | Visualizar feedbacks recebidos  | [BB10] |
| [US27]  | Enviar atividades (pesquisas, trabalhos)  | [BB10] |
| [US28]  | Editar envio de atividades  | [BB10] |
| [US29]  | Participar de reuniões e debates  | [BB10] |
| [US30]  | Participar de grupos de trabalho  | [BB11] |
| [US31]  | Visualizar informações detalhadas do projeto  | [BB11] |
| [US32]  | Visualizar prazos e cronograma  | [BB11] |
| [US33]  | Visualizar materiais relacionados  | [BB12] |
| [US34]  | Acessar tutoriais de uso da plataforma  | [BB12] |
| [US35]  | Visualizar recomendações sobre ferramentas relacionadas  | [BB13] |
| [US36]  | Visualizar informações e detalhes do projeto  | [BB13] |
| [US37]  | Receber notificações sobre projetos e eventos  | [BB13] |
| [US38]  | Acessar materiais relacionados ao projeto  | [BB13] |
| [US39]  | Visualizar desempenho dos filhos  | [BB13] |
| [US40]  | Visualizar participação dos filhos em atividades  | [BB14] |
| [US41]  | Receber notificações sobre o desempenho dos filhos  | [BB14] |
| [US42]  | Enviar mensagens diretas para os professores  | [BB14] |
| [US43]  | Receber mensagens diretas dos professores  | [BB15] |
| [US44]  | Agendar reuniões com professores  | [BB15] |
| [US45]  | Fornecer feedbacks sobre os projetos  | [BB15] |
| [US46]  | Participar de reuniões  | [BB16] |
| [US47]  | Enviar mensagens diretas para os colegas  | [BB16] |
| [US48]  | Receber mensagens diretas dos colegas  | [BB16] |
| [US49]  | Enviar mensagens diretas para os grupos de trabalho  | [BB16] |
| [US50]  | Receber mensagens diretas dos grupos de trabalho  | [BB16] |
| [US51]  | Acessar materiais do projeto  | [BB17] |
| [US52]  | Compartilhar materiais com alunos e professores  | [BB17] |
| [US53]  | Visualizar detalhes sobre o projeto  | [BB17] |
| [US54]  | Visualizar relatórios gerais sobre o andamento do projeto  | [BB17] |
| [US55]  | Fornecer feedbacks sobre o andamento do projeto  | [BB18] |
| [US56]  | Agendar reuniões e eventos  | [BB18] |
| [US57]  | Participar de reuniões e eventos  | [BB18] |


## **Critérios de Aceitação**

| Tarefa do usuário | Critérios de Aceitação |
| :---------------: | ---------------------- |
| [US01] | - O usuário deve preencher um formulário com nome, descrição e data de início do projeto. <br> - O sistema deve validar campos obrigatórios. <br> - O projeto deve ser salvo com sucesso e exibido na lista de projetos ativos. |
| [US08] | - O usuário deve poder anexar arquivos para materiais didáticos. <br> - O usuário deve poder anexar links para materiais didáticos. <br> - Os materiais devem ser acessíveis para os participantes do projeto. |
| [US11] | - O usuário deve poder atribuir funções e responsabilidades para cada membro do projeto. <br> - O sistema deve permitir a edição e remoção de responsabilidades. |
| [US18] | - O usuário deve ver uma lista com os alunos inscritos no projeto. <br> - A lista deve exibir nome, e-mail e status de participação. |
| [US19] | - O usuário deve poder definir um objetivo pedagógico para o projeto. <br> - O sistema deve permitir a edição do objetivo posteriormente. |
| [US02] | - O usuário deve poder visualizar todos os alunos cadastrados. <br> - A lista deve conter nome, e-mail e status de inscrição. |
| [US10] | - O usuário deve acessar uma lista de atividades enviadas pelos alunos. <br> - A lista deve conter informações como aluno, data de entrega e status da correção. <br> - O sistema deve permitir o download dos arquivos entregues. |
| [US31] | - O sistema deve exibir informações sobre cada projeto, como tema, datas, quantidade de vagas, professor responsável. |
| [US41] | - Notificações devem ser enviadas por e-mail. <br> - Notificações devem ser enviadas por aplicativo. <br> - Notificações devem conter nome e data de entrega da atividade. |
| [US54] | - Relatórios devem apresentar gráficos e dados quantitativos. <br> - Deve haver a opção de baixar os relatórios em PDF. |
| [US40] | - O sistema deve exibir uma lista de atividades realizadas pelos filhos. <br> - Deve incluir datas e observações sobre a participação. |
| [US47] | - O sistema deve permitir envio de mensagens via chat. <br> - As mensagens devem ser recebidas pelo professor em tempo real. |
| [US48] | - Alunos devem ser notificados ao receber uma mensagem. <br> - O sistema deve permitir responder diretamente à mensagem. |
| [US23] | - As entregas do projeto devem ser exibidas com seu status de conclusão (ex.: "Entregue", "Pendente"). <br> - Deve ser possível filtrar atividades por data de entrega. |
| [US25] | - Alunos devem ser notificados sobre alterações de prazos ou adição de novas tarefas. <br> - Notificações devem incluir links diretos para as atividades afetadas. |