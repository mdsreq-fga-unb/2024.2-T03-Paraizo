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

1. O administrador acessa o sistema ConnectCare e realiza login.  
2. O administrador seleciona o painel administrativo na tela principal.  
3. O administrador seleciona a opção "Monitorar Indicadores de Desempenho" no painel administrativo.  
4. O sistema exibe os principais indicadores de desempenho, incluindo:  
   - Número de atendimentos realizados.  
   - Tempo médio de espera por consulta.  
   - Taxa de satisfação dos usuários.  
   - Quantidade de consultas agendadas e concluídas.  
5. O sistema apresenta as seguintes opções:  
   - Filtrar análise entre datas específicas  
   - Exportar indicadores em formato PDF ou XML  
6. O administrador filtra para um período específico.  
7. O sistema atualiza os indicadores com o período específico.  
8. Caso de uso encerrado.  

### **4.2 Fluxos Alternativos**  

#### **[FA01] Aplicar Filtros Personalizados**  
4a. O administrador pode aplicar filtros avançados, como localização, tipo de atendimento e período específico.  

#### **[FA02] Comparar Desempenho**  
4b. O administrador pode selecionar dois períodos distintos para comparar os indicadores de desempenho.  

---

**5. Fluxos de Exceção**  

#### **[FE01] Falha na Conexão com o Banco de Dados**  
- Se houver erro ao recuperar os dados, o sistema exibe uma mensagem de erro e sugere tentar novamente mais tarde.  

#### **[FE02] Nenhum Dado Disponível**  
- Se não houver dados disponíveis para o período selecionado, o sistema exibe uma mensagem informativa e sugere ajustar os filtros.  

---

**6. Requisitos Especiais**  

- O sistema deve permitir a exportação dos relatórios nos formatos CSV e PDF.  
- A interface deve ser responsiva para acesso via dispositivos móveis.  

---

**7. Regras de Negócio**  

- Apenas administradores autenticados podem acessar os indicadores de desempenho.  
- Os relatórios devem ser gerados com dados anonimizados para preservar a privacidade dos usuários.  

---

**8. Precondições**  

- O administrador deve estar autenticado no sistema.  
- O sistema deve estar conectado ao banco de dados para recuperar as informações.  

---

**9. Pós-condições**  

- O administrador obtém insights sobre o desempenho da plataforma e pode tomar decisões baseadas nos dados.  
- Os relatórios podem ser utilizados para futuras estratégias de melhoria.  

---

**10. Pontos de Extensão**  

- Este caso de uso pode ser estendido para permitir o cruzamento de dados com outras fontes externas de informações de saúde.  
