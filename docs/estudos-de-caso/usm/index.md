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

=== "Release 2"

## **Critérios de Aceitação**