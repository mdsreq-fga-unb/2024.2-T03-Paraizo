# **ConnectCare**  

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                        **Descrição**                         |                **Autor**                 |
    | :------: | :--------: | :----------------------------------------------------------: | :----------------------------------------: |
    |  10/02   |    1.0     | Criação do documento e inserção de documentação              | Maykon Júnio dos Santos Soares           |
    |  10/02   |    1.1     | Continuação do documento e inserção de documentação          | Erick Miranda Santos          |
    |  10/02   |    1.2     | Adição do caso de uso Monitor Indicador de Desempenho  | Pedro Miguel M. de O. dos Santos |

---

## Diagrama dos casos de uso

Fizemos o diagrama na plataforma miro e é possível vê-lo abaixo:

<iframe width="768" height="432" src="https://miro.com/app/embed/uXjVLJ8O_A4=/?pres=1&frameId=3458764615780921551&embedId=841518112651" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

### Lista de casos de uso 

#### Ator: Paciente

1. **Fornecer feedbacks** – Permite que os usuários compartilhem suas opiniões sobre os serviços prestados, ajudando a aprimorar a plataforma.  
2. **Acessar recursos adicionais** – Garante que os usuários possam obter informações extras, como materiais educativos ou suporte especializado.  
3. **Receber confirmação automática** – Envia notificações aos usuários sobre agendamentos ou atualizações importantes.  
4. **Criar perfil básico** – Permite que novos usuários cadastrem suas informações na plataforma.  
5. **Receber sugestões personalizadas** – Oferece recomendações baseadas no histórico e nas necessidades do usuário.  
6. **Agendar serviço de saúde** – Facilita a marcação de consultas e procedimentos médicos.  

#### Ator: Administrador 

7. **Monitorar indicador de desempenho** – Acompanha métricas de saúde e progresso de tratamentos.  
8. **Corrigir erros técnicos** – Identifica e resolve problemas técnicos que possam impactar o funcionamento do sistema.  
9. **Garantir a segurança da informação** – Implementa medidas de proteção para manter os dados seguros.  
10. **Realizar ajustes no sistema** – Permite a manutenção e configuração da plataforma para garantir seu funcionamento ideal.  

#### Ator: Agente comunitário

11. **Criar relatório de condições de saúde nas comunidades** – Gera análises sobre o estado de saúde da população atendida.  
12. **Registrar visitas domiciliares** – Documenta atendimentos realizados em casa pelos profissionais de saúde.  

#### Ator: Agente comunitário e Profissional de saúde

13. **Criar perfil profissional** – Permite que médicos e outros profissionais registrem seus dados na plataforma.  
14. **Visualizar agenda de consultas** – Exibe os compromissos agendados para facilitar a organização.  
15. **Organizar fluxo de trabalho** – Estrutura as atividades dos profissionais de saúde dentro da plataforma.  

#### Ator: Profissional de saúde

16. **Acessar informações de agendamento** – Permite a consulta de detalhes sobre consultas marcadas.  
17. **Acessar histórico de médico de paciente** – Fornece acesso ao histórico de atendimentos médicos.  
18. **Atualizar prontuário de paciente** – Permite a inclusão e modificação de informações clínicas.  

#### Ator: Organização parceira

19. **Divulgar iniciativa de saúde** – Promove campanhas e ações preventivas para a comunidade.  
20. **Gerenciar iniciativa de saúde** – Administra programas de saúde, garantindo sua efetividade.  
21. **Visualizar relatório de impacto** – Exibe métricas e dados sobre a eficácia das iniciativas de saúde.  



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


# Especificação de Caso de Uso: Registrar Visitas Domiciliares

## 1. Breve Descrição
Este caso de uso tem o propósito de cadastrar visitas domiciliares, para que seja feito o controle das visitas realizadas pelos agentes comunitários nas residências dos pacientes.

## 2. Atores
- Agente comunitário

## 3. Fluxo Básico de Eventos
Este caso de uso é iniciado quando o agente comunitário registra uma visita domiciliar.

### 3.1 Fluxo Principal
3.1.1 O sistema apresenta as seguintes opções:
- Registrar nova visita domiciliar;
- Atualizar dados da visita [FA01];
- Inativar dados da visita [FA02];

