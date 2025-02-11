# **ConnectCare**  

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                        **Descrição**                         |                **Autor**                 |
    | :------: | :--------: | :----------------------------------------------------------: | :----------------------------------------: |
    |  10/02   |    1.0     | Criação do documento e inserção de documentação              | Maykon Júnio dos Santos Soares           |

---

## Especificação de Caso de Uso: Receber Sugestões Personalizadas

### 1. Breve Descrição

Este caso de uso tem o propósito de fornecer ao usuário sugestões personalizadas com base em seu perfil, histórico de saúde e preferências cadastradas. Tais sugestões podem incluir recomendações de hábitos saudáveis, dicas de exercícios, orientações nutricionais, lembretes de consultas e exames, entre outros, com o objetivo de promover a melhoria da qualidade de vida.

### 2. Atores

- **Usuário (Paciente):** Responsável por solicitar e visualizar as sugestões personalizadas.
- **Sistema ConnectCare:** Processa os dados do usuário e gera as sugestões conforme as regras de negócio.

### 3. Fluxo Básico de Eventos

1. O caso de uso é iniciado quando o usuário seleciona a opção **"Receber Sugestões Personalizadas"** na interface do ConnectCare.
2. O sistema verifica se o usuário está autenticado e se o perfil possui as informações necessárias para a personalização **[RN01]**.
3. O sistema processa os dados do perfil, histórico de saúde e preferências cadastradas para gerar as sugestões **[RN02]**.
4. O sistema exibe as sugestões personalizadas, organizadas por categorias (ex.: alimentação, exercícios, cuidados médicos) **[RN03]**.
5. O usuário pode clicar em cada sugestão para visualizar detalhes, orientações e recomendações adicionais.
6. O sistema registra o evento de entrega de sugestões para fins de auditoria e análise de uso **[RN04]**.
7. O caso de uso é encerrado.

### 4. Fluxos Alternativos

#### A1. Perfil Incompleto

No passo 2 do fluxo básico, caso o sistema identifique que o perfil do usuário está incompleto ou desatualizado:

1. O sistema exibe uma mensagem solicitando a atualização do perfil para melhorar a precisão das sugestões **[RN01]**.
2. O usuário pode optar por atualizar seu perfil imediatamente ou continuar sem atualizar.
3. Se optar pela atualização, o sistema redireciona o usuário para o módulo de atualização de perfil.
4. Após a atualização, o usuário retorna ao caso de uso, e o fluxo recomeça a partir do passo 2.

#### A2. Usuário Opta por Não Receber Sugestões

No passo 1, o usuário pode optar, previamente, por desabilitar a funcionalidade de sugestões personalizadas nas configurações do sistema:

1. O sistema confirma a escolha do usuário e encerra o caso de uso sem processar ou exibir sugestões.

### 5. Fluxos de Exceção

#### FE1. Falha na Geração de Sugestões [FE1]

Durante o processamento dos dados (passo 3), se ocorrer uma falha (por exemplo, dados inconsistentes ou insuficientes para a personalização):

1. O sistema exibe uma mensagem informando ao usuário que não foi possível gerar sugestões no momento **[FE1]**.
2. O evento de falha é registrado, e o caso de uso é encerrado.

#### FE2. Erro de Comunicação com o Serviço de Sugestões [FE2]

Se o sistema depender de um serviço externo para o processamento e ocorrer um erro de comunicação:

1. O sistema informa ao usuário que, devido a uma indisponibilidade temporária, as sugestões não podem ser geradas **[FE2]**.
2. O usuário é orientado a tentar novamente mais tarde, e o caso de uso é encerrado.

### 6. Pré-Condições

- O usuário deve estar autenticado (logado) no sistema.
- O perfil do usuário deve conter, no mínimo, informações básicas de saúde e preferências para viabilizar a personalização.

### 7. Pós-Condições

- As sugestões personalizadas foram apresentadas ao usuário com sucesso.
- O evento de exibição das sugestões foi registrado para fins de auditoria e análise de uso.

### 8. Pontos de Extensão

- **Integração com dispositivos de monitoramento de saúde:** Permitir a coleta de dados em tempo real para aprimorar as sugestões.
- **Módulo de feedback:** Coletar opiniões do usuário sobre a utilidade das sugestões para refinar o algoritmo de personalização.

### 9. Requisitos Especiais

