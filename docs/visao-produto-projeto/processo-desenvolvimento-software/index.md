# **Processo de Desenvolvimento de Software**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                        **Descrição**                         |                                      **Autor**                                       |
    | :------: | :--------: | :----------------------------------------------------------: | :----------------------------------------------------------------------------------: |
    |  08/11   |    1.0     | Criação das seção de Processo de desenvolvimento de software | Erick Miranda Santos <br> Maykon Júnio dos Santos Soares <br> Marllon Fausto Cardoso <br> Pedro Miguel M. de O. dos Santos |
    |  10/11   |    1.1     | Especificação do processo de desenvolvimento | Erick Miranda Santos |

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

### **Etapa 2 - User Design**

<p style="text-indent: 50px;text-align: justify;">Na etapa de User Design, é feito a prototipação da aplicação, no caso é feito o protótipo equivalente aos User Stories relacionados ao MVP1 na terceira unidade e ao MVP2 na quarta unidade.</p>

| Etapa        | Método          | Ferramenta | Entregas                     |
| ------------ | --------------- | ---------- | ---------------------------- |
| Prototipação | Mock-up digital | Figma      | Protótipo de alta fidelidade |

### **Etapa 3 - Desenvolvimento**

<p style="text-indent: 50px;text-align: justify;">Na etapa de desenvolvimento é onde é feito o projeto e seu código é desenvolvido, esta etapa irá ocorrer ao mesmo tempo que a etapa de User Design, com isso, o desenvolvimento ocorrerá ao mesmo tempo com a prototipação.</p>

| Etapa           | Método                      | Ferramenta      | Entregas |
| --------------- | --------------------------- | --------------- | -------- |
| Desenvolvimento | Dual-track Agile (adaptado) | VS Code, Github | Produto  |

#### **Dual-track Agile**

<p style="text-indent: 50px;text-align: justify;">Dual-Track Agile é uma abordagem que divide o processo de desenvolvimento de software em duas trilhas paralelas: Descoberta (Discovery) e Entrega (Delivery). Essa metodologia visa equilibrar a inovação e a validação contínua com a implementação eficiente, garantindo que o que está sendo construído atenda às necessidades reais dos usuários e do negócio.</p>

![alt text](../../assets/image.png)
/// caption
Representação gráfica de processo dual-track Agile.
///

!!! Tip "Dual-track Agile (adaptado)"

    <p style="text-indent: 50px;text-align: justify;">Dual-Track Agile (adapatado) é um abordagem que vai dividir o processo de desenvolvimento de software em duas trilhas paralela:</P>


    <p style="text-indent: 50px;text-align: justify;">Desenvolvimento e Testes. Fazendo uma entrega contínua que visa otimizar desenvolvimento e validação, com uma implementação eficiente.</P>

### **Etapa 4 - Testes**

<p style="text-indent: 50px;text-align: justify;">Na etapa de testagem será feito os testes de todas as funcionalidades da aplicação</p>

| Etapa    | Método                              | Ferramenta            | Entregas        |
| -------- | ----------------------------------- | --------------------- | --------------- |
| Testagem | Testes Unitários, Testes End-to-end | Jest, Pytest, Cypress | Produto testado |
