#### **Escala Likert e Pesos**

| **Critério**             | **Descrição**                                                                                     | **Peso** |
| ------------------------ | ------------------------------------------------------------------------------------------------- | -------- |
| **Valor de Negócio**     | O valor de retorno para o negócio do cliente                                                      | 4        |
| **Complexidade Técnica** | Complexidade técnica, ou seja, nível de dificuldade para programar cada requisito                 | -1       |
| **Criticidade**          | O risco crítico baseado na perda das funções no sistema e quanto isso pode afetar o sistema total | 2        |
| **Independência**        | Relação entre cada requisito e sua interdependência                                               | 3        |

---

#### **Escala de Valores**

| **Valor** | **Valor de Negócio** | **Complexidade Técnica** | **Criticidade**     | **Independência**      |
| --------- | -------------------- | ------------------------ | ------------------- | ---------------------- |
| 5         | 🔴 Muito importante  | 🔴 Muito complexo        | 🔴 Muito crítico    | 🔴 Independente        |
| 4         | 🟠 Importante        | 🟠 Complexo              | 🟠 Crítico          | 🟠 Pouco independente  |
| 3         | 🟡 Moderado          | 🟡 Médio                 | 🟡 Às vezes crítico | 🟡 Às vezes dependente |
| 2         | 🟢 Pouco importante  | 🟢 Pouco complexo        | 🟢 Pouco crítico    | 🟢 Dependente          |
| 1         | 🟣 Não é importante  | 🟣 Não é complexo        | 🟣 Não é crítico    | 🟣 Muito dependente    |

---

!!! Tip "Fórmula"

    $$
    \frac{(Vn \cdot 4 + Com \cdot (-1) + Crit \cdot 2 + Indep \cdot 3)}{9}
    $$

    ---

    ##### **Legenda**

    - \( Vn \): Valor de Negócio
    - \( Com \): Complexidade
    - \( Crit \): Criticidade
    - \( Indep \): Independência

---

