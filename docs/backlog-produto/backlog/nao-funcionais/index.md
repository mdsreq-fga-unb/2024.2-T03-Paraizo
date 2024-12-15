# **Requisitos Não Funcionais**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |              **Descrição**              |           **Autor**            |
    | :------: | :--------: | :-------------------------------------: | :----------------------------: |
    |  01/11   |    -0     | Criação do tópico de Backlog do Produto | Maykon Júnio dos Santos Soares |
    |  15/12   |    -0     | Adição dos artefatos | Pedro Miguel M. de O. dos Santos, Maykon Júnio dos Santos Soares |

## **Requisitos**

| **Requisito**                                              | **URPS+**       |
| ---------------------------------------------------------- | --------------- |
| **[RNF01]** Oferecer uma interface responsiva              | Usabilidade     |
| **[RNF02]** Oferecer nível de acessibilidade AAA (WCAG -2) | Usabilidade     |
| **[RNF03]** Implementar SEO                                | Suportabilidade |
| **[RNF04]** Implementar protocolo HTTPS                    | Suportabilidade |
| **[RNF05]** Otimizar vídeos e imagens                      | Performance     |

## **Critérios de Aceitação**

| **Requisito**                                              | **Critérios de Aceitação**                                                                                                                                                                                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[RNF01]** Oferecer uma interface responsiva              | - A interface deve se ajustar corretamente em telas de 320px a 1920px. <br> - O layout deve ser completamente funcional em dispositivos móveis (smartphones e tablets). <br> - O design deve ser consistente entre diferentes navegadores (Chrome, Firefox, Safari).      |
| **[RNF02]** Oferecer nível de acessibilidade AAA (WCAG -2) | - O site deve ser navegável usando apenas o teclado (sem mouse). <br> - Todo texto deve ter contraste adequado (no mínimo 4.5:1) em relação ao fundo. <br> - O conteúdo multimídia deve ter legendas ou transcrições para tornar-se acessível.                            |
| **[RNF03]** Implementar SEO                                | - O site deve ser otimizado para motores de busca, utilizando meta tags adequadas. <br> - As URLs devem ser amigáveis, curtas e descritivas. <br> - O conteúdo deve incluir palavras-chave relevantes para o negócio e o público-alvo.                                    |
| **[RNF04]** Implementar protocolo HTTPS                    | - O site deve carregar apenas via HTTPS, redirecionando automaticamente as requisições HTTP. <br> - O certificado SSL deve ser válido e renovado automaticamente. <br> - O navegador deve exibir o cadeado verde na barra de endereço.                                    |
| **[RNF05]** Otimizar vídeos e imagens                      | - As imagens devem ser comprimidas sem perda significativa de qualidade. <br> - Os vídeos devem ser otimizados para carregamento rápido, com tamanho de arquivo reduzido. <br> - O tempo de carregamento das páginas com conteúdo multimídia não deve exceder 3 segundos. |
