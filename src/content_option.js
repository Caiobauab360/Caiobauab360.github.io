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
  animated: [
    "Analista de Dados",
    "Business Intelligence",
    "Cientista de Dados",
    "Engenharia de ETL & Automação",
    "Data Visualization",
    "Modelagem Preditiva & Python",
  ],
  description:
    "Bacharel em Ciência e Tecnologia pela UNIFESP, especializado em transformar grandes volumes de dados em inteligência de negócios. Atuo no ciclo completo de dados: desde pipelines de ETL e modelagem preditiva em Python e SQL, até a criação de dashboards de alto impacto e soluções automatizadas.",
  technologies: [
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "Excel Avançado",
    "ETL & Automação",
  ],
  your_img_url: eu_1,
};

export const dataabout = {
  title: "Um pouco sobre mim",
  aboutme:
    "Sou Analista de Dados e BI formado em Ciência e Tecnologia pela UNIFESP, com atuação especializada na transformação de dados brutos em decisões estratégicas de alto impacto. Minha experiência abrange o ciclo completo de dados: engenharia de dados/ETL com SQL e Python, modelagem dimensional (Star/Snowflake Schema) em Cloud Data Warehouses, e criação de soluções de Business Intelligence interativas em Power BI e Tableau. Possuo sólida vivência internacional em inglês (ILAC Canadá) e perfil voltado à tradução de requisitos técnicos em soluções de negócios para lideranças e executivos.",
};

export const workExperiences = [
  {
    role: "Desenvolvedor BI & Analista de Dados",
    company: "Autônomo / Consultoria",
    date: "2025 - Presente",
    descriptions: [
      "Desenvolvimento de dashboards interativos em Power BI e Tableau com modelagem dimensional e DAX avançado.",
      "Construção e otimização de pipelines de ETL com SQL e Python para integração de bancos relacionais, Cloud Data Warehouses e APIs.",
      "Análise preditiva e automação de relatórios para suporte a tomadas de decisão estratégicas.",
    ],
  },
  {
    role: "Diretor de Eventos & Gestão Operacional",
    company: "Núcleo UNIFESP - A.A.A.J.A",
    date: "2022 - 2024",
    descriptions: [
      "Construção de modelos analíticos financeiros e operacionais, saneamento de dados e apresentação de relatórios de performance para a diretoria.",
    ],
  },
];

export const educationTimeline = [
  {
    title: "B.Sc. Interdisciplinar em Ciência e Tecnologia",
    institution: "UNIFESP",
    date: "2021 - 2025",
  },
  {
    title: "Formação Profissional em Data Analytics (Python, SQL, BI)",
    institution: "DataCamp",
    date: "2024 - 2025",
  },
  {
    title: "Intercâmbio Acadêmico & Inglês Avançado",
    institution: "ILAC Canadá",
    date: "2017",
  },
];

export const worktimeline = [
  ...workExperiences.map((item) => ({
    jobtitle: item.role,
    where: item.company,
    date: item.date,
  })),
  ...educationTimeline.map((item) => ({
    jobtitle: item.title,
    where: item.institution,
    date: item.date,
  })),
];

