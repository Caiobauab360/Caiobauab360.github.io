// Simple and fluid internationalization dictionary and translation engine
export const translations = {
  // Navigation & Header
  "Início": "Home",
  "Portfolio BI": "BI Portfolio",
  "Sobre mim": "About Me",
  "Entre em contato": "Contact",

  // Home Page
  "Olá, eu sou Caio Bauab": "Hi, I'm Caio Bauab",
  "Explorar Projetos": "Explore Projects",
  "Excel Avançado": "Advanced Excel",
  "ETL & Automação": "ETL & Automation",
  "Analista de Dados": "Data Analyst",
  "Engenharia de ETL & Automação": "ETL & Automation Engineering",
  "Modelagem Preditiva & Python": "Predictive Modeling & Python",
  "Sou Analista de Dados e BI especializado em transformar dados brutos em decisões estratégicas de alto impacto. Atuação com SQL, Python, Power BI, Tableau e Cloud Data Warehouses para engenharia, modelagem dimensional e storytelling executivo.":
    "I am a Data & BI Analyst specialized in transforming raw data into high-impact strategic decisions. Proficient in SQL, Python, Power BI, Tableau, and Cloud Data Warehouses for engineering, dimensional modeling, and executive storytelling.",

  // About Page
  "Um pouco sobre mim": "A little about me",
  "Sou Analista de Dados e BI formado em Ciência e Tecnologia pela UNIFESP, com atuação especializada na transformação de dados brutos em decisões estratégicas de alto impacto. Minha experiência abrange o ciclo completo de dados: engenharia de dados/ETL com SQL e Python, modelagem dimensional (Star/Snowflake Schema) em Cloud Data Warehouses, e criação de soluções de Business Intelligence interativas em Power BI e Tableau. Possuo sólida vivência internacional em inglês (ILAC Canadá) e perfil voltado à tradução de requisitos técnicos em soluções de negócios para lideranças e executivos.":
    "I am a Data & BI Analyst graduated in Science and Technology from UNIFESP, specializing in turning raw data into high-impact strategic decisions. My experience covers the complete data lifecycle: data engineering/ETL with SQL and Python, dimensional modeling (Star/Snowflake Schema) in Cloud Data Warehouses, and creating interactive Business Intelligence solutions in Power BI and Tableau. I have solid international experience in English (ILAC Canada) and a proven profile in translating technical requirements into business solutions for executives.",
  "Trajetória Profissional": "Professional Experience",
  "EXPERIÊNCIA PROFISSIONAL": "PROFESSIONAL EXPERIENCE",
  "FORMAÇÃO ACADÊMICA & INTERCÂMBIO": "EDUCATION & EXCHANGE",
  "Desenvolvedor BI & Analista de Dados": "BI Developer & Data Analyst",
  "Autônomo / Consultoria": "Freelance / Consulting",
  "Presente": "Present",
  "Diretor de Eventos & Gestão Operacional": "Events & Operational Management Director",
  "B.Sc. Interdisciplinar em Ciência e Tecnologia": "B.Sc. in Science and Technology",
  "Formação Profissional em Data Analytics (Python, SQL, BI)": "Professional Career in Data Analytics (Python, SQL, BI)",
  "Intercâmbio Acadêmico & Inglês Avançado": "Academic Exchange & Advanced English",
  "Habilidades": "Skills",
  "Serviços": "Services",

  // Services
  "Desenvolvimento de Dashboards Executivos & BI": "Executive Dashboards & BI Development",
  "Criação de painéis interativos e de alto impacto visual em Power BI. Transformação de KPIs complexos em visões intuitivas, otimizadas para tomadas de decisão rápidas e alinhadas aos objetivos estratégicos do negócio.":
    "Creation of interactive, high-impact visual dashboards in Power BI. Transforming complex KPIs into intuitive views optimized for rapid decision-making aligned with strategic business goals.",
  "Engenharia, ETL & Modelagem de Dados": "Data Engineering, ETL & Modeling",
  "Extração, limpeza e estruturação de dados (Power Query, SQL e Python). Modelagem dimensional eficiente e desenvolvimento de medidas avançadas em DAX para garantir relatórios rápidos, escaláveis e precisos.":
    "Data extraction, cleansing, and structuring (Power Query, SQL, and Python). Efficient dimensional modeling and advanced DAX measure development to ensure fast, scalable, and accurate reports.",
  "Análise Diagnóstica & Análise de Negócios": "Diagnostic & Business Analytics",
  "Identificação de padrões, tendências operacionais e gargalos financeiros. Aplicação de inteligência de dados para responder a perguntas estratégicas de negócio e apoiar planos de ação orientados a ROI.":
    "Identification of patterns, operational trends, and financial bottlenecks. Applying data intelligence to answer strategic business questions and support ROI-driven action plans.",
  "Automação & Governança de Relatórios": "Report Automation & Governance",
  "Otimização e automação de fluxos de trabalho de dados, reduzindo o tempo gasto em tarefas manuais, eliminando inconsistências e garantindo a atualização contínua das métricas.":
    "Optimization and automation of data workflows, reducing manual effort, eliminating inconsistencies, and ensuring continuous metric refreshes.",

  // Contact Page
  "Fale comigo": "Get in Touch",
  "Disponível para projetos freelance e posições Full-time": "Available for freelance projects and Full-time roles",
  "Email Direto": "Direct Email",
  "Conectar no LinkedIn": "Connect on LinkedIn",
  "Ver repositórios de código": "View code repositories",
  "Enviar Mensagem": "Send Message",
  "Enviando...": "Sending...",
  "Nome": "Name",
  "Mensagem": "Message",
  "Sinta-se à vontade para entrar em contato para colaborações, projetos freelance ou apenas para se conectar. Responderei o mais breve possível.":
    "Feel free to reach out for collaborations, freelance projects, or just to connect. I will respond as soon as possible.",

  // Portfolio
  "Ver detalhes": "View Details",
  "Ver detalhes do projeto": "View Project Details",
  "Abrir dashboard em tela cheia": "Open dashboard in full screen",
  "Fluxo do projeto": "Project Workflow",
  "Requisitos atendidos": "Requirements Addressed",
  "Resultados Chave": "Key Results",
  "Conclusão": "Conclusion",
  "Principais insights": "Key Insights"
};

// Inverted dictionary for EN -> PT
const ptTranslations = {};
for (const [pt, en] of Object.entries(translations)) {
  ptTranslations[en] = pt;
}

// Function to translate text nodes in DOM
export const translatePage = (targetLang) => {
  const dict = targetLang === "en" ? translations : ptTranslations;
  
  const walkTextNodes = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const trimmed = node.nodeValue.trim();
      if (dict[trimmed]) {
        node.nodeValue = node.nodeValue.replace(trimmed, dict[trimmed]);
      }
    } else {
      if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "IFRAME") {
        for (let child of node.childNodes) {
          walkTextNodes(child);
        }
      }
    }
  };

  walkTextNodes(document.body);

  // Translate placeholders
  document.querySelectorAll("input, textarea").forEach((el) => {
    if (el.placeholder && dict[el.placeholder.trim()]) {
      el.placeholder = dict[el.placeholder.trim()];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = targetLang === "en" ? "en" : "pt-BR";
  document.body.setAttribute("data-lang", targetLang);
};