??? danger "Priorização de cada membro da equipe"

    === "Maykon"

        === "Requisitos Funcionais"

            | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US01]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência   | 3    | 3    | 2   | 1     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US02]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 3    | 2   | 1     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US03]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 3    | 2   | 1     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US04]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 3    | 2   | 1     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US05]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados. | 3    | 3    | 2   | 1     | 2.2 🟢   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US08]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador | 5    | 5    | 4   | 4     | 4.5 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US11]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 5    | 5    | 5   | 5     | 5 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US13]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações. | 5    | 5    | 5   | 3     | 4.4 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente | 5    | 5    | 3   | 3     | 4 🟠     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US15]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US16]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 3    | 3    | 2   | 2     | 2.5 🟡   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações. | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US18]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário | 5    | 5    | 5   | 3     | 4.4 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US19]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil | 4    | 3    | 2   | 1     | 2.6 🟡   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos | 5    | 5    | 5   | 5     | 5 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas | 4    | 4    | 4   | 4     | 4 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista | 4    | 4    | 3   | 3     | 3.5 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados | 4    | 4    | 4   | 4     | 4 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 3    | 3    | 3   | 3     | 3 🟡     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes  | 2    | 2    | 2   | 2     | 2 🟡     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente | 1    | 1    | 1   | 1     | 1 🟢     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes | 2    | 2    | 1   | 1     | 1.5 🟡   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf | 1    | 1    | 1   | 1     | 1 🟢     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação | 3    | 3    | 3   | 3     | 3 🟠     |

        === "Requisitos Não Funcionais"

            | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | Suportabilidade | **[RNF03]** Implementar SEO                                 | 5                        | 2                     | 3                   | 4                     | 3.11 🟠   |
            | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 3                        | 4                     | 4                   | 2                     | 2.78 🟠   |
            | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 4                        | 3                     | 2                   | 3                     | 2.78 🟠   |
            | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 2                        | 3                     | 3                   | 4                     | 2.44 🟡   |
            | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3                        | 2                     | 4                   | 3                     | 2.78 🟠   |

    === "Marllon"

        === "Requisitos Funcionais"

            | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US01]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência   | 5    | 2    | 2   | 2     | 3.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US02]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados. | 2    | 3    | 1   | 2     | 1.9 🟡   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US03]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 2    | 1   | 2     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US04]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 2    | 1   | 2     | 2.2 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US05]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados. | 2    | 2    | 1   | 2     | 1.8 🟡   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida | 4    | 3    | 4   | 4     | 3.9 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida | 4    | 3    | 4   | 4     | 3.9 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US08]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida | 4    | 3    | 4   | 4     | 3.9 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida | 4    | 2    | 4   | 4     | 3.8 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador | 5    | 3    | 5   | 5     | 4.8 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US11]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas. | 1    | 3    | 1   | 1     | 1.2 🟡   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 1    | 3    | 1   | 1     | 1.2 🟡   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US13]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações. | 1    | 3    | 1   | 1     | 1.2 🟡   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente | 4    | 3    | 2   | 5     | 3.8 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US15]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 3    | 2   | 1     | 2.6 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US16]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 2    | 3    | 2   | 1     | 1.8 🟡   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações. | 4    | 3    | 2   | 1     | 2.6 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US18]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário | 4    | 3    | 2   | 5     | 3.8 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US19]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil | 5    | 4    | 5   | 1     | 3.7 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos | 5    | 4    | 5   | 5     | 4.9 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas | 5    | 4    | 5   | 1     | 3.7 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista | 5    | 4    | 5   | 1     | 3.7 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados | 5    | 5    | 5   | 1     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 5    | 5    | 5   | 5     | 5 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes  | 5    | 5    | 5   | 1     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente | 5    | 5    | 5   | 1     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes | 5    | 5    | 5   | 1     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf | 5    | 5    | 5   | 1     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação | 5    | 5    | 5   | 1     | 3.8 🟠   |

        === "Requisitos Não Funcionais"

            | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | Suportabilidade | **[RNF03]** Implementar SEO                                 | 4                        | 3                     | 4                   | 3                     | 3.00 🟠   |
            | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 5                        | 2                     | 3                   | 3                     | 3.11 🟠   |
            | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 3                        | 3                     | 3                   | 4                     | 3.00 🟠   |
            | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 4                        | 2                     | 3                   | 2                     | 2.89 🟠   |
            | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3                        | 4                     | 2                   | 4                     | 2.78 🟠   |

    === "Erick"

        === "Requisitos Funcionais"

            | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US01]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência   | 1    | 1    | 1   | 1     | 1 🟢     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US02]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 1    | 1   | 2     | 1.3 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US03]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 1    | 2   | 2     | 1.5 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US04]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 1    | 1   | 2     | 1.3 🟢   |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US05]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados. | 1    | 1    | 1   | 2     | 1.3 🟢   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida | 4    | 3    | 4   | 2     | 3.3 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida | 4    | 2    | 4   | 3     | 3.5 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US08]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida | 4    | 2    | 4   | 3     | 3.5 🟠   |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida | 3    | 2    | 4   | 2     | 2.8 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador | 4    | 2    | 4   | 2     | 3.2 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US11]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 2    | 5   | 2     | 3.4 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 4    | 2    | 5   | 2     | 3.4 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US13]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações. | 4    | 2    | 4   | 2     | 3.2 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente | 4    | 2    | 5   | 2     | 3.4 🟠   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US15]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 2    | 3   | 2     | 3 🟠     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US16]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 4    | 2    | 2   | 2     | 2.8 🟡   |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações. | 5    | 2    | 4   | 2     | 3.6 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US18]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário | 4    | 2    | 5   | 2     | 3.4 🟠   |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US19]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil | 3    | 2    | 3   | 2     | 2.6 🟡   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos | 5    | 2    | 5   | 2     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas | 5    | 2    | 5   | 2     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista | 3    | 2    | 4   | 2     | 2.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados | 4    | 3    | 5   | 3     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 5    | 3    | 5   | 2     | 3.9 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes  | 4    | 3    | 5   | 3     | 3.8 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente | 4    | 3    | 4   | 4     | 3.9 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes | 5    | 2    | 3   | 2     | 3.4 🟠   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf | 3    | 2    | 2   | 3     | 2.7 🟡   |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação | 2    | 2    | 2   | 2     | 2 🟡     |

        === "Requisitos Não Funcionais"

            | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | Suportabilidade | **[RNF03]** Implementar SEO                                 | 4                        | 3                     | 2                   | 2                     | 2.44 🟡   |
            | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 3                        | 3                     | 4                   | 2                     | 2.67 🟡   |
            | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 4                        | 4                     | 3                   | 3                     | 3.00 🟠   |
            | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 2                        | 4                     | 4                   | 3                     | 2.67 🟡   |
            | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3                        | 2                     | 2                   | 4                     | 2.44 🟡   |



    === "Henrrique"

        === "Requisitos Funcionais"

            | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US01]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência | 2    | 2    | 1   | 1     | 1.5 🟡     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US02]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 3    | 1   | 2     | 2.3 🟠     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US03]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados. | 2    | 1    | 2   | 2     | 1.9 🟡     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US04]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados. | 3    | 2    | 1   | 2     | 2.2 🟠     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US05]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados. | 3    | 2    | 1   | 2     | 2.2 🟠     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida | 4    | 3    | 4   | 2     | 3.3 🟠     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida | 3    | 3    | 4   | 3     | 3.2 🟠     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US08]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida | 3    | 3    | 4   | 3     | 3.2 🟠     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida | 2    | 1    | 4   | 2     | 2.3 🟡     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador | 5    | 2    | 4   | 4     | 4.2 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US11]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas. | 3    | 2    | 5   | 2     | 3 🟠       |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 3    | 2    | 5   | 2     | 3 🟠       |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US13]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações. | 2    | 1    | 4   | 2     | 2.3 🟡     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente | 5    | 2    | 5   | 4     | 4.4 🟠     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US15]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas. | 3    | 2    | 3   | 2     | 2.6 🟡     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US16]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 3    | 2    | 2   | 2     | 2.4 🟡     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações. | 2    | 2    | 4   | 2     | 2.4 🟡     |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US18]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário | 5    | 2    | 5   | 2     | 3.8 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US19]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil | 4    | 3    | 3   | 2     | 3.1 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos | 5    | 2    | 5   | 3     | 4.1 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas | 5    | 3    | 5   | 2     | 3.9 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista | 5    | 3    | 4   | 2     | 3.7 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados | 5    | 3    | 4   | 2     | 3.7 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 5    | 3    | 4   | 4     | 4.3 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes  | 4    | 3    | 3   | 2     | 3.1 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente | 4    | 3    | 3   | 2     | 3.1 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes | 5    | 2    | 2   | 2     | 3.2 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf | 2    | 2    | 3   | 3     | 2.5 🟡     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação | 3    | 2    | 1   | 3     | 2.5 🟡     |

        === "Requisitos Não Funcionais"

            | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | Suportabilidade | **[RNF03]** Implementar SEO                                 | 3                        | 4                     | 3                   | 3                     | 2.78 🟠   |
            | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 5                        | 2                     | 4                   | 4                     | 3.33 🟠   |
            | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 4                        | 3                     | 4                   | 2                     | 3.00 🟠   |
            | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 2                        | 2                     | 2                   | 4                     | 2.44 🟡   |
            | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3                        | 3                     | 3                   | 3                     | 2.67 🟡   |



    === "Pedro"

        === "Requisitos Funcionais"

            | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US01]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência   | 1    | 3    | 1   | 1     | 1.2 🟡     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US02]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 3    | 1   | 3     | 1.8 🟠     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US03]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 3    | 1   | 2     | 1.5 🟡     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US04]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados. | 1    | 3    | 1   | 1     | 1.2 🟡     |
            | **[TM01]** Gestão de Depoimentos  | **[EP01]** Gestão de Depoimentos       | **[US05]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados. | 1    | 1    | 1   | 3     | 1.6 🟡     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida | 3    | 2    | 3   | 3     | 2.9 🟠     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida | 2    | 3    | 3   | 2     | 2.3 🟡     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US08]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida | 3    | 2    | 2   | 2     | 2.4 🟡     |
            | **[TM02]** Gestão de Atendimento  | **[EP02]** Gestão de Atendimento       | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida | 3    | 1    | 3   | 2     | 2.5 🟡     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador | 4    | 2    | 5   | 5     | 4.3 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US11]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas. | 4    | 3    | 4   | 3     | 3.6 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 4    | 1    | 2   | 3     | 3 🟠       |
            | **[TM03]** Gestão de usuário      | **[EP03]** Gestão de Administradores   | **[US13]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações. | 4    | 2    | 2   | 3     | 3.1 🟠     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente | 3    | 2    | 2   | 5     | 3.3 🟠     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US15]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas. | 3    | 3    | 3   | 2     | 2.7 🟡     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US16]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site. | 3    | 1    | 2   | 3     | 2.6 🟡     |
            | **[TM04]** Gestão de usuário      | **[EP04]** Gestão do Cliente           | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações. | 3    | 2    | 2   | 1     | 2.1 🟡     |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US18]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário | 4    | 3    | 4   | 3     | 3.6 🟠     |
            | **[TM03]** Gestão de usuário      | **[EP02]** Autenticação do usuário     | **[US19]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil | 2    | 3    | 3   | 2     | 2.3 🟡     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos | 5    | 1    | 5   | 4     | 4.3 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas | 5    | 2    | 5   | 3     | 4.1 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista | 5    | 1    | 5   | 4     | 4.3 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão da Ficha do Cliente  | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados | 5    | 1    | 5   | 3     | 4 🟠       |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 5    | 3    | 4   | 4     | 4.3 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes  | 3    | 3    | 3   | 3     | 3 🟠       |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente | 1    | 2    | 1   | 3     | 1.7 🟡     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes | 4    | 2    | 3   | 2     | 3 🟠       |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf | 5    | 2    | 3   | 2     | 3.4 🟠     |
            | **[TM05]** Gestão de documentos   | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação | 3    | 2    | 3   | 3     | 2.9 🟠     |


        === "Requisitos Não Funcionais"

            | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
            | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
            | Suportabilidade | **[RNF03]** Implementar SEO                                 | 3                        | 3                     | 3                   | 2                     | 2.67 🟡   |
            | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 4                        | 4                     | 2                   | 4                     | 3.00 🟠   |
            | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 4                        | 2                     | 3                   | 5                     | 3.11 🟠   |
            | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 2                        | 3                     | 3                   | 3                     | 2.67 🟡   |
            | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3                        | 3                     | 4                   | 3                     | 2.89 🟠   |

