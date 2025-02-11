# **ConnectCare**  

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                        **Descrição**                         |                **Autor**                 |
    | :------: | :--------: | :----------------------------------------------------------: | :----------------------------------------: |
    |  10/02   |    1.0     | Adição do caso de uso | Pedro Miguel M. de O. dos Santos |

---

**Especificação de Caso de Uso: Monitorar Indicador de Desempenho**

**1. Identificação**

- **Sistema:** ConnectCare
- **Versão:** 1.0
- **Data:** 10/02/2025
- **Caso de Uso:** UC002
- **Autor:** Pedro Miguel Martins de Oliveira dos Santos

---

**2. Breve Descrição**  
O caso de uso "Monitorar Indicador de Desempenho" permite que o administrador do sistema ConnectCare visualize e analise indicadores-chave de desempenho (KPIs) relacionados ao uso da plataforma, como número de atendimentos realizados, tempo médio de espera e feedback dos usuários. A funcionalidade auxilia na avaliação da eficiência do sistema e no planejamento de melhorias.

---

**3. Atores**  

- **Administrador:** Responsável por acessar, monitorar e interpretar os indicadores de desempenho do ConnectCare.

---

**4. Fluxo de Eventos**  

### **4.1 Fluxo Principal**  

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

### **4.2 Fluxos Alternativos**  

#### **4.2.1 [FA01] Exportar indicadores em formato PDF**

      No passo 4.1.2 do Fluxo Principal o Administrador seleciona a opção de exportar indicadores em formato PDF

__4.2.1.1__ O sistema exibe um resumo do documento que será exportado.
__4.2.1.2__ O sistema solicita o local de salvamento do documento.
__4.2.1.3__ O administrador preenche com o local desejado.
__4.2.1.4__ O sistema exporta o arquivo.
__4.2.1.5__ Caso de uso é encerrado.

#### **4.2.2 [FA02] Exportar indicadores em formato XML**

      No passo 4.1.2 do Fluxo Principal o Administrador seleciona a opção de exportar indicadores em formato XML

__4.2.1.1__ O sistema exibe um resumo do documento que será exportado.
__4.2.1.2__ O sistema solicita o local de salvamento do documento.
__4.2.1.3__ O administrador preenche com o local desejado.
__4.2.1.4__ O sistema exporta o arquivo.
__4.2.1.5__ Caso de uso é encerrado.

---

**5. Fluxos de Exceção**  

#### **[FE01] Falha na Conexão com o Banco de Dados**  
   No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

#### **[FE02] Nenhum Dado Disponível**  
   No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

#### **[FE03] Período selecionado não encontrado**  
   No passo 4.1.4 o sistema não encontra o período selecionado e apresenta a mensagem. O sistema retorna ao passo 4.1.2 conforme o local de onde foi chamado.

---

**6. Requisitos Especiais**  

- A interface deve ser responsiva para acesso via dispositivos móveis.  

---

**7. Regras de Negócio**  

__7.1 [RN01] Validação do período selecionado__

   As seguintes informações devem ser validadas:

| Nome | Formato | Obrigatoriedade | Valores |
|:----:|:----:|:----:|:----:|
| Período | 99/99/99 - 99/99/99 | Sim | Primeiro registro;Data atual |

---

**8. Precondições**  

- O administrador deve estar autenticado no sistema.  
- O sistema deve estar conectado ao banco de dados para recuperar as informações.  

---

