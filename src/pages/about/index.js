import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  workExperiences,
  educationTimeline,
  skillCategories,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Sobre | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Sobre mim</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Trajetória Profissional</h3>
          </Col>
          <Col lg="7">
            {/* 1. EXPERIÊNCIA PROFISSIONAL */}
            <div className="timeline_category mb-5">
              <h4 className="timeline_category_title mb-4">
                Experiência Profissional
              </h4>
              <div className="timeline_items">
                {workExperiences.map((exp, i) => (
                  <div key={i} className="timeline_item">
                    <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
                      <div className="timeline_header">
                        <strong className="timeline_role">{exp.role}</strong>
                        <span className="timeline_separator"> | </span>
                        <strong className="timeline_company">{exp.company}</strong>
                      </div>
                      <span className="timeline_date">{exp.date}</span>
                    </div>
                    {exp.descriptions && exp.descriptions.length > 0 && (
                      <ul className="timeline_desc_list">
                        {exp.descriptions.map((desc, j) => (
                          <li key={j} className="timeline_desc_item">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 2. FORMAÇÃO ACADÊMICA & INTERCÂMBIO */}
            <div className="timeline_category">
              <h4 className="timeline_category_title mb-4">
                Formação Acadêmica & Intercâmbio
              </h4>
              <div className="timeline_items">
                {educationTimeline.map((edu, i) => (
                  <div key={i} className="timeline_item">
                    <div className="d-flex flex-wrap justify-content-between align-items-baseline gap-2">
                      <div className="timeline_header">
                        <strong className="timeline_role">{edu.title}</strong>
                        <span className="timeline_separator"> | </span>
                        <strong className="timeline_company">{edu.institution}</strong>
                      </div>
                      <span className="timeline_date">{edu.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Habilidades</h3>
          </Col>
          <Col lg="7">
            <div className="skills_grid">
              {skillCategories.map((cat, i) => (
                <div key={i} className="skill_card">
                  <h4 className="skill_card_title">{cat.title}</h4>
                  <ul className="skill_card_list">
                    {cat.skills.map((skill, j) => (
                      <li key={j} className="skill_card_item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Serviços</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
