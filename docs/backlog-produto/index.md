# **Backlog do Produto**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |              **Descrição**              |           **Autor**            |
    | :------: | :--------: | :-------------------------------------: | :----------------------------: |
    |  01/11   |    1.0     | Criação do tópico de Backlog do Produto | Maykon Júnio dos Santos Soares |

---

### **Histórias de Usuários**

### **Critérios de Aceitação**

### **Priorização**

### **Definition of Ready (DoR) e Definition of Done (DoD)**

#### **_Definition of Ready_ (DoR)**

!!! info "Sobre"

    O DoR é um conjunto de critérios que fala sobre quando um item, independente de ser uma história, tarefa ou épico, está pronto para a equipe de desenvolvimento trabalhar nela ou outro grupo no projeto. O que significa que é um acordo feito entre as partes interessadas – Product Owner, equipe de desenvolvimento, stakeholders, etc. o qual garante clareza, alinhamento e pré-requisitos para o trabalho poder ser feito. Os critérios para realização do DoR serão listados abaixo:

| Critério                   | Descrição                                                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Clareza**                | A descrição da história deve estar clara e bem compreendida. Deve seguir o formato “Eu como… quero… para…” com detalhes suficientes para a equipe entender o que precisa ser feito. |
| **Critérios de Aceitação** | Os critérios de aceitação devem estar definidos para garantir que os objetivos do requisito sejam entendidos.                                                                       |
| **Priorização**            | O requisito deve ter sido priorizado e ter um valor definido para o negócio, alinhado com os objetivos do projeto.                                                                  |
| **Dependência**            | Todas as dependências do requisito precisam ser identificadas e tratadas para que o desenvolvimento possa prosseguir.                                                               |
| **Validação**              | O requisito deve ser analisado e aprovado pelo Product Owner para garantir que está alinhado com as necessidades dele.                                                              |
| **Tamanho**                | O item precisa ter um tamanho adequado para ser completado dentro de uma sprint ou período estipulado.                                                                              |

#### **Definition of Done (DoD)**

!!! info "Sobre"

    O Definition of Done (DoD) é usado para garantir a qualidade e a consistência do trabalho entregue pela equipe a partir de uma definição clara e objetiva de critérios que precisam ser atendidos para que um item do backlog (User Story) seja considerado como concluído. A seguir, será apresentado os critérios escolhidos pela equipe para composição do DoD:

| Critério                                            | Descrição                                                                                                                                           |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código segue os padrões do projeto**              | O código deve respeitar os padrões estabelecidos pela equipe, como padronização de tecnologias, bibliotecas, nomenclaturas e comentários de código. |
| **Código submetido a testes**                       | O código deve passar por testes unitários, de integração e end to end.                                                                              |
| **Respeitar os critérios de aceite da User Story**  | O código deve atender aos critérios de aceitação específicos da User Story.                                                                         |
| **Código aprovado pelo QA**                         | O código deve passar por uma revisão de QA e ser aprovado antes da entrega.                                                                         |
| **Entrega segue os padrões definidos no protótipo** | O código deve estar conforme o design prototipado, ser responsivo e seguir as diretrizes de acessibilidade da WCAG.                                 |
| **Código da User Story deve estar documentado**     | A nova funcionalidade deve ser documentada para facilitar manutenção futura.                                                                        |
| **Código deve estar livre de bugs**                 | O código deve ser verificado para garantir que não tenha bugs de qualquer severidade.                                                               |

### **MVP**

|                        User Story                          |                                                 Justificativa                                                  |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **[US01]** Cadastrar ficha do paciente <br> **[US04]** Editar ficha do paciente <br> **[US05]** Consultar ficha do paciente <br> **[US08]** Excluir ficha do paciente | O administrador deve conseguir criar e gerenciar fichas dos pacientes para a realização dos atendimentos. |
| **[US02]** Cadastrar perfil usuário administrador <br> **[US06]** Autenticar usuário <br> **[US07]** Cadastrar perfil usuário paciente <br> **[US13]** Exluir perfil usuário administrador <br> **[US16]** Editar perfil usuário administrador <br> **[US17]** Editar perfil usuário paciente <br> **[US18]** Recuperar senha <br> **[US19]** Consultar perfil usuário administrador <br> **[US20]** Consultar perfil usuário paciente <br> **[US24]** Exluir perfil usuário paciente | Os usuários devem conseguir se cadastrar e gerencias suas contas para conseguir utilizar o sistema. |
| **[US03]** Cadastrar relatório de avaliação <br> **[US12]** Editar relatório de avaliação <br> **[US15]** Visualizar relatório de avaliação <br> **[US21]** Visualizar relatório de avaliação do paciente <br> **[US22]** Excluir relatório de avaliação <br> **[US23]** Salvar relatório de avaliação do paciente | O administrador deve conseguir criar relatórios para informar o andamento dos pacientes e os clientes devem conseguir visualizá-los. |
| **[US09]** Cadastrar atendimento na agenda <br> **[US10]** Excluir atendimento na agenda <br> **[US11]** Editar atendimento na agenda <br> **[US14]** Consultar atendimento na agenda | Os clientes devem conseguir agendar uma consulta para a realização dos atendimentos. |

#### **Release 2**

|                                 User Story                                 |                                             Justificativa                                              |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **[US25]** Aprovar depoimento <br> **[US26]** Consultar depoimento <br> **[US27]** Cadastrar depoimento <br> **[US28]** Editar depoimento <br> **[US29]** Excluir depoimento | O cliente deve conseguir registrar seu depoimento e o administrador deve aprová-lo e gerenciá-lo. |