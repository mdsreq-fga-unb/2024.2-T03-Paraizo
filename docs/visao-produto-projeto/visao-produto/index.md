# **Visão Geral do Produto**

??? abstract "Histórico de Revisão"

    | **Data** | **Versão** |                **Descrição**                |                                      **Autor**                                       |
    | :------: | :--------: | :-----------------------------------------: | :----------------------------------------------------------------------------------: |
    |  08/11   |    1.0     | Criação das seção de visão geral do produto | Erick Miranda Santos <br> Maykon Júnio dos Santos Soares <br> Marllon Fausto Cardoso <br> Pedro Miguel M. de O. dos Santos |

---

## **Cenário atual do cliente e do négocio**

### **Introdução ao neógocio e contexto**

<p style="text-indent: 50px;text-align: justify;">
A PARAIZO é uma clínica de fisioterapia no Gama, Distrito Federal, fundada pela fisioterapeuta Janayna Paraizo. A clínica oferece serviços como Kinesio Taping, Acupuntura, Dry Needling, Ventosaterapia, RPG, entre outros, com foco no tratamento integrado de todo o corpo para melhorar a qualidade de vida dos pacientes. Operando atualmente de terça a quinta, a PARAIZO planeja expandir seu atendimento.</p>
<p style="text-indent: 50px;text-align: justify;">
No entanto, a clínica enfrenta desafios em divulgar seus serviços, organizar e armazenar os dados dos pacientes (atualmente geridos manualmente em papéis ou dispositivos de uma única funcionária) e agendar sessões, o que dificulta o crescimento do atendimento e sobrecarrega a equipe. Esses problemas resultam em baixa eficiência e limitação na capacidade de expansão e promoção do estabelecimento.</p>

### **Identificação da Oportunidade ou Problema**

<p style="text-indent: 50px;text-align: justify;"> As oportunidades para a clínica PARAIZO giram em torno de aumentar sua visibilidade e eficiência operacional. A criação de um website seria essencial para atrair novos clientes, permitindo que as pessoas conheçam melhor os serviços oferecidos, o perfil dos profissionais, os diferenciais da clínica e os resultados obtidos com os tratamentos. Isso traria uma presença digital estratégica, facilitando a divulgação da clínica. </p>
<p style="text-indent: 50px;text-align: justify;"> Além disso, a implantação de uma aplicação web centralizada reduziria significativamente o tempo gasto no registro, busca e visualização das informações dos pacientes. Com isso, todos os funcionários teriam acesso fácil e organizado aos dados dos pacientes, o que descentralizaria as tarefas e aliviaria a carga de trabalho de uma única pessoa. </p>
<p style="text-indent: 50px;text-align: justify;"> Outra oportunidade importante é a implementação de uma agenda integrada à aplicação web, permitindo o registro de horários livres e ocupados para sessões. Isso daria tanto aos funcionários quanto aos clientes uma visão clara dos horários disponíveis, permitindo que os clientes agendem suas sessões de forma autônoma, sem a necessidade de intervenção direta da equipe, otimizando o fluxo de trabalho e oferecendo mais conveniência aos pacientes. </p>

### **Desafios do Projeto**

<p style="text-indent: 50px;text-align: justify;"> Os principais desafios do projeto incluem o desenvolvimento de uma solução web capaz de registrar todas as informações essenciais sobre os pacientes, como dados técnicos, histórico clínico, hábitos de vida, tratamentos realizados, uso de medicamentos e localizações de dores, além das classificações e tipos de disfunções de movimento tratadas na fisioterapia. </p>
<p style="text-indent: 50px;text-align: justify;"> Outro desafio importante é a criação de uma interface intuitiva e eficiente, que não apenas facilite as operações com os dados dos pacientes, mas também torne essas atividades mais rápidas e organizadas em comparação ao registro manual em papel ou em documentos de texto. </p>

### **Segmentação de Clientes**

