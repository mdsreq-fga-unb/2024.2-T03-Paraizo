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

| **Requisito**                                              | **Critérios de Aceitação**                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[RNF01]** Oferecer uma interface responsiva              | - A interface deve ajustar seu layout para uma largura de tela variando de 320px a 1920px. <br> - O layout deve manter a funcionalidade completa em dispositivos móveis (smartphones e tablets), incluindo navegação e interação com elementos. <br> - O layout deve funcionar de forma consistente nos navegadores Chrome, Firefox e Safari, com o mesmo comportamento e apresentação visual.                               |
| **[RNF02]** Oferecer nível de acessibilidade AAA (WCAG -2) | - O site deve permitir navegação completa utilizando apenas o teclado, sem a necessidade de interagir com o mouse. <br> - Todo texto no site deve ter um contraste mínimo de 4.5:1 em relação ao fundo, conforme as diretrizes WCAG. <br> - Todo conteúdo multimídia, como vídeos e áudios, deve ter legendas ou transcrições disponíveis para garantir que usuários com deficiência auditiva possam acessar as informações. |
| **[RNF03]** Implementar SEO                                | - O site deve conter meta tags apropriadas em todas as páginas, como título, descrição e palavras-chave, para melhorar a indexação nos motores de busca. <br> - As URLs devem ser curtas, descritivas e utilizar palavras-chave relevantes. <br> - O conteúdo das páginas deve ser relevante para o público-alvo e incluir palavras-chave relacionadas ao negócio e temas de interesse.                                      |
| **[RNF04]** Implementar protocolo HTTPS                    | - O site deve ser carregado exclusivamente via HTTPS, com redirecionamento automático de qualquer requisição HTTP para HTTPS. <br> - O certificado SSL do site deve ser válido e configurado para renovação automática antes de expirar. <br> - O navegador deve exibir o ícone de cadeado verde na barra de endereço para indicar uma conexão segura.                                                                       |
| **[RNF05]** Otimizar vídeos e imagens                      | - Os vídeos devem ser otimizados para garantir que sejam carregados rapidamente, com tamanho de arquivo reduzido sem perda de qualidade perceptível. <br> - O tempo total de carregamento das páginas que contêm conteúdo multimídia não deve exceder 3 segundos após a requisição da página.                                                                                                                                |