- O sistema deve processar e exibir as sugestões em tempo real, sem comprometer a performance da aplicação.
- As sugestões devem ser geradas com base em regras de negócio atualizadas e no histórico de interações do usuário.
- A privacidade e segurança dos dados dos usuários devem ser garantidas, em conformidade com as normas de proteção de dados vigentes.

### 10. Regras de Negócio

- **[RN01] Validação de Perfil:** O perfil do usuário deve conter todas as informações obrigatórias (ex.: nome, idade, histórico de saúde, preferências) para a geração de sugestões personalizadas.
- **[RN02] Processamento de Dados:** As sugestões devem ser geradas com base no processamento correto dos dados do perfil, histórico e preferências do usuário.
- **[RN03] Exibição de Sugestões:** Somente as sugestões que atendam aos critérios de relevância e privacidade devem ser exibidas ao usuário.
- **[RN04] Registro de Eventos:** Todos os eventos de geração e exibição de sugestões devem ser registrados para auditoria e análise de uso.

### 11. Informações Adicionais

- A funcionalidade de sugestões personalizadas pode ser ativada ou desativada nas configurações do usuário.
- Recomenda-se que o sistema ofereça a opção de fornecer feedback sobre as sugestões, para que seja possível aprimorar continuamente o algoritmo de personalização.

## Especificação de Caso de Uso: Criar perfil básico

### 1. Breve Descrição

Este caso de uso tem o propósito de criar perfis de usuário para as pessoas que estão buscando profissionais de saúde para realizar seus tratamentos.

### 2. Atores

- **Usuário (Paciente):** Paciente que deseja criar seu perfil de usuário.

### 3. Fluxo Básico de Eventos

Este caso de uso é iniciado quando o paciente deseja cadastrar seu perfil de usuário na plataforma.

1. O caso de uso é iniciado quando o paciente seleciona a opção “Cadastrar perfil”;
2. O paciente seleciona o tipo de perfil “Paciente”;
3. O paciente insere os seguintes dados:
    - Nome completo;
    - Data de nascimento;
    - CPF;
    - Telefone celular;
    - E-mail;
    - Senha;
    - Confirmação de senha;
    - Endereço.
4. O paciente seleciona a opção de “Criar perfil”;
5. O sistema cria o novo perfil com os dados cadastrados;
6. O caso de uso é encerrado.

### 4. Fluxos Alternativos

##### [FA 01] Cancelar operação.

1. No passo de inserir os dados para cadastrar o perfil, o paciente pode optar por cancelar essa operação ao selecionar a opção “Cancelar”.

##### [FA 02] Prosseguir com o cadastro de informações do perfil.

1. Após o passo de inserir os dados para cadastrar o perfil, o paciente pode selecionar a opção de “Inserir informações complementares”;
2. O paciente insere as seguintes informações adicionais:
    - Especialidades médicas que mais precisa atualmente;
    - Doenças acometidas atualmente;
    - Medicamentos utilizados;
    - Quantidade de pessoas residentes com ele;
    - Se é PcD;
    - Se for PcD, especificar.
3. O paciente seleciona a opção “Completar cadastro”.
4. O caso de uso é encerrado.

### 5. Fluxos de Exceção

#### [FE 01] Usuário já cadastrado.

1. No passo 3.1.4 do fluxo básico, o sistema acusa que já existe um perfil cadastrado com os dados de CPF e/ou E-mail e retorna ao passo 3.1.3

#### [FE 02] Data de nascimento inválida.

1. No passo 3.1.4 do fluxo básico, o usuário insere uma data de nascimento posterior à data atual. Isso retorna ao passo 2 do fluxo básico.

### 6. Pré-Condições

- O usuário não deve ter um perfil já cadastrado com seus dados.

### 7. Pós-Condições

1. Acesso à página de “Meu perfil”: Ao encerrar o caso de uso, o usuário poderá acessar a seção com todas as informações de seu perfil de usuário, sendo possível editar as informações cadastradas anteriormente (exceto “e-mail” e “CPF”).

### 8. Requisitos Especiais

- O sistema deve impedir que o usuário tente finalizar o cadastro caso um dos campos do formulário esteja em branco;
- O sistema deve sugerir ao usuário, caso tente cadastrar uma conta já existente, que ele vá para seção de login de contas de usuário;
- O sistema não deve permitir que o usuário cadastre uma conta usando sistemas de terceiros (como contas Google, Facebook ou outros).