<p style="text-indent: 50px;text-align: justify;"> A PARAIZO atende três segmentos principais de clientes. O primeiro grupo é composto por idosos entre 65 e 85 anos, que representam a maior parte dos clientes recorrentes da clínica, buscando melhorar sua qualidade de vida e lidar com problemas de saúde relacionados ao envelhecimento. O segundo grupo inclui os acompanhantes desses idosos, geralmente jovens e adultos entre 19 e 50 anos, que são parentes ou amigos próximos responsáveis por agendar, transportar e acompanhar os idosos durante as sessões, atuando como o principal canal de comunicação entre os pacientes idosos e a clínica. O terceiro grupo abrange pacientes de diferentes idades com problemas esporádicos, que procuram atendimento para distúrbios pontuais de curto ou médio prazo, constituindo uma fonte de receita adicional para a clínica, ao contrário dos idosos que requerem acompanhamento contínuo. </p>

<iframe width="100%" height="432" src="https://miro.com/app/embed/uXjVLJ8O_A4=/?pres=1&frameId=3458764605766194355&embedId=157682138991" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

---

## **Solução proposta**

### **Objetivos do Produto**

<p style="text-indent: 50px;text-align: justify;">O principal objetivo do produto "Paraizo" é facilitar a gestão administrativa da clínica, tornando os processos mais eficientes e automatizados, resultando em um serviço de melhor qualidade para fidelizar pacientes como resultado de uma boa qualidade na prestação de serviço e consequentemente resultando na expansão do negócio. Já sobre os objetivos técnicos temos que o produto precisa se comunicar com o Google Agenda para marcar as sessões diretamente sem intervenção do administrador, apresentar contas específicas para os funcionários do empreendimento para visualizarem sua agenda de compromissos e informações de seus pacientes, além de contas para os próprios pacientes visualizarem seus agendamentos e evolução ao longo do tempo.</p>

!!! info "Características da Solução"

    <p style="text-indent: 50px;text-align: justify;">A solução deve incluir funcionalidades como agendamento automático de consultas, gerenciamento financeiro, cadastro de pacientes, cadastro de serviços e cadastro de funcionários.</p>

### **Tecnologias a Serem Utilizadas**

<p style="text-indent: 50px;text-align: justify;">A solução será baseada em tecnologias modernas de gerenciamento de dados e automação, tendo como objetivo ser uma aplicação com solução de fácil escalabilidade, tendo mesmo assim uma boa popularidade para que seja possível realizar a expansão da mesma.</p>

| Tecnologia                                     | Descrição                                                 | Área de Aplicação              |
| ---------------------------------------------- | --------------------------------------------------------- | ------------------------------ |
| **:simple-react: React.js**                    | Biblioteca JavaScript para construção de interfaces       | Frontend                       |
| **:simple-nextdotjs: Next.js**                 | Framework para React com renderização do lado do servidor | Frontend, SSR                  |
| **:simple-tailwindcss: Tailwind CSS**          | Framework de CSS para estilização rápida e responsiva     | Frontend                       |
| **:simple-flask: Flask**                       | Framework minimalista em Python para desenvolvimento web  | Backend                        |
| **:simple-mongodb: MongoDB**                   | Banco de dados NoSQL orientado a documentos               | Banco de Dados                 |
| **:simple-firebase: Firebase**                 | Plataforma para autenticação, armazenamento e deploy      | Autenticação, Hospedagem       |
| **:material-calendar: Google Calendar API**    | API para integração de agendas                            | Integração com Google Calendar |
| **:simple-github: GitHub**                     | Repositório para versionamento e colaboração              | Controle de Versão             |
| **:simple-jest: Jest**                         | Framework de testes para JavaScript                       | Testes                         |
| **:simple-pytest: PyTest**                     | Framework de testes para Python                           | Testes                         |
| **:material-microsoft-teams: Microsoft Teams** | Plataforma para comunicação e reuniões internas           | Comunicação                    |
| **:simple-googlemeet: Google Meet**            | Plataforma para reuniões com o cliente                    | Comunicação                    |
| **:simple-whatsapp: WhatsApp**                 | Comunicação assíncrona para suporte rápido                | Comunicação                    |