export const skillCategories = [
  {
    title: "Analytics & Data Science",
    skills: [
      "SQL Avançado (PostgreSQL, SQL Server, BigQuery, Snowflake)",
      "Python (Pandas, NumPy, Scikit-Learn)",
      "Modelagem Preditiva & Forecasting",
      "Análise Estatística & Validação (Data Quality)",
    ],
  },
  {
    title: "Business Intelligence & Viz",
    skills: [
      "Power BI (DAX Avançado, Power Query, Dataflows)",
      "Tableau Desktop",
      "Data Storytelling Executivo",
      "Modelagem Dimensional (Star/Snowflake Schema)",
    ],
  },
  {
    title: "ETL & Engenharia de Dados",
    skills: [
      "Pipelines de Integração de Dados",
      "Consumo de APIs REST & Automação de Scripts",
      "Integração com ERPs (Protheus/TOTVS, SAP)",
      "Git / GitHub & Ambientes Cloud",
    ],
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
    title: "Desenvolvimento de Dashboards Executivos & BI",
    description:
      "Criação de painéis interativos e de alto impacto visual em Power BI. Transformação de KPIs complexos em visões intuitivas, otimizadas para tomadas de decisão rápidas e alinhadas aos objetivos estratégicos do negócio.",
  },
  {
    title: "Engenharia, ETL & Modelagem de Dados",
    description:
      "Extração, limpeza e estruturação de dados (Power Query, SQL e Python). Modelagem dimensional eficiente e desenvolvimento de medidas avançadas em DAX para garantir relatórios rápidos, escaláveis e precisos.",
  },
  {
    title: "Análise Diagnóstica & Análise de Negócios",
    description:
      "Identificação de padrões, tendências operacionais e gargalos financeiros. Aplicação de inteligência de dados para responder a perguntas estratégicas de negócio e apoiar planos de ação orientados a ROI.",
  },
  {
    title: "Automação & Governança de Relatórios",
    description:
      "Otimização e automação de fluxos de trabalho de dados, reduzindo o tempo gasto em tarefas manuais, eliminando inconsistências e garantindo a atualização contínua das métricas.",
  },
];