### **Priorização (Final)**

=== "Requisitos Funcionais"

    | **Temas**                        | **Épicos**                                | **História de Usuário**                                                                                                                     | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
    | -------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão da Ficha do Cliente     | **[US20]** Eu, como administrador, desejo cadastrar a ficha do paciente para preencher seus dados médicos, consultas e tratamentos          | 5                        | 2.8                   | 5                   | 3.8                   | 4.29 🔴   |
    | **[TM03]** Gestão de usuário     | **[EP03]** Gestão de Administradores      | **[US10]** Eu, como administrador, desejo me cadastrar no sistema, para conseguir utilizar as funcionalidades de administrador              | 4.6                      | 2.8                   | 4.4                 | 4                     | 4.04 🟠   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US24]** Eu, como administrador, desejo criar um relatório de avaliação de um paciente para documentar o andamento do tratamento do mesmo | 4.6                      | 3.4                   | 4.2                 | 3.6                   | 3.80 🟠   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão da Ficha do Cliente     | **[US21]** Eu, como administrador, desejo editar a ficha do paciente a fim de adicionar ou remover dados médicos, tratamentos e consultas   | 4.8                      | 3                     | 4.8                 | 2.4                   | 3.67 🟠   |
    | **[TM04]** Gestão de usuário     | **[EP04]** Gestão do Cliente              | **[US14]** Eu, como cliente, desejo me cadastrar no sistema para conseguir utilizar as funcionalidades correspondentes ao nível do cliente. | 4.2                      | 2.8                   | 3.4                 | 3.8                   | 3.58 🟠   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão da Ficha do Cliente     | **[US23]** Eu, como administrador, desejo consultar a ficha do paciente para verificar seus dados cadastrados                               | 4.6                      | 3.2                   | 4.6                 | 2.6                   | 3.58 🟠   |
    | **[TM03]** Gestão de usuário     | **[EP02]** Autenticação do usuário        | **[US07]** Eu, como usuário, desejo autenticar meu perfil para acessar funcionalidades correspondentes ao nível do usuário                  | 4.4                      | 3                     | 4.2                 | 3                     | 3.56 🟠   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão da Ficha do Cliente     | **[US22]** Eu, como administrador, desejo excluir a ficha do paciente para manter somente os pacientes ativos em minha lista                | 4.4                      | 2.8                   | 4.2                 | 2.4                   | 3.38 🟠   |
    | **[TM02]** Gestão de Atendimento | **[EP02]** Gestão de Atendimento          | **[US06]** Eu, como usuário, desejo cadastrar um horário de atendimento em qualquer modalidade oferecida                                    | 3.8                      | 3                     | 3.6                 | 2.8                   | 3.09 🟡   |
    | **[TM02]** Gestão de Atendimento | **[EP02]** Gestão de Atendimento          | **[US11]** Eu, como usuário, desejo excluir um horário de atendimento em qualquer modalidade oferecida                                      | 3.6                      | 2.8                   | 3.4                 | 3                     | 3.04 🟡   |
    | **[TM02]** Gestão de Atendimento | **[EP02]** Gestão de Atendimento          | **[US07]** Eu, como usuário, desejo editar um horário de atendimento em qualquer modalidade oferecida                                       | 3.4                      | 3                     | 3.6                 | 3                     | 2.98 🟡   |
    | **[TM03]** Gestão de usuário     | **[EP03]** Gestão de Administradores      | **[US12]** Eu, como administrador, devo excluir meu perfil do sistema para remover qualquer vínculo com o site.                             | 3.4                      | 2.6                   | 3.6                 | 2.6                   | 2.89 🟡   |
    | **[TM02]** Gestão de Atendimento | **[EP02]** Gestão de Atendimento          | **[US09]** Eu, como usuário, desejo consultar um horário de atendimento em qualquer modalidade oferecida                                    | 3.2                      | 2                     | 3.6                 | 2.6                   | 2.87 🟡   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US25]** Eu, como administrador, desejo editar os relatórios de avaliação dos pacientes                                                   | 3.6                      | 3.2                   | 3.6                 | 2.2                   | 2.78 🟡   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US27]** Eu, como administrador, desejo visualizar os relatórios de avaliação dos pacientes                                               | 4.2                      | 2.6                   | 2.8                 | 1.6                   | 2.73 🟡   |
    | **[TM03]** Gestão de usuário     | **[EP03]** Gestão de Administradores      | **[US13]** Eu, como administrador, desejo editar meu perfil para alterar informações que estejam incorretas.                                | 3.2                      | 2.8                   | 3.6                 | 2.2                   | 2.64 🟡   |
    | **[TM03]** Gestão de usuário     | **[EP03]** Gestão de Administradores      | **[US14]** Eu, como administrador, desejo consultar meu próprio perfil para verificar minhas informações.                                   | 3.2                      | 2.6                   | 3.2                 | 2.2                   | 2.58 🟡   |
    | **[TM04]** Gestão de usuário     | **[EP04]** Gestão do Cliente              | **[US16]** Eu, como cliente, desejo editar meu perfil para alterar informações que estejam incorretas.                                      | 3.6                      | 2.8                   | 2.8                 | 2                     | 2.58 🟡   |
    | **[TM04]** Gestão de usuário     | **[EP04]** Gestão do Cliente              | **[US17]** Eu, como cliente, desejo consultar meu próprio perfil para verificar minhas informações.                                         | 3.6                      | 2.6                   | 3                   | 1.8                   | 2.58 🟡   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US29]** Eu, como usuário, desejo visualizar meus relatórios de avaliação                                                                 | 3.2                      | 2.8                   | 2.8                 | 2.4                   | 2.53 🟡   |
    | **[TM03]** Gestão de usuário     | **[EP02]** Autenticação do usuário        | **[US06]** Eu, como usuário, desejo recuperar minha senha para voltar a acessar meu perfil                                                  | 3.6                      | 3                     | 3.2                 | 1.6                   | 2.51 🟡   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US28]** Eu, como usuário, desejo salvar meu relatório de avaliação no formato .pdf                                                       | 3.2                      | 2.4                   | 2.8                 | 2                     | 2.44 🟡   |
    | **[TM05]** Gestão de documentos  | **[EP05]** Gestão de relatório do Cliente | **[US26]** Eu, como administrador, desejo excluir um relatório de avaliação de um paciente                                                  | 3                        | 2.8                   | 2.8                 | 2.2                   | 2.38 🟡   |
    | **[TM04]** Gestão de usuário     | **[EP04]** Gestão do Cliente              | **[US18]** Eu, como cliente, desejo excluir meu perfil do sistema para remover qualquer vínculo com o site.                                 | 3                        | 2.2                   | 2                   | 2                     | 2.20 🟡   |
    | **[TM01]** Gestão de Depoimentos | **[EP01]** Gestão de Depoimentos          | **[US01]** Eu, como administrador, desejo consultar depoimentos para manter o controle sobre os relatos apresentados.                       | 2                        | 2                     | 1.6                 | 1.8                   | 1.62 🟢   |
    | **[TM01]** Gestão de Depoimentos | **[EP01]** Gestão de Depoimentos          | **[US02]** Eu, como administrador, desejo excluir depoimentos para manter o controle sobre os relatos apresentados.                         | 2                        | 1.8                   | 1.2                 | 2                     | 1.62 🟢   |
    | **[TM01]** Gestão de Depoimentos | **[EP01]** Gestão de Depoimentos          | **[US03]** Eu, como usuário, desejo registrar depoimentos para relatar minha experiência                                                    | 2.4                      | 2.2                   | 1.4                 | 1.2                   | 1.53 🟢   |
    | **[TM01]** Gestão de Depoimentos | **[EP01]** Gestão de Depoimentos          | **[US04]** Eu, como administrador, desejo aprovar depoimentos para manter o controle sobre os relatos apresentados.                         | 2                        | 2.6                   | 1.2                 | 2                     | 1.53 🟢   |
    | **[TM01]** Gestão de Depoimentos | **[EP01]** Gestão de Depoimentos          | **[US05]** Eu, como administrador, desejo editar depoimentos para manter o controle sobre os relatos apresentados.                          | 2.2                      | 2.2                   | 1.2                 | 1.6                   | 1.53 🟢   |

=== "Requisitos Não Funcionais"

    | **URPS+**       | **Requisito**                                               | **Valor de Negócio (4)** | **Complexidade (-1)** | **Criticidade (2)** | **Independência (3)** | **Total** |
    | --------------- | ----------------------------------------------------------- | ------------------------ | --------------------- | ------------------- | --------------------- | --------- |
    | Performance     | **[RNF05]** Otimizar vídeos e imagens                       | 4.00                     | 3.20                  | 3.00                | 3.80                  | 3.00 🟠   |
    | Usabilidade     | **[RNF01]** Oferecer uma interface responsiva               | 4.20                     | 3.00                  | 3.80                | 3.00                  | 2.98 🟠   |
    | Suportabilidade | **[RNF03]** Implementar SEO                                 | 4.00                     | 2.80                  | 3.20                | 3.20                  | 2.98 🟠   |
    | Usabilidade     | **[RNF02]** Oferecer nível de acessibilidade AA (WCAG 2.2) | 2.40                     | 3.00                  | 3.20                | 3.40                  | 2.61 🟡   |
    | Suportabilidade | **[RNF04]** Implementar protocolo HTTPS                     | 3.00                     | 3.00                  | 3.20                | 3.40                  | 2.71 🟡   |
