import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

const ProjectLink = ({ project }) => {
  const label = "Ver detalhes";
  const isInternal = project.link.startsWith("/");

  if (isInternal) {
    return (
      <Link to={project.link} className="portfolio-card__link">
        {label}
      </Link>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="portfolio-card__link"
    >
      {label}
    </a>
  );
};

const ProjectTitle = ({ project }) => {
  const isInternal = project.link.startsWith("/");

  if (isInternal) {
    return (
      <Link to={project.link} className="portfolio-card__title-link">
        {project.title}
      </Link>
    );
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="portfolio-card__title-link"
    >
      {project.title}
    </a>
  );
};

export const Portfolio = ({ isEmbedded = false }) => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        {!isEmbedded && (
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
        )}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio BI </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={data.slug || i} className="po_item">
                <div className="po_item_img-wrap">
                  <img
                    src={data.img}
                    alt={data.title || data.description}
                    className="po_item_img"
                  />
                  <div className="po_item_overlay">
                    <ProjectLink project={data} />
                  </div>
                </div>
                <div className="po_item_info">
                  <h3 className="portfolio-card__title">
                    <ProjectTitle project={data} />
                  </h3>
                  {data.tools && data.tools.length > 0 && (
                    <div className="portfolio-card__tools">
                      {data.tools.map((tool, idx) => (
                        <span key={idx} className="portfolio-card__badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