### **Pesquisa de Mercado e Análise Competitiva**

Existem outras soluções no mercado que visam melhorar a gestão clínica, como, por exemplo:

- **Plena Vittae**: O sistema de agendamento é realizado apenas através do contato com o profissional via WhatsApp. Não possui sistema de login para visualização das informações dos pacientes;
- **CETFISIO**: Também se limita apenas ao contato e agendamento via WhatsApp, além de não apresentar detalhes sobre o próprio estabelecimento e seus serviços, como, por exemplo, informações sobre o quadro de funcionários, histórico de atendimento da clínica, tipos de serviços prestados e a quem eles são indicados e horários de funcionamento;
- **Rede D’OR São Luiz: Novamente**, este sistema também não oferece formas dos pacientes visualizarem suas próprias informações e o sistema de contato e agendamento apresenta as mesmas características dos anteriores.

!!! note "Vale ressaltar"

    <p style="text-indent: 50px;text-align: justify;">O "Paraizo" se destaca por sua simplicidade de uso, sendo uma solução feita de maneira personalizada para as necessidades da empresa, como o registro da evolução dos pacientes baseado nos aspectos técnicos deste segmento (fisioterapia), contas de funcionários adaptadas para gerenciamento do trabalho diário baseado nas demandas atuais do empreendimento, contas para os próprios pacientes visualizarem suas evoluções e agendamentos.</p>

### **Análise de Viabilidade**

<p style="text-indent: 50px; text-align: justify;">
Analisando o mercado podemos constatar que é uma área carente de soluções que buscam atender as demandas do cliente, tendo soluções voltadas para o gerenciamento no geral sem atender às necessidades específicas do cliente. Já ao decompor os pormenores do produto, entende-se que há viabilidade técnica tendo em vista que as soluções que serão desenvolvidas são de fácil construção e podem ser facilmente remodeladas para se moldarem aos gostos do cliente.
</p>

### **Impacto da Solução**

A criação do software PARAIZO contribuiria para a melhor gestão operacional da clínica, uma vez que ele busca criar um ambiente que centralize as atividades de visualização, cadastro, edição e exclusão de agendamentos dos clientes, migrar o registro do histórico de atendimentos para o digital, proporcionando mais longevidade a esses dados quando comparado com a forma atual de armazenamento (registro em papel), visualização e edição dos registros de cada paciente que frequenta a clínica, criando um ambiente que proporciona melhor análise desses dados, além de prover uma forma dos próprios clientes visualizarem suas evoluções ao longo do tempo. Nesse sentido, conclui-se o produto impactaria a clínica das seguintes formas:

!!! success "Benefícios"

    - Redução no tempo destinado a atividades de visualização e edição de dados de clientes específicos, uma vez que não será mais necessário procurar manualmente o papel onde está estes registros;
    - Redução no tempo destinado a atividades relacionadas à organização e armazenamento dos arquivos nos espaços físicos da clínica;
    - Redução de custos, uma vez que o orçamento destinado aos materiais e alocação dos arquivos físicos não será mais necessário;
    - Proporcionar a visualização do histórico de evolução dos pacientes proporcionará uma taxa maior de fidelização de clientes ao estabelecimento;
    - Com o desenvolvimento de um site com as informações sobre os serviços prestados, avaliações de seus clientes e quadro de funcionários, o trabalho de divulgação e marketing do estabelecimento potencialmente trará um aumento na quantidade de serviços prestados.

Em suma, a criação do software simplificaria o agendamento de atendimentos, além de otimizar a gestão financeira e de pessoas. Isso resultaria em uma administração mais eficiente e ágil do negócio, proporcionando maior controle e facilidade nas operações.
