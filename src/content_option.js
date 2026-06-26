export const logotext = "Caio Bauab";

const eu_1 = require('./assets/images/eu_1.jpg.JPG');
const tomas_bike = require('./assets/images/tomas_bike.png.png');
const health_dashboard = require('./assets/images/health_dashboard.png.png');
const hotel_dashboard = require('./assets/images/hotel_dashboard.png');
const performance_dashboard = require('./assets/images/performance_dashboard.png');
const project_overview_dashboard = require('./assets/images/project_overview_dashboard.png');
const cricket_dashboard = require('./assets/images/cricket_dashboard.png');

export const meta = {
  title: "Caio Bauab | Analista de Dados",
  description: "Analista de Dados e BI com formação em Ciência e Tecnologia pela UNIFESP e certificações em Power BI, SQL e Python. Experiência no desenvolvimento de dashboards...",
};

export const introdata = {
  title: "Caio Pereira Bauab",
  animated: {
    first: "Analista de Dados",
    second: "Business Intelligence",
    third: "Data Visualization",
  },
  description: "Analista de Dados e BI com formação em Ciência e Tecnologia pela UNIFESP. Minha paixão é transformar dados em dashboards interativos e insights estratégicos.",
  your_img_url: eu_1,
};

export const dataabout = {
  title: "Um pouco sobre mim",
  aboutme: "Analista de Dados e BI com formação em Ciência e Tecnologia pela UNIFESP e certificações em Power BI, SQL e Python. Experiência no desenvolvimento de dashboards interativos, modelagem de dados e geração de insights estratégicos para setores como logística, varejo e hospitalidade. Domínio em Power BI (DAX, Power Query), SQL e Python. Combino visão analítica com comunicação clara para traduzir dados em decisões. Busco oportunidade para aplicar minhas habilidades em projetos de dados e BI.",
};

export const worktimeline = [
    {
        jobtitle: "Analista de dados/Business Intelligence",
        where: "Autônomo",
        date: "2025 - Presente",
    },
    {
        jobtitle: "B.Sc. Interdisciplinar em ciência e tecnologia",
        where: "UNIFESP - Universidade Federal de São Paulo",
        date: "2021 - 2025",
    },
    {
        jobtitle: "Data Analyst with Python / SQL / Power BI",
        where: "DataCamp - Online",
        date: "2024 - 2025",
    },
    {
        jobtitle: "Diretor de eventos",
        where: "Núcleo UNIFESP - A.A.A.J.A",
        date: "2022 - 2024",
    },
    {
        jobtitle: "Intercâmbio no Canadá",
        where: "ILAC - International Language Academy of Canada",
        date: "2017",
    },
];

export const skills = [
  {
    name: "Power BI (DAX & Power Query)",
    value: 95,
  },
  {
    name: "SQL",
    value: 90,
  },
  {
    name: "Python",
    value: 80,
  },
  {
    name: "Tableau",
    value: 75,
  },
  {
    name: "Ferramentas Microsoft",
    value: 90,
  },
  {
    name: "Modelagem de dados, ETL, Visualização",
    value: 90,
  },
];

export const services = [
  {
    title: "Desenvolvimento de Dashboards",
    description: "Criação de dashboards interativos e intuitivos em Power BI e Tableau para monitoramento de KPIs e suporte à decisão.",
  },
  {
    title: "Análise e Modelagem de Dados",
    description: "Extração, tratamento (ETL) e modelagem de dados com SQL e Python para gerar insights e responder perguntas de negócio.",
  },
  {
    title: "Automação de Relatórios",
    description: "Desenvolvimento de rotinas de automação para relatórios, otimizando o tempo e a precisão da informação.",
  },
];

