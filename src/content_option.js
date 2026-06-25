import profileImage from "./assets/images/caio-profile.jpg";
import tomanBikeShareImage from "./assets/images/toman-bike-share-dashboard.png";

const logotext = "CAIO";
const meta = {
    title: "Caio Pereira Bauab",
    description: "Analista de Dados e BI | Especialista em Power BI, SQL e Python. Dashboards interativos, modelagem de dados e insights estratégicos para logística, varejo e hospitalidade.",
};

const introdata = {
    title: "Olá, sou Caio Pereira Bauab",
    animated: {
        first: "Transformo dados em insights",
        second: "Desenvolvo dashboards interativos",
        third: "Apoio decisões estratégicas com BI",
    },
    description: "Analista de Dados e BI com formação em Ciência e Tecnologia pela UNIFESP. Experiência em modelagem de dados, ETL e visualização com Power BI, SQL e Python.",
    your_img_url: profileImage,
};

const dataabout = {
    title: "Sobre mim",
    aboutme: "Analista de Dados e BI com formação em Ciência e Tecnologia pela UNIFESP e certificações em Power BI, SQL e Python pela DataCamp. Tenho experiência no desenvolvimento de dashboards interativos, modelagem de dados e geração de insights estratégicos para setores como logística, varejo, hospitalidade e transportes. Domino Power BI (DAX e Power Query), SQL e Python, e combino visão analítica com comunicação clara para traduzir dados em decisões. Atualmente atuo como analista autônomo, liderando projetos de BI do levantamento de necessidades até a entrega de soluções. Fluente em português, com inglês avançado e espanhol básico.",
};

const worktimeline = [
    {
        jobtitle: "Analista de Dados / BI",
        where: "Autônomo",
        date: "Ago/2025 - Presente",
    },
    {
        jobtitle: "Diretor de Eventos",
        where: "Núcleo UNIFESP - A.A.A.J.A",
        date: "Abr/2022 - Mar/2024",
    },
    {
        jobtitle: "B.Sc. Ciência e Tecnologia",
        where: "UNIFESP",
        date: "Mar/2021 - Jul/2025",
    },
    {
        jobtitle: "Data Analyst (Python / SQL / Power BI)",
        where: "DataCamp",
        date: "Fev/2024 - Abr/2025",
    },
];

const skills = [
    {
        name: "Power BI (DAX & Power Query)",
        value: 90,
    },
    {
        name: "SQL",
        value: 85,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "Modelagem de Dados & ETL",
        value: 85,
    },
    {
        name: "Tableau",
        value: 70,
    },
];

const services = [
    {
        title: "Desenvolvimento de Dashboards",
        description: "Criação de painéis interativos em Power BI e Tableau, com foco em KPIs, filtros dinâmicos e visualizações que facilitam a tomada de decisão.",
    },
    {
        title: "Modelagem de Dados",
        description: "Estruturação de modelos relacionais e star schema, otimização de performance e implementação de medidas DAX para análises consistentes e escaláveis.",
    },
    {
        title: "ETL e Automação de Relatórios",
        description: "Integração de fontes de dados com Power Query, SQL e Python para automatizar pipelines, reduzir trabalho manual e garantir dados confiáveis.",
    },
];

const dataportfolio = [
    {
        slug: "toman-bike-share",
        title: "Toman Bike Share Dashboard",
        img: tomanBikeShareImage,
        description: "Dashboard de KPIs para bike share: receita horária, tendências de lucro, sazonalidade e perfil dos usuários.",
        link: "/portfolio/toman-bike-share",
        linkLabel: "Ver projeto",
        powerbiEmbedUrl:
            "https://app.powerbi.com/view?r=eyJrIjoiZDEzNGE0ZmUtYmE4Mi00ZjI0LTlmMDQtOGFmZDI4MDQ0ZDdmIiwidCI6ImQyYzFmODNjLTdlN2ItNDUzMi1iMmY2LTM3ZDRmMWIzMGQ0ZSJ9",
        tools: ["Power BI", "SQL", "DAX", "Power Query"],
        overview:
            "Projeto end-to-end de Business Intelligence para a Toman Bike Share, desenvolvido a partir de uma solicitação de negócio para monitorar métricas-chave e apoiar decisões de precificação. O fluxo incluiu criação de banco de dados, queries SQL, modelagem no Power BI e entrega de um dashboard interativo alinhado à identidade visual da empresa.",
        workflow: [
            "Criação do banco de dados",
            "Desenvolvimento de queries SQL",
            "Conexão do Power BI ao banco de dados",
            "Construção do dashboard no Power BI",
            "Resposta às perguntas de análise de negócio",
        ],
        requirements: [
            "Análise de receita por hora",
            "Tendências de lucro e receita",
            "Receita sazonal",
            "Demografia dos usuários (casual vs. registrados)",
        ],
        recommendation:
            "Com base na análise de preços e no aumento substancial do ano anterior, a recomendação foi um reajuste conservador de 10% a 15% (de US$ 4,99 para US$ 5,49–US$ 5,74), considerando estratégia segmentada por tipo de usuário, monitoramento contínuo da demanda e ajustes conforme feedback do mercado.",
    },
    {
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        description: "Painel Logístico — Monitoramento de rotas, prazos de entrega e eficiência operacional no setor de transportes.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
        description: "Análise de Varejo — Performance de vendas, mix de produtos e comportamento do consumidor por região e período.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
        description: "Automação de Relatórios — Pipeline ETL com Power Query e SQL para consolidar múltiplas fontes em um único painel.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        description: "Modelagem de Dados — Star schema e medidas DAX para análises financeiras e operacionais integradas.",
        link: "#",
    },
    {
        img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
        description: "Análise com Python e SQL — Exploração de dados, estatísticas descritivas e geração de insights para apresentações executivas.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "caio_bauab@hotmail.com",
    YOUR_FONE: "(15) 97402-0202",
    description: "Estou em Tatuí, São Paulo, e aberto a oportunidades em projetos de dados e BI. Entre em contato para conversarmos sobre dashboards, modelagem de dados ou consultoria em analytics.",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Caiobauab360",
    linkedin: "https://www.linkedin.com/in/caio-bauab-032189206/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
