import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, contactConfig, socialprofils } from "../../content_option";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactUs = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: "Mensagem enviada com sucesso! Obrigado pelo contato.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            ...formData,
            loading: false,
            alertmessage: `Falha ao enviar a mensagem! ${error.text}`,
            variant: "danger",
            show: true,
          });
          const alertElem = document.getElementsByClassName("co_alert")[0];
          if (alertElem) alertElem.scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Container className="contact_page_container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contato</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="contact_content_wrapper">
          <Row className="mb-4 mt-3 pt-md-2">
            <Col lg="12">
              <h1 className="display-4 mb-3">Entre em contato</h1>
              <hr className="t_border my-3 ml-0 text-left" />
            </Col>
          </Row>
          <Row className="sec_sp align-items-center">
            <Col lg="12">
              <Alert
                variant={formData.variant}
                className={`rounded-0 co_alert ${
                  formData.show ? "d-block" : "d-none"
                }`}
                onClose={() => setFormdata({ ...formData, show: false })}
                dismissible
              >
                <p className="my-0">{formData.alertmessage}</p>
              </Alert>
            </Col>

            <Col lg="5" className="mb-5 mb-lg-0">
              <div className="contact_info_card">
                <h3 className="color_sec py-2 contact_info_title">Fale comigo</h3>
                <p className="contact_info_desc">{contactConfig.description}</p>

                <div className="contact_status_badge mb-4">
                  <span className="status_dot"></span>
                  <span>Disponível para projetos freelance e posições Full-time</span>
                </div>

                <div className="contact_channels">
                  <a
                    href={`mailto:${contactConfig.YOUR_EMAIL}`}
                    className="contact_channel_card"
                  >
                    <span className="channel_icon">
                      <FaEnvelope />
                    </span>
                    <div className="channel_details">
                      <span className="channel_label">Email Direto</span>
                      <span className="channel_value">{contactConfig.YOUR_EMAIL}</span>
                    </div>
                  </a>

                  {socialprofils.linkedin && (
                    <a
                      href={socialprofils.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="contact_channel_card"
                    >
                      <span className="channel_icon">
                        <FaLinkedin />
                      </span>
                      <div className="channel_details">
                        <span className="channel_label">LinkedIn</span>
                        <span className="channel_value">Conectar no LinkedIn</span>
                      </div>
                    </a>
                  )}

                  {socialprofils.github && (
                    <a
                      href={socialprofils.github}
                      target="_blank"
                      rel="noreferrer"
                      className="contact_channel_card"
                    >
                      <span className="channel_icon">
                        <FaGithub />
                      </span>
                      <div className="channel_details">
                        <span className="channel_label">GitHub</span>
                        <span className="channel_value">Ver repositórios de código</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </Col>

            <Col lg="7">
              <div className="contact_form_card">
                <form onSubmit={handleSubmit} className="contact__form w-100">
                  <Row>
                    <Col lg="6" className="form-group mb-3">
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nome"
                        value={formData.name || ""}
                        type="text"
                        required
                        onChange={handleChange}
                      />
                    </Col>
                    <Col lg="6" className="form-group mb-3">
                      <input
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={formData.email || ""}
                        required
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Mensagem"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end mt-4">
                    <button className="btn ac_btn contact_submit_btn" type="submit">
                      {formData.loading ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className={formData.loading ? "loading-bar" : "d-none"}></div>
    </HelmetProvider>
  );
};