export const dataportfolio = [
  {
    slug: "t20-cricket-dashboard",
    title: "T20 Cricket Dashboard",
    img: cricket_dashboard, 
    description: "Análise de dados de críquete para selecionar a melhor equipe de 11 jogadores para a Copa do Mundo de T20.",
    link: "/portfolio/t20-cricket-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiN2MzN2IzMmItZjViOC00MzhjLTliZWQtOWVlNDQ2ZGQ5OWNlIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Este projeto de análise de dados de críquete teve como objetivo selecionar os 11 melhores jogadores com base em um conjunto de dados da Copa do Mundo de T20. A equipe deveria ser capaz de marcar pelo menos 180 corridas em média e defender 150 corridas em média.",
    tools: ["Power BI", "SQL"],
    workflow: [
        "Build a Database",
        "Develop SQL Queries",
        "Connect Power BI to DB",
        "Build a Dashboard in Power BI",
    ],
    requirements: [
        "Encontrar os 11 melhores jogadores com base nos dados.",
        "A equipe deve marcar em média pelo menos 180 corridas.",
        "A equipe deve ser capaz de defender 150 corridas em média.",
        "Construir um dashboard interativo e paginado.",
        "Incluir informações importantes baseadas em parâmetros para cada categoria de jogador.",
    ],
    keyResults: [
        "Identificação dos 11 Melhores Jogadores: Uma equipe de 11 jogadores foi selecionada com base em métricas de desempenho.",
        "Dashboard Interativo: Um dashboard paginado no Power BI foi criado, permitindo a navegação entre as funções dos jogadores e a análise de seus pontos fortes.",
        "Análise de Tendências de Desempenho: Gráficos de dispersão e outras visualizações foram usados para analisar tendências no desempenho de batedores e arremessadores.",
        "Análise da Força da Equipe: O dashboard forneceu insights sobre a força combinada da equipe selecionada, garantindo que eles atendessem aos objetivos do projeto.",
    ],
    conclusion: "O projeto de Análise de Dados de Críquete demonstrou com sucesso como a análise de dados pode ser usada para otimizar a seleção de equipes em esportes. O dashboard não apenas ajudou a identificar os melhores jogadores, mas também garantiu que a equipe atendesse a critérios de desempenho específicos.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "project-overview-dashboard",
    title: "Project Overview Dashboard",
    img: project_overview_dashboard,
    description: "Dashboard para gerenciamento da força de trabalho, riscos financeiros e monitoramento da saúde dos projetos.",
    link: "/portfolio/project-overview-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDYxZjIzNDktZWU5NC00MWMwLThkMWMtOWRjODVlODZlZWJiIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "A expertise em organização de dados e desenvolvimento de dashboards foi fundamental para ajudar a gerenciar a força de trabalho, entender os riscos financeiros e monitorar a saúde dos projetos de forma mais eficaz. O objetivo principal era responder à pergunta: 'Quais projetos e departamentos estão em risco de estourar o orçamento ou ter baixo desempenho?'.",
    tools: ["Power BI", "SQL"],
    workflow: [
        "Build a Database",
        "Develop SQL Queries",
        "Connect Power BI to DB",
        "Build a Dashboard in Power BI",
    ],
    requirements: [
        "Identificar Departamentos e Projetos 'no vermelho': Entender quais departamentos ou projetos estão acima do orçamento ou com baixo desempenho para tomar ações corretivas.",
        "Organização de Dados: Garantir que os dados de várias fontes (informações de funcionários, dados salariais, orçamentos de departamentos e detalhes de projetos) sejam estruturados corretamente.",
        "Desenvolvimento de Dashboard em Power BI: Criar um dashboard abrangente que forneça visibilidade sobre o desempenho dos funcionários, distribuição salarial e gerenciamento de projetos departamentais.",
    ],
    keyResults: [
        "Projetos e Departamentos em Risco: O dashboard identificou com sucesso projetos e departamentos que estavam acima do orçamento ou com baixo desempenho.",
        "Utilização do Orçamento: O dashboard forneceu uma visão clara da utilização do orçamento entre os departamentos.",
        "Desempenho dos Funcionários: Insights sobre o desempenho dos funcionários e a distribuição salarial foram visualizados.",
        "Monitoramento da Saúde do Projeto: O dashboard permitiu o monitoramento da saúde geral dos projetos, incluindo cronogramas, alocação de recursos e desempenho financeiro.",
    ],
    conclusion: "O Project Overview Dashboard forneceu ao cliente uma ferramenta poderosa para monitorar a saúde do projeto, gerenciar orçamentos e otimizar a alocação da força de trabalho. Ao identificar projetos e departamentos em risco, o dashboard permitiu que as partes interessadas tomassem ações corretivas oportunas, garantindo melhor controle financeiro e gerenciamento de projetos.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "annual-performance-dashboard",
    title: "Annual Performance Dashboard",
    img: performance_dashboard,
    description: "Criação de um Dashboard de Análise de Desempenho para uma grande empresa de plantas, fornecendo insights sobre vendas, lucratividade e desempenho de produtos.",
    link: "/portfolio/annual-performance-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYmZkNmI5YzAtOWIyYy00NDg3LWJkNTItYWIzN2FlODY2ZjQyIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "O objetivo deste projeto foi criar um Dashboard de Análise de Desempenho para uma grande empresa de plantas. O dashboard foi projetado para fornecer insights sobre vendas, lucratividade e desempenho de produtos, permitindo que as partes interessadas tomem decisões baseadas em dados para melhorar os resultados de negócios. O conjunto de dados utilizado neste projeto foi um arquivo Excel composto por três tabelas diferentes: a tabela de fatos contendo informações sobre vendas, a tabela de contas e a tabela de hierarquia de plantas.",
    tools: ["Power BI", "Power Query"],
    workflow: [
        "Dataset: Utilização do Power Query e tabelas virtuais para modelagem dos dados.",
        "Model: Criação de medidas e colunas calculadas para as análises.",
        "Visuals: Definição do layout e design do dashboard.",
        "Review and Publish: Revisão e publicação do relatório final.",
    ],
    requirements: [
        "Análise de Vendas e Lucratividade: Entender tendências de vendas, lucro bruto e lucratividade por produto, região e período.",
        "Desempenho do Produto: Obter insights sobre quais produtos estavam performando bem e quais estavam com baixo desempenho.",
        "Desempenho Regional: Destacar o desempenho regional, identificando países ou regiões que precisavam de novas estratégias.",
        "Relatório Dinâmico: Criar um dashboard dinâmico e interativo que pudesse ser facilmente atualizado e usado para detalhar informações específicas.",
    ],
    keyResults: [
        "Tendências de Lucro Bruto: O dashboard revelou quedas significativas no lucro bruto durante março e abril de 2024, com o Canadá sendo um dos principais contribuintes para o declínio.",
        "Tendências Sazonais: Fevereiro foi identificado como um período comum de declínio em ambos os anos, sugerindo a necessidade de uma revisão das estratégias da empresa durante este mês.",
        "Lucratividade da Conta: O dashboard mostrou contas com percentuais de lucro bruto acima da média, mas com baixas vendas, indicando oportunidades para aumentar as vendas nessas contas.",
        "Foco Regional: Os 10 países com pior desempenho foram identificados, permitindo ao cliente focar em novas estratégias e repensar abordagens de mercado nessas regiões.",
    ],
    conclusion: "O Dashboard de Análise de Desempenho da Empresa de Plantas forneceu ao cliente uma visão abrangente de suas vendas, lucratividade e desempenho de produtos. Ao identificar tendências chave, produtos com baixo desempenho e regiões que exigem foco estratégico, o dashboard permitiu que as partes interessadas tomassem decisões informadas para melhorar os resultados de negócios. A natureza dinâmica e interativa do dashboard permitiu a fácil exploração dos dados, tornando-o uma ferramenta valiosa para o monitoramento contínuo do desempenho.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "hotel-dashboard",
    title: "Hotel Dashboard",
    img: hotel_dashboard,
    description: "Análise e visualização de dados de reservas de hotel para identificar tendências e auxiliar na tomada de decisões.",
    link: "/portfolio/hotel-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNWNmYzgzZDEtYzVlMC00YjcwLTgzYzItZGJhNWY5NjYwMjI0IiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Desenvolvimento de um banco de dados para analisar e visualizar dados de reservas de hotéis, apresentando uma história de dados visual para stakeholders. O projeto focou em questões como o crescimento da receita por ano, segmentação da receita por tipo de hotel e tendências de hóspedes com carros pessoais.",
    tools: ["Power BI", "SQL"],
    workflow: [
      "Construir um banco de dados para os dados de reserva de hotéis.",
      "Desenvolver a query SQL para extrair e transformar os dados.",
      "Conectar o Power BI ao banco de dados.",
      "Visualizar os dados e construir o dashboard.",
      "Resumir as descobertas e insights.",
    ],
    requirements: [
        "Construir uma história de dados visual ou dashboard usando Power BI para apresentar aos stakeholders.",
        "Analisar se a receita do hotel está crescendo anualmente.",
        "Segmentar a receita por tipo de hotel (hóspedes com e sem carros).",
        "Analisar a tendência de hóspedes com carros pessoais.",
        "Identificar tendências nos dados, focando na tarifa média diária e nos hóspedes para explorar a sazonalidade.",
    ],
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "health-data-dashboard",
    title: "From Data to Health Dashboard",
    img: health_dashboard,
    description: "Projeto de HR Analytics para um programa de bônus e análise de absenteísmo.",
    link: "/portfolio/health-data-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDNmNTE1NjctMGQyYy00ODIwLWFjYzAtNDQyYzA1ZGJkYTYyIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Projeto de HR Analytics para identificar colaboradores saudáveis para um programa de bônus, calcular aumento salarial para não fumantes e criar um dashboard de monitoramento de absenteísmo.",
    tools: ["Power BI", "SQL", "HR Analytics"],
     workflow: [
      "Criação de um banco de dados para consolidar dados de reservas de hotel de múltiplos anos.",
      "Desenvolvimento de queries SQL para combinar dados de diferentes tabelas.",
      "Conexão do Power BI ao banco de dados para importar e visualizar os dados.",
      "Visualização dos dados no Power BI com gráficos e tabelas interativas.",
      "Resumo e apresentação dos insights para os stakeholders.",
    ],
    requirements: [
        "Fornecer uma lista de indivíduos saudáveis e com baixo absenteísmo para o programa de bônus (Orçamento total: $1000 USD).",
        "Calcular um aumento salarial ou compensação anual para não fumantes (Orçamento de seguro de $983.221 para todos os não fumantes).",
        "Criar um dashboard para o RH entender o absenteísmo no trabalho com base no wireframe aprovado.",
    ],
    keyResults: [
        "Identificação de Colaboradores Saudáveis: Lista de colaboradores elegíveis ao bônus de saúde com base em critérios como não fumante, IMC saudável e baixo absenteísmo.",
        "Cálculo de Compensação para Não Fumantes: Aumento salarial de $0.68 por hora, ou $1.414,4 por ano, dentro do orçamento de $983.221 USD.",
        "Dashboard de Absenteísmo: Criação de um dashboard interativo no Power BI para monitorar o absenteísmo, com métricas como tendências mensais, motivos de ausência e comparações entre categorias de colaboradores.",
        "Economia de Custos: Redução de custos relacionados ao absenteísmo e melhoria da produtividade por meio de incentivos financeiros e programas de bem-estar.",
    ],
    conclusion: "O projeto demonstrou como a análise de dados pode ser usada para promover a saúde e o bem-estar dos colaboradores, ao mesmo tempo em que reduz os custos relacionados ao absenteísmo. Ao identificar colaboradores saudáveis e implementar incentivos financeiros para não fumantes, a empresa pode melhorar a produtividade e a satisfação no trabalho. O dashboard do Power BI oferece uma visão clara e interativa das métricas de absenteísmo, permitindo que o RH tome decisões baseadas em dados. Este projeto é um exemplo de como a análise de dados pode ser aplicada para resolver problemas do mundo real e impulsionar mudanças positivas no local de trabalho.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "tomas-bike-dashboard",
    title: "Tomas Bike Share Dashboard",
    img: tomas_bike,
    description: "Análise de métricas de performance para uma empresa de compartilhamento de bicicletas.",
    link: "/portfolio/tomas-bike-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDEzNGE0ZmUtYmE4Mi00ZjI0LTlmMDQtOGFmZDI4MDQ0ZDdmIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Desenvolvimento de um dashboard para a 'Toman Bike Share' exibindo as principais métricas de performance para tomada de decisão informada. O projeto envolveu análise de receita horária, tendências de lucro e receita, receita sazonal e demografia dos ciclistas.",
    tools: ["Power BI", "SQL"],
    workflow: [
      "Criação de um banco de dados para consolidar as informações.",
      "Desenvolvimento de queries SQL para tratamento e consulta dos dados.",
      "Conexão do Power BI ao banco de dados.",
      "Construção de um dashboard interativo no Power BI.",
      "Análise das questões de negócio solicitadas.",
    ],
    requirements: [
        "Análise de Receita por Hora.",
        "Tendências de Lucro e Receita.",
        "Análise de Receita Sazonal.",
        "Demografia dos Ciclistas.",
        "Recomendação sobre aumento de preços para o próximo ano.",
    ],
    recommendation: "Considerando o aumento substancial do ano passado, um aumento mais conservador de 10-15% é prudente para testar a resposta do mercado. Recomenda-se uma análise de mercado mais aprofundada e a consideração de uma estratégia de preços segmentada para usuários casuais e registrados.",
    linkLabel: "Ver detalhes do projeto",
  },
];

export const contactConfig = {
  YOUR_EMAIL: "caio_bauab@hotmail.com",
  YOUR_FONE: "+55 (xx) xxxxx-xxxx",
  description: "Sinta-se à vontade para entrar em contato para colaborações, projetos freelance ou apenas para se conectar. Responderei o mais breve possível.",
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

export const socialprofils = {
  github: "https://github.com/Caiobauab360",
  linkedin: "https://www.linkedin.com/in/caio-bauab-032189206/",
};