3.1.2 O agente comunitário seleciona a opção de registrar uma nova visita domiciliar.

3.1.3 O sistema apresenta as informações a serem preenchidas para o registro de uma nova visita [RN03][FE02].

3.1.4 O agente comunitário preenche as informações e solicita o registro da visita.

3.1.5 O sistema valida as informações preenchidas [RN01] [FE01].

3.1.6 O sistema apresenta mensagem de registro realizado com sucesso.

3.1.7 O caso de uso é encerrado.

## 4. Fluxos Alternativos

### 4.1 [FA01] Atualizar dados da visita
No passo 3.1.1 do fluxo básico, o agente comunitário seleciona a opção para atualização cadastral da visita.

4.1.1 O sistema solicita que o agente de saúde informe o CEP, nome e CPF da visita que deseja atualizar.

4.1.2 O agente comunitário informa o CEP, nome e CPF e solicita a consulta [RN01][FE01].

4.1.3 O sistema apresenta os dados da visita desejada [RN03][FE02].

4.1.4 O agente comunitário realiza as atualizações necessárias.

4.1.5 O sistema valida os dados atualizados [FE01][RN01].

4.1.6 O sistema pergunta ao agente comunitário se o mesmo realmente deseja fazer as alterações.

4.1.7 O agente comunitário confirma as atualizações [FE03].

4.1.8 O sistema exibe uma mensagem de atualizações realizadas com sucesso.

4.1.9 O caso de uso é encerrado.

### 4.2 Inativar visita
No passo 3.1.1 do fluxo básico, o agente comunitário seleciona a opção para inativar uma visita.

4.2.1 O sistema solicita que o agente comunitário informe o CPF e o CEP da visita que deseja inativar.

4.2.2 O agente comunitário informa o CPF e o CEP e solicita a consulta.

4.2.3 O sistema apresenta os dados da visita que deseja (nome, CEP, CPF, telefone, endereço {número, quadra, cidade, estado}) [RN02][FE02].

4.2.4 O agente comunitário realiza a inativação da visita.

4.2.5 O sistema pergunta ao usuário se o mesmo realmente deseja fazer a inativação.

4.2.6 O agente comunitário confirma a inativação [FE03].

4.2.7 O sistema exibe a mensagem de inativação realizada com sucesso.

4.2.8 O caso de uso é encerrado.

### 4.3 Ativar visita
No passo 3.1.1 do fluxo básico, o agente comunitário seleciona a opção para ativar uma visita.

4.3.1 O sistema solicita que o agente comunitário informe o CPF e o CEP da visita que deseja ativar.

4.3.2 O agente comunitário informa o CPF e o CEP e solicita a consulta.

4.3.3 O sistema apresenta os dados da visita que deseja (nome, CEP, CPF, telefone, endereço {número, quadra, cidade, estado}) [RN03][FE02].

4.3.4 O agente comunitário realiza a ativação da visita.

4.3.5 O sistema pergunta ao usuário se o mesmo realmente deseja fazer a ativação.

4.3.6 O agente comunitário confirma a ativação [FE03].

4.3.7 O sistema exibe a mensagem de ativação realizada com sucesso.

4.3.8 O caso de uso é encerrado.

## 5. Fluxos de Exceção

### 5.1 [FE01] Validação de informações
Nos passos 3.1.5, 4.1.2, 4.1.5, o sistema verifica que uma ou mais informações não foram validadas (formato e/ou obrigatoriedade) e exibe mensagem informando ao agente comunitário. O sistema retorna ao passo 3.1.4, ou 4.1.1, ou 4.1.4 conforme o local de onde foi chamado.

### 5.2 [FE02] Visita não encontrada
Nos passos 3.1.3, 4.1.3, 4.1.4, 4.1.7, o sistema não encontra a visita informada pelo agente comunitário e apresenta mensagem. O sistema retorna ao passo 3.1.2, ou 4.1.2, ou 4.1.3, ou 4.1.6 conforme o local que foi chamado.

### 5.3 [FE03] Atualizações não Confirmadas
Nos passos 4.1.7, 4.2.6, 4.3.6, o sistema não confirma as atualizações. O sistema retorna ao passo 4.1.6, ou 4.2.5, ou 4.3.5 conforme o local que foi chamado.

