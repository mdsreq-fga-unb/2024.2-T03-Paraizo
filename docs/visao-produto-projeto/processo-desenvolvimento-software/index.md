# **Processo de Desenvolvimento de Software**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                        **Descrição**                         |                                      **Autor**                                       |
    | :------: | :--------: | :----------------------------------------------------------: | :----------------------------------------------------------------------------------: |
    |  08/11   |    1.0     | Criação das seção de Processo de desenvolvimento de software | Erick Miranda Santos <br> Maykon Júnio dos Santos Soares <br> Marllon Fausto Cardoso <br> Pedro Miguel M. de O. dos Santos |
    |  10/11   |    1.1     | Especificação do processo de desenvolvimento | Erick Miranda Santos |
    |  24/11   |    1.2     | Alteração do processo de desenvolvimento (remoção do Dual Track Agile) | Erick Miranda Santos |
    |  06/12   |    1.3     | Alteração do processo de desenvolvimento (remoção do Kanban) | Erick Miranda Santos |

---

## **Etapas do RAD**

### **Etapa 1 - Planejamento dos requisitos**

<p style="text-indent: 50px;text-align: justify;">Na etapa de planejamento dos requisitos, fazemos uma análise completa do cenário e elicitamos os requisitos, nesse projeto nós seguimos o material do Professor George Marsicano(2023)[4], por isso nós seguimos os pontos, Descoberta e elicitação de requisitos, Análise e consenso de requisitos, Declaração de requisitos, Verificação e Validação e por último a Organização e atualização.</p>

| Atividade                             | Método                          | Ferramenta  | Entrega                               |
| ------------------------------------- | ------------------------------- | ----------- | ------------------------------------- |
| Descoberta e elicitação de requisitos | Diagrama de causa e 5 porquês   | Trello      | Backlog de requisitos não validado    |
| Análise e consenso de requisitos      | Análise de viabilidade          | Teams       | Backlog de requisitos não validado    |
| Declaração                            | Épicos, Features e User Stories | Trello      | User Stories não validado             |
| Verificação e Validação               | Feedback                        | Google Meet | User Stories validados                |
| Organização e Atualização             | MoSCoW e Kanban                 | Trello      | Definição de prioridades(MVP1 e MVP2) |

---

### **Etapa 2 - User Design**

<p style="text-indent: 50px;text-align: justify;">Na etapa de User Design, é feito a prototipação da aplicação, no caso é feito o protótipo equivalente aos User Stories relacionados ao MVP1 na terceira unidade e ao MVP2 na quarta unidade.</p>

| Etapa        | Método          | Ferramenta | Entregas                     |
| ------------ | --------------- | ---------- | ---------------------------- |
| Prototipação | Mock-up digital | Figma      | Protótipo de alta fidelidade |

---

### **Etapa 3 - Desenvolvimento**

<p style="text-indent: 50px;text-align: justify;">Na etapa de desenvolvimento é onde é feito o projeto e seu código é desenvolvido, esta etapa irá ocorrer após a etapa de User Design e Prototipação.</p>

---

### **Etapa 4 - Testes**

<p style="text-indent: 50px;text-align: justify;">Na etapa de testagem será feito os testes de todas as funcionalidades da aplicação</p>

| Etapa    | Método                              | Ferramenta            | Entregas        |
| -------- | ----------------------------------- | --------------------- | --------------- |
| Testagem | Testes Unitários, Testes End-to-end | Jest, Pytest, Cypress | Produto testado |

---

## **Engenharia de Requisitos e o RAD**

| **Fases do RAD**                | **Atividades da Engenharia de Requisitos (ER)** | **Prática**                                                               | **Técnica**                                                                                   | **Resultados Esperados**                                                                |
| ------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Planejamento dos Requisitos** | **Elicitação e Descoberta**                     | Levantamento de Requisitos                                                | Análise Documental, Brainstorming, Entrevista, Análise de Concorrentes                        | Identificar todos os requisitos de alto nível do projeto                                |
|                                 | **Análise e Consenso**                          | Análise de dependência entre os requisitos e eliminar ambiguidades        | Brainstorming, Entrevista, Análise de Objetivos de Domínio                                    | Lista de requisitos bem definidos; Definição dos critérios de prioridade dos requisitos |
|                                 | **Declaração**                                  | Apontamento dos requisitos levantados                                     | User Story                                                     | Estabelecimento de todos os requisitos                               |
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

## **Engenharia de Requisitos**

### **Atividades e Técnicas de ER**

#### **Elicitação e Descoberta:**

- **Análise Documental:** Será utilizada para levantar questões técnicas necessárias para o projeto, como fichas dos pacientes e relatórios médicos.

- **Brainstorming:** Será realizada uma reunião em grupo para discutir e levantar ideias a respeito do projeto.

- **Entrevista:** Será conduzida junto ao cliente, direcionando para o entendimento do negócio e do problema enfrentado.

- **Análise de Concorrentes:** Será realizada uma pesquisa mercadológica, buscando produtos já existentes que se assemelhem em alguns pontos à solução de software proposta.

- **Análise e Consenso:** O entendimento da equipe será alinhado junto ao cliente.

- **Análise de Objetivos de Domínio:** Será feita para identificar e consolidar os principais objetivos relacionados ao domínio do projeto.

**Declaração de Requisitos:**

- **User Story:** Será feita uma construção dos requisitos através dessa técnica, onde será possível destrinchar os requisitos em temas, épicos, histórias e tarefas.

#### **Representação de Requisitos:**

- **Prototipagem:** Será criado um protótipo do sistema, com fluxo de usuário para futura validação do cliente.

- **Mockup:** Será uma representação que simulará o projeto final, permitindo visualizar e testar conceitos de um projeto.

- **Discussões em Equipe:** Serão levantadas discussões para o alinhamento do entendimento dos requisitos trabalhados.

- **Análise de Tarefas:** Será construída uma estratégia que permita dividir uma tarefa mais complexa em tarefas mais simples.

#### **Verificação e Validação de Requisitos:**

- **User Story:** Será validado o User Story construído, para evitar redundância e a possibilidade de um requisito ausente.

- **DoR:** Serão definidos critérios para aprovar que um requisito esteja pronto para ser construído ou entrar no backlog.

- **DoD:** Serão definidos critérios para atestar que o requisito esteja feito por completo, sem nenhuma deficiência técnica e funcional.

- **Pontuação:** Serão definidos pontos com base na complexidade, criticidade, independência e no valor de negócio; essa pontuação será usada para priorização dos requisitos.

- **Testes de Sistema:** Serão realizados testes no sistema para garantir que ele atenda aos critérios de aceitação e esteja com o mínimo de falhas possível.

- **Testes com Usuário:** Serão realizados testes diretamente com o usuário, onde o mesmo poderá navegar pelo sistema para validar a funcionalidade implementada.

#### **Organização e Atualização de Requisitos:**

- **Backlog de Requisitos:** Serão definidos os possíveis requisitos do sistema.

- **Critérios (Pontuação, Priorização):** Serão definidos os critérios de aceitação, assim como seus valores para pontuação e respectiva priorização dos requisitos.

- **Lista de Requisitos (RF's e RNF's):** Serão definidos e filtrados os requisitos, distinguindo-os entre funcionais e não funcionais.

- **Revisão da Iteração:** Será feita uma revisão da iteração, onde serão abordados os acertos, erros e dificuldades enfrentadas, para melhor entendimento entre os membros da equipe.
