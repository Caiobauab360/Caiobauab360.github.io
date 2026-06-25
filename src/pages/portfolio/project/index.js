import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams, Navigate } from "react-router-dom";
import { dataportfolio, meta } from "../../../content_option";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = dataportfolio.find((item) => item.slug === slug);

  if (!project || !project.powerbiEmbedUrl) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <HelmetProvider>
      <Container className="About-header project-detail">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {project.title} | {meta.title}
          </title>
          <meta name="description" content={project.description} />
        </Helmet>
        <Row className="mb-4 mt-3 pt-md-3">
          <Col lg="10">
            <Link to="/portfolio" className="project-detail__back">
              ← Voltar ao portfólio
            </Link>
            <h1 className="display-4 mb-3 mt-3">{project.title}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
            <p className="project-detail__overview">{project.overview}</p>
            {project.tools && (
              <div className="project-detail__tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="project-detail__tag">
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg="12">
            <div className="project-detail__embed">
              <iframe
                title={project.title}
                src={project.powerbiEmbedUrl}
                frameBorder="0"
                allowFullScreen={true}
              />
            </div>
            <p className="project-detail__embed-note">
              Dashboard interativo publicado no Power BI Service.
            </p>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Fluxo do projeto</h3>
          </Col>
          <Col lg="7">
            <ol className="project-detail__list">
              {project.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Requisitos atendidos</h3>
          </Col>
          <Col lg="7">
            <ul className="project-detail__list">
              {project.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
          </Col>
        </Row>

        {project.recommendation && (
          <Row className="sec_sp mb-5">
            <Col lg="5">
              <h3 className="color_sec py-4">Principais insights</h3>
            </Col>
            <Col lg="7">
              <p>{project.recommendation}</p>
            </Col>
          </Row>
        )}

        <Row className="mb-5">
          <Col lg="12">
            <a
              href={project.powerbiEmbedUrl}
              target="_blank"
              rel="noreferrer"
              className="project-detail__external"
            >
              Abrir dashboard em tela cheia
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