export const dataportfolio = [
  {
    slug: "t20-cricket-dashboard",
    title: "T20 Cricket Dashboard",
    img: cricket_dashboard,
    description: "Este projeto de Analytics aplicado aos esportes utilizou dados históricos da Copa do Mundo de T20 para montar a seleção dos 11 melhores jogadores.",
    link: "/portfolio/t20-cricket-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiN2MzN2IzMmItZjViOC00MzhjLTliZWQtOWVlNDQ2ZGQ5OWNlIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Este projeto de Analytics aplicado aos esportes utilizou dados históricos da Copa do Mundo de T20 para montar a seleção dos 11 melhores jogadores. O objetivo estratégico foi estruturar um elenco equilibrado capaz de atingir uma média de pontuação superior a 180 corridas no ataque e defender metas abaixo de 150 corridas na defesa.",
    tools: ["Power BI", "SQL"],
    workflow: [
      "Modelagem do Banco de Dados Relacional",
      "Desenvolvimento de Queries SQL para Tratamento e Filtragem de Dados",
      "Integração e Conexão de Dados no Power BI",
      "Criação de Visualizações Dinâmicas, DAX e Dashboard Paginado",
    ],
    requirementsTitle: "Requisitos & Critérios Táticos",
    requirements: [
      "Power Hitters / Abridores: Batting AVG > 30 | Strike Rate > 140 | Boundary % > 50%",
      "Ancoras / Meio de Campo: Batting AVG > 40 | Strike Rate > 125 | Média de Bolas Recebidas > 20",
      "Finishers (Finalizadores): Batting AVG > 25 | Strike Rate > 130 | Média de Bolas Recebidas > 12",
      "Specialist Fast Bowlers: Bowling Economy < 7.0 | Bowling Strike Rate < 16 | Dot Ball % > 40%",
    ],
    keyResults: [
      "Algoritmo de Seleção dos 11 Titulares: Identificação precisa dos melhores atletas com base em métricas avançadas de desempenho individual e coletivo.",
      "Dashboard Interativo Paginado: Interface com navegação por roles/funções, análises de dispersão (Batting AVG vs Strike Rate) e visualização de força combinada da equipe.",
      "Tomada de Decisão Baseada em Dados: Comprovação do alcance das metas operacionais (garantia de 180+ corridas no ataque e suporte à defesa de 150 corridas).",
    ],
    conclusion: "O projeto T20 Cricket Data Analytics demonstra a aplicação prática de Business Intelligence no esporte de alto rendimento. A combinação de engenharia de dados em SQL com storytelling no Power BI permitiu transformar métricas complexas em uma ferramenta de tomada de decisão rápida e intuitiva para comissões técnicas.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "project-overview-dashboard",
    title: "Gestão Corporativa & Saúde Financeira de Projetos",
    img: project_overview_dashboard,
    description: "Solução analítica para governança orçamentária e alocação de capital humano, integrando dados salariais, custos de projetos e orçamentos departamentais.",
    link: "/portfolio/project-overview-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNDYxZjIzNDktZWU5NC00MWMwLThkMWMtOWRjODVlODZlZWJiIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Desenvolvimento de uma solução analítica para governança orçamentária e alocação de capital humano. O dashboard integra dados de salários, custos de projetos e orçamentos departamentais para responder à pergunta estratégica da liderança: quais projetos e departamentos estão em risco de estourar o orçamento ou ter desempenho abaixo do esperado no ciclo bienal?",
    tools: ["Power BI", "SQL"],
    workflowTitle: "Engenharia de Dados & Pipeline SQL",
    workflow: [
      "Unificação de Bases: Desenvolvimento de consultas SQL unindo tabelas de colaboradores (employees), departamentos, projetos e alocações (project_assignments).",
      "Lógica de Status Automatizada: Aplicação de regras condicionais em SQL (CASE WHEN) para determinar o status dinâmico do projeto (Upcoming/Completed) com base na data de término.",
      "Tratamento Financeiro: Estruturação dos dados para comparar custos operacionais anuais com o orçamento fixo departamental previsto para 2 anos.",
    ],
    requirementsTitle: "Insights & Resultados Chave",
    requirements: [
      "Mapeamento de Risco Financeiro: Identificação clara de departamentos onde o orçamento anual não cobriria as despesas previstas para o ciclo de 2 anos, permitindo ações corretivas imediatas.",
      "Eficiência na Alocação de Pessoal: Visualização da distribuição salarial por cargo e departamento (ex: Engenharia e TI), otimizando a distribuição de colaboradores por projeto.",
      "Governança e Transparência: Acompanhamento em tempo real da saúde dos projetos (prazos, custos e alocação de recursos) através de visualizações color-coded para rápida tomada de decisão.",
    ],
    conclusion: "O dashboard unificou visões financeiras e operacionais, transformando múltiplos dados dispersos em um painel interativo. A solução garantiu maior controle financeiro à gestão, prevenindo déficits orçamentários e aprimorando a distribuição da força de trabalho.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "annual-performance-dashboard",
    title: "Análise de Desempenho & Lucratividade | Plant Co.",
    img: performance_dashboard,
    description: "Dashboard de Desempenho Executivo analisando tendências de vendas, margem de lucro bruto e performance por categorias de produtos e regiões para suporte a decisões estratégicas.",
    link: "/portfolio/annual-performance-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYmZkNmI5YzAtOWIyYy00NDg3LWJkNTItYWIzN2FlODY2ZjQyIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Projeto focado no desenvolvimento de um Dashboard de Desempenho Executivo para uma grande empresa do setor botânico. A solução analisa tendências de vendas, margem de lucro bruto (Gross Profit) e performance por categorias de produtos e regiões, fornecendo visões dinâmicas para suportar tomadas de decisão estratégicas.",
    tools: ["Power BI", "DAX", "Power Query"],
    workflowTitle: "Fluxo do Projeto & Engenharia de Dados",
    workflow: [
      "Modelagem & Tratamento no Power Query: Consolidação de tabelas Fato (Vendas/Invoices) e Dimensões (Account e Plant Hierarchy) para habilitar visões por hierarquia de produto.",
      "Desenvolvimento de Medidas DAX Dinâmicas: Implementação de lógica avançada utilizando funções SWITCH e inteligência temporal (YTD vs PYTD) para alternância dinâmica de métricas.",
      "Design e Layout Interativo: Formatação condicional e segmentação de dados por tipo de produto (Indoor, Outdoor, Landscape) e regiões.",
    ],
    requirementsTitle: "Insights & Resultados Chave",
    requirements: [
      "Identificação de Gargalos de Margem: O dashboard revelou quedas acentuadas na margem bruta nos meses de março e abril, com impacto significativo na operação do Canadá e na linha de produtos \"Danthonia Sericea\".",
      "Análise de Sazonalidade: Constatação de retração recorrente de vendas no mês de fevereiro em anos consecutivos, indicando a necessidade de ações promocionais específicas para o período.",
      "Segmentação de Contas (Account Profitability): Mapeamento de contas com percentual de margem acima da média, porém com baixo volume de vendas, sinalizando oportunidades claras de expansão.",
      "Foco Regional: Identificação dos 10 países com menor desempenho (Bottom 10), permitindo o reposicionamento de estratégias comerciais de mercado.",
    ],
    conclusion: "A implementação do Performance Dashboard permitiu à liderança navegar de forma intuitiva por hierarquias complexas de produtos e geografias. A substituição de relatórios estáticos por métricas dinâmicas via DAX acelerou a identificação de produtos subdesempenhados e a otimização da margem de lucro.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "hotel-dashboard",
    title: "Análise de Desempenho e Receita Hotelaria",
    img: hotel_dashboard,
    description: "Projeto de Business Intelligence voltado ao setor hoteleiro para análise de crescimento de receita, performance por tipo de hotel e decisões estratégicas.",
    link: "/portfolio/hotel-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNWNmYzgzZDEtYzVlMC00YjcwLTgzYzItZGJhNWY5NjYwMjI0IiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Projeto de Business Intelligence voltado ao setor hoteleiro com o objetivo de responder a perguntas estratégicas da diretoria: A receita anual está crescendo? Qual a performance por tipo de hotel (City Hotel vs Resort Hotel)? Existe demanda para expansão do estacionamento?",
    tools: ["Power BI", "SQL"],
    workflowTitle: "Arquitetura de Dados & Pipeline SQL",
    workflow: [
      "Consolidação Histórica: Uso de operador UNION em SQL para combinar os dados de reservas de múltiplos anos (2018, 2019 e 2020) em uma única visão operacional.",
      "Enriquecimento de Dados (JOINS): Cruzamento de dados de reservas com tabelas de segmento de mercado (market_segment) e custo de refeições (meal_cost).",
      "Conexão Power BI: Importação direta do banco de dados relacional para o Power BI para modelagem de métricas como Diária Média (ADR) e Taxa de Desconto.",
    ],
    requirementsTitle: "Insights & Resultados Chave",
    requirements: [
      "Evolução da Receita: Mapeamento da receita total acumulada no período de $29,12 Mi, identificando a distribuição entre City Hotel (51,6%) e Resort Hotel (48,3%).",
      "Decisão Estratégica de Estacionamento: A análise revelou que apenas 2,36% dos hóspedes exigem vaga de garagem (Car Spaces), demonstrando que NÃO há necessidade de investimentos na expansão do estacionamento.",
      "Sazonalidade & Diária Média (ADR): Identificação dos picos de ocupação e flutuação da diária média (média de $104,47), permitindo otimizar estratégias de precificação dinâmica ao longo do ano.",
    ],
    conclusion: "A análise baseada em dados eliminou suposições sobre investimentos na infraestrutura hoteleira e direcionou o foco da gestão para estratégias de precificação sazonal e segmentação de mercado, otimizando a rentabilidade do negócio.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "health-data-dashboard",
    title: "HR Analytics: Absenteísmo & Programas de Saúde",
    img: health_dashboard,
    description: "Projeto de Analytics focado na gestão de capital humano: identificação de elegibilidade para bônus de saúde e cálculo de reajuste salarial otimizado para colaboradores não fumantes.",
    link: "/portfolio/health-data-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDNmNTE1NjctMGQyYy00ODIwLWFjYzAtNDQyYzA1ZGJkYTYyIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Projeto de Analytics focado na gestão de capital humano e otimização de orçamentos corporativos. A partir da análise de dados de absenteísmo, hábitos e saúde dos colaboradores, a solução identificou elegibilidade para programas de bônus de saúde e calculou o reajuste salarial otimizado para colaboradores não fumantes dentro do orçamento de seguro.",
    tools: ["Power BI", "SQL", "HR Analytics"],
    workflowTitle: "Engenharia de Dados & Queries SQL",
    workflow: [
      "Consolidação do Banco de Dados: Aplicação de JOINS entre a tabela principal de absenteísmo, tabela de compensação e tabela de motivos médicos.",
      "Filtragem de Colaboradores Saudáveis: Query SQL direcionada para identificar colaboradores com IMC ideal (< 25), não fumantes, não etilistas e com absenteísmo abaixo da média para distribuição do bônus de US$ 1.000.",
      "Otimização do Orçamento de Seguro (US$ 983k): Cálculo preciso via SQL que determinou uma compensação salarial de US$ 0,68/hora (US$ 1.414,40/ano) para colaboradores não fumantes.",
      "Categorização Dinâmica em SQL: Criação de CASE WHEN para agrupamento de IMC (Abaixo do peso, Saudável, Sobrepeso, Obeso) e agrupamento das ausências por Estações do Ano (Inverno, Primavera, Verão, Outono).",
    ],
    requirementsTitle: "Indicadores do Dashboard no Power BI",
    requirements: [
      "Visão Geral de Absenteísmo: Monitoramento da média geral de horas ausentes (KPI de 6,92h) e distribuição por motivos médicos/consultas.",
      "Análise Demográfica e Estilo de Vida: Cruzamento de ausências com nível de escolaridade, número de filhos/pets e hábitos de fumo/álcool.",
      "Tendências Temporais: Gráficos de linha acompanhando as horas de absenteísmo por mês do ano e por dia da semana.",
      "Matriz de Impacto: Gráfico de dispersão correlacionando despesas de transporte com carga média de trabalho e ausências.",
    ],
    conclusion: "A aplicação de SQL avançado integrada ao Power BI transformou dados brutos de RH em uma ferramenta estratégica de tomada de decisão. O projeto não apenas automatizou o acompanhamento do absenteísmo, mas viabilizou uma distribuição justa de incentivos de saúde, reduzindo custos operacionais de sinistro.",
    linkLabel: "Ver detalhes do projeto",
  },
  {
    slug: "tomas-bike-dashboard",
    title: "Analytics & Estratégia de Precificação | Toman Bike Share",
    img: tomas_bike,
    description: "Dashboard executivo para acompanhamento de KPIs operacionais e recomendação quantitativa de precificação para a Toman Bike Share.",
    link: "/portfolio/tomas-bike-dashboard",
    powerbiEmbedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZDEzNGE0ZmUtYmE4Mi00ZjI0LTlmMDQtOGFmZDI4MDQ0ZDdmIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
    overview: "Desenvolvimento de um dashboard executivo para a empresa de compartilhamento de bicicletas Toman Bike Share. O projeto acompanhou métricas operacionais chave (receita horária, lucro, perfil de usuários) e recomendou uma estratégia de precificação para o ano seguinte.",
    tools: ["Power BI", "SQL"],
    workflowTitle: "Engenharia de Dados & Indicadores Operacionais",
    workflow: [
      "Modelagem do Banco de Dados: Estruturação do banco de dados contendo séries temporais de uso, receitas, sazonalidade e dados demográficos de usuários.",
      "Integração com Power BI: Construção de relacionamentos e medidas para análise de receita horária, tendências de lucro e separação entre usuários casuais e cadastrados (registered riders).",
      "Visual & Identidade de Marca: Aplicação rigorosa da paleta de cores corporativa e design focado em navegação intuitiva.",
    ],
    requirementsTitle: "Recomendações Estratégicas de Negócio",
    requirements: [
      "Aumento Conservador de Preço: Recomendação de reajuste moderado entre 10% a 15% na tarifa para testar a resposta do mercado sem provocar queda acentuada na demanda (evitando o teto de preço).",
      "Simulação de Cenários: Com base na tarifa base de $4,99, simulou-se um ajuste para $5,49 (+10%) ou $5,74 (+15%).",
      "Precificação Segmentada: Orientação para aplicar estratégias de preço diferenciadas para usuários casuais e cadastrados, aproveitando a menor sensibilidade de preço de cada categoria.",
    ],
    conclusion: "Além de entregar um painel interativo de acompanhamento de KPIs, o projeto atuou como consultoria estratégica de negócios, fornecendo embasamento quantitativo para o aumento rentável e seguro das tarifas da empresa.",
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
