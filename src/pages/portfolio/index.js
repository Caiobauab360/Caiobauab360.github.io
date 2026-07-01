import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { dataportfolio, meta } from "../../content_option";

const ProjectLink = ({ project }) => {
  const label = project.linkLabel || "Ver projeto";
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

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
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
                <div
                  className="po_item_img-wrap"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={data.img}
                    alt={data.title || data.description}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div className="content">
                  {data.title && <h3 className="portfolio-card__title">{data.title}</h3>}
                  <p>{data.description}</p>
                  <ProjectLink project={data} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