## 6. Requisitos Especiais
O sistema deve possuir acessibilidade para Libras.

## 7. Regras de Negócio

### 7.1 [RN01] Validação de informações

| Campo        | Tipo                               | Obrigatório | Observações                |
|--------------|------------------------------------|-------------|----------------------------|
| **Nome**     | Texto até 100 caracteres           | Sim         | -                          |
| **CEP**      | Texto até 100 caracteres           | Sim         | -                          |
| **Endereço** | Texto até 100 caracteres           | Sim         | -                          |
| **Visita**   | Texto até 100 caracteres           | Sim         | -                          |
| **Data e Hora** | dd/mm/yyyy hh: mm:ss             | Sim         | -                          |
| **CPF**      | 999.999.999-99                     | Sim         | -                          |
| **Situação** | Ativo; Inativo                     | Sim         | -                          |


### 7.2 [RN02] Visitas de Situação Inativa
Apenas as visitas com a situação de “inativo” devem ser apresentadas como resultado da consulta.

### 7.3 [RN03] Visitas de Situação Ativa
Apenas as visitas com a situação de “ativas” devem ser apresentadas como resultado da consulta.

## 8. Precondições
- **Login**: Para utilizar este caso de uso, é necessário que o agente comunitário esteja “logado” na aplicação.

## 9. Pós-condições
- **Registro de Operações**: Ao final deste caso de uso, as operações realizadas devem ser registradas, com o objetivo de tornar possível a recuperação de informações sobre quem realizou as operações e quando.

## Especificação de Caso de Uso: Visualizar Agenda de Consultas

### 1. Breve Descrição

Este caso de uso descreve como o Profissional de Saúde visualiza sua agenda de consultas no sistema ConnectCare. A agenda exibe as consultas agendadas, com informações como data, horário, nome do paciente e histórico médico relevante.

### 2. Atores

- **Usuário (Profissional da Saúde)**: Responsável por realizar as consultas marcadas na agenda

### 3. Fluxo Básico de Eventos

1. O Profissional de Saúde acessa o sistema ConnectCare e faz login com suas credenciais.
2. O sistema valida as credenciais e exibe o painel principal do profissional.
3. O Profissional de Saúde seleciona a opção "Visualizar Agenda" no menu.
4. O sistema recupera as consultas agendadas para o profissional, filtrando por data e horário.
5. O sistema exibe a agenda, com as seguintes informações para cada consulta:
    - Nome do paciente.
    - Data e horário da consulta.
    - Histórico médico resumido (se disponível).
6. O Profissional de Saúde pode navegar pela agenda para visualizar consultas em diferentes dias.
7. O caso de uso termina quando o Profissional de Saúde fecha a agenda ou retorna ao painel principal.

### 4. Fluxos Alternativos

#### 4.1 Consultas sem histórico médico

- Se o paciente não possui histórico médico registrado no sistema, o sistema exibe uma mensagem indicando que não há informações adicionais disponíveis.

#### 4.2 Agenda vazia

- Se não houver consultas agendadas para o profissional na data selecionada, o sistema exibe uma mensagem informando que a agenda está vazia.

### 5. Fluxos de Exceção

#### 5.1 Falha na conexão com o banco de dados

- Se o sistema não conseguir se conectar ao banco de dados para recuperar as informações da agenda, uma mensagem de erro é exibida ao Profissional de Saúde, e o caso de uso é interrompido.
  
#### 5.2 Credenciais Inválidas

- Se as credenciais do Profissional de Saúde forem inválidas, o sistema exibe uma mensagem de erro e não permite o acesso à agenda.

### 6. Pré-Condições

#### 6.1 Profissional de Saúde Registrado

- O Profissional de Saúde deve estar registrado no sistema ConnectCare e possuir um perfil ativo.
  
#### 6.2 Conexão com a Internet

- O sistema deve estar conectado à internet para acessar o banco de dados e recuperar as informações da agenda.

### 7. Pós-Condições

#### 7.1 Agenda Visualizada

- O Profissional de Saúde visualiza sua agenda de consultas com sucesso.

#### 7.2 Dados Atualizados

