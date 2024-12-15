# **Visão do Projeto**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                **Descrição**                |                                      **Autor**                                       |
    | :------: | :--------: | :-----------------------------------------: | :----------------------------------------------------------------------------------: |
    |  08/11   |    1.0     | Criação das seção de visão geral do projeto | Erick Miranda Santos <br> Maykon Júnio dos Santos Soares <br> Marllon Fausto Cardoso <br> Pedro Miguel M. de O. dos Santos |
    |  24/11   |    1.1     |O planejamento do quadro e das iterações está sendo ajustado para promover maior clareza e eficiência no fluxo de trabalho.| Erick Miranda Santos |
    |  15/12   |    1.1     | Revisão de cronograma de entregas.| Maykon Júnio dos Santos Soares |

---

## **Interação entre equipe e cliente**

### **Composição da Equipe**

| Papel                  | Descrição                                                                                             | Responsável                    | Participantes                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| Gerente do Projeto     | Coordena o projeto, garante a comunicação entre cliente e equipe, controla prazos e entregas.         | Maykon Júnio dos Santos Soares | Marllon Fausto                                                              |
| Desenvolvedor Frontend | Responsável pela interface do usuário, design e implementação das funcionalidades no lado do cliente. | Marllon Fausto                 | Henrique Martins, Pedro Miguel                                              |
| Desenvolvedor Backend  | Implementa a lógica de negócios, integração com banco de dados e APIs.                                | Erick Miranda                  | Maykon Júnio dos Santos Soares, Marllon Fausto                              |
| Analista de QA         | Garante a qualidade do produto, executando testes de funcionalidade, performance e usabilidade.       | Pedro Miguel Martins           | Erick Miranda                                                               |
| Analista de Requisitos | Define os requisitos funcionais e não funcionais do sistema e garante que eles sejam atendidos.       | Henrique Martins               | Pedro Miguel, Maykon Júnio dos Santos Soares, Marllon Fausto, Erick Miranda |

---

### **Matriz de Comunicação**

| **Ferramenta**                                 | **Objetivo**                                                                                                     | **Frequência**                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| **:material-microsoft-teams: Microsoft Teams** | Reuniões semanais entre a equipe de desenvolvimento para planejamento, alinhamentos e feedbacks.                 | Semanal                                      |
| **:simple-googlemeet: Google Meet**            | Reuniões entre a equipe de desenvolvimento e o cliente para relatar andamento, validar entregas e tirar dúvidas. | Conforme necessário (reuniões com o cliente) |
| **:simple-whatsapp: WhatsApp**                 | Comunicação assíncrona entre equipe e cliente para sanar dúvidas ou realizar comunicações rápidas.               | Conforme necessário (interações informais)   |

---

### **Métodos e Frequência de Reuniões**

| **Reunião**                                       | **Objetivo**                                                              | **Frequência** |
| ------------------------------------------------- | ------------------------------------------------------------------------- | -------------- |
| **Reunião de planejamento e revisão de Iteração** | Planejamento e revisão do progresso das Iterações, alinhamento da equipe. | Semanal        |

---

### **Frequência de Interações com o Cliente**

| **Interação**                           | **Objetivo**                                          | **Frequência**      |
| --------------------------------------- | ----------------------------------------------------- | ------------------- |
| **Revisões de Iteração**                | Cliente valida entregas e fornece feedback.           | A cada 2 semanas    |
| **Interações esporádicas via WhatsApp** | Comunicação rápida para dúvidas ou ajustes imediatos. | Conforme necessário |

---

## **Planejamento das Fases e/ou Iterações do Projeto**