- Caso o Profissional de Saúde tenha realizado alterações na agenda (como reagendamentos), o sistema atualiza os dados em tempo real.

### 8. Pontos de Extensão

#### 8.1 Reagendamento de Consultas

- O Profissional de Saúde pode optar por reagendar uma consulta diretamente na agenda, caso haja disponibilidade.

### 9. Requisitos Especiais

#### 9.1 Segurança de Dados

- O sistema deve garantir que apenas o Profissional de Saúde autorizado tenha acesso à sua agenda de consultas, seguindo as normas de proteção de dados.

## Especificação de Caso de Uso: Monitorar Indicador de Desempenho

### **1. Identificação**

- **Sistema:** ConnectCare
- **Versão:** 1.0
- **Data:** 10/02/2025
- **Caso de Uso:** UC002
- **Autor:** Pedro Miguel Martins de Oliveira dos Santos

---

### **2. Breve Descrição**  
O caso de uso "Monitorar Indicador de Desempenho" permite que o administrador do sistema ConnectCare visualize e analise indicadores-chave de desempenho (KPIs) relacionados ao uso da plataforma, como número de atendimentos realizados, tempo médio de espera e feedback dos usuários. A funcionalidade auxilia na avaliação da eficiência do sistema e no planejamento de melhorias.

---

### **3. Atores**  

- **Administrador:** Responsável por acessar, monitorar e interpretar os indicadores de desempenho do ConnectCare.

---

### **4. Fluxo de Eventos**  

#### **4.1 Fluxo Principal**  

__4.1.1__ O sistema exibe os principais indicadores de desempenho, incluindo:

- Número de atendimentos realizados.  
- Tempo médio de espera por consulta.  
- Taxa de satisfação dos usuários.  
- Quantidade de consultas agendadas e concluídas.

__4.1.2__ O sistema apresenta as seguintes opções:  

- Filtrar análise entre datas específicas;
- Exportar indicadores em formato PDF [FA01].
- Exportar indicadores em formato XML [FA02].  

__4.1.3__ O administrador filtra para um período específico. 

__4.1.4__ O sistema valida o período específico inserido [RN01] [FE01] [FE02] [FE03].  

__4.1.5__ O sistema atualiza os indicadores com o período específico.  

__4.1.6__ Caso de uso é encerrado.  

#### **4.2 Fluxos Alternativos**  

##### **4.2.1 [FA01] Exportar indicadores em formato PDF**

No passo 4.1.2 do Fluxo Principal o Administrador seleciona a opção de exportar indicadores em formato PDF

__4.2.1.1__ O sistema exibe um resumo do documento que será exportado.

__4.2.1.2__ O sistema solicita o local de salvamento do documento.

__4.2.1.3__ O administrador preenche com o local desejado.

__4.2.1.4__ O sistema exporta o arquivo.

__4.2.1.5__ Caso de uso é encerrado.

##### **4.2.2 [FA02] Exportar indicadores em formato XML**

No passo 4.1.2 do Fluxo Principal o Administrador seleciona a opção de exportar indicadores em formato XML

__4.2.1.1__ O sistema exibe um resumo do documento que será exportado.

__4.2.1.2__ O sistema solicita o local de salvamento do documento.

__4.2.1.3__ O administrador preenche com o local desejado.

__4.2.1.4__ O sistema exporta o arquivo.

__4.2.1.5__ Caso de uso é encerrado.

---

### **5. Fluxos de Exceção**  

#### **[FE01] Falha na Conexão com o Banco de Dados**  

No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

#### **[FE02] Nenhum Dado Disponível**  

No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

#### **[FE03] Período selecionado não encontrado**  

No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

---

### **6. Requisitos Especiais**  

- A interface deve ser responsiva para acesso via dispositivos móveis.  

---

### **7. Regras de Negócio**  

__7.1 [RN01] Validação do período selecionado__

   As seguintes informações devem ser validadas:

| Nome | Formato | Obrigatoriedade | Valores |
|:----:|:----:|:----:|:----:|
| Período | 99/99/99 - 99/99/99 | Sim | Primeiro registro;Data atual |

---

### **8. Precondições**  

- O administrador deve estar autenticado no sistema.  
- O sistema deve estar conectado ao banco de dados para recuperar as informações.  

---