| Iteração  | Fase RAD                    | Processo de Engenharia                                                                                | Produto (Entrega)                     | Data Início | Data Fim   | Dias |
| --------- | --------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------- | ----------- | ---------- | ---- |
| 0         | Planejamento dos Requisitos | Definição do produto<br>Definição do Problema<br>Levantamento inicial e análise de requisitos         | Documento de visão inicial do produto | 22/10/2024  | 04/11/2024 | 14   |
| 1         | Planejamento dos Requisitos | Levantamento inicial e análise de requisitos                                                          | Levantamento de backlog incial        | 05/11/2024  | 18/11/2024 | 14   |
| 2         | Planejamento dos Requisitos | Levantamento inicial e análise de requisitos<br>Priorização incial de requisitos                      | Levantamento de backlog incial        | 19/11/2024  | 02/12/2024 | 14   |
| 3         | Planejamento dos Requisitos | Refinamento e priorização de backlog<br>Definição de DoR e DoD<br>Definição de critérios de aceitação | Backlog detalhado para MVP1 e MVP2    | 03/12/2024  | 16/12/2024 | 14   |
| 4         | User Design                 | Prototipação detalhada de US01 a US27<br>Feedback de usuários<br>Ajustes com base no feedback         | Protótipos para MVP1 e MVP2           | 17/12/2024  | 30/12/2024 | 14   |
| **Pausa** | -                           | Recesso de Fim de Ano                                                                                 | -                                     | 31/12/2024  | 07/01/2025 | 8    |
| 5         | Desenvolvimento e Testes    | Desenvolvimento iterativo e testes para US01 a US07                                                   | Entrega de MVP1                       | 08/01/2025  | 21/01/2025 | 14   |
| 6         | Desenvolvimento e Testes    | Desenvolvimento iterativo e testes para US08 a US16                                                   | Entrega parcial de MVP2               | 22/01/2025  | 04/02/2025 | 14   |
| 7         | Desenvolvimento e Testes    | Desenvolvimento iterativo e testes para US16 a US27                                                   | Entrega de MVP2                       | 05/02/2025  | 18/02/2025 | 14   |

---

#### **Engenharia de Requisitos e o RAD**

| **Fases do RAD**                | **Atividades da Engenharia de Requisitos (ER)** | **Prática**                                                               | **Técnica**                                                                                   | **Resultados Esperados**                                                                |
| ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Planejamento dos Requisitos** | **Elicitação e Descoberta**                     | Levantamento de Requisitos                                                | Análise Documental, Brainstorming, Entrevista, Análise de Concorrentes                        | Identificar todos os requisitos de alto nível do projeto                                |
|                                 | **Análise e Consenso**                          | Análise de dependência entre os requisitos e eliminar ambiguidades        | Brainstorming, Entrevista, Análise de Objetivos de Domínio                                    | Lista de requisitos bem definidos; Definição dos critérios de prioridade dos requisitos |
|                                 | **Declaração**                                  | Apontamento dos requisitos levantados                                     | User Story, Especificação de Requisitos                                                       | Estabelecimento das especificações de todos os requisitos                               |
|                                 | **Organização e Atualização**                   | Elencar os requisitos levantados de acordo com os critérios de prioridade | Backlog de Requisitos, Critérios (pontuação, priorização), Lista de Requisitos (RF's e RNF's) | Lista de requisitos organizada com o grau de prioridade                                 |
|                                 | **Verificação e Validação**                     | Verificar e validar os requisitos levantados                              | User Story, DoD e DoR, pontuação                                                              | Backlog validado com a equipe de desenvolvimento e com o cliente; Definir DoR e DoD     |
|                                 |                                                 |                                                                           |                                                                                               |                                                                                         |
| **User Design**                 | **Representação**                               | Elaboração do design do produto                                           | Prototipagem e Mockup                                                                         | Finalização de protótipo de alta fidelidade                                             |
|                                 | **Verificação e Validação**                     | Verificar e validar os requisitos atualizados e/ou novos requisitos       | Revisão, DoD e DoR, testes com usuário                                                        | Design validado com o cliente                                                           |
|                                 |                                                 |                                                                           |                                                                                               |                                                                                         |
| **Construção**                  | **Representação**                               | Desenvolvimento dos requisitos                                            | Discussões em Equipe, Análise de Tarefas                                                      | Requisito desenvolvido                                                                  |
|                                 | **Verificação e Validação**                     | Teste dos requisitos                                                      | DoR, testes de sistema                                                                        | Requisito devidamente testado                                                           |
|                                 |                                                 |                                                                           |                                                                                               |                                                                                         |
| **Finalização e Entrega**       | **Verificação e Validação**                     | Testes de Aceitação                                                       | Testes com usuário                                                                            | Requisitos devidamente validados com o cliente                                          |
|                                 | **Organização e Atualização**                   | Fechamento do Backlog                                                     | Revisão da iteração                                                                           | Retrospectiva do backlog, acertos e erros                                               |
