import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import LanguageToggle from "../components/languagetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const navLinks = [
    { title: "Início", path: "/", exact: true },
    { title: "Portfolio BI", path: "/portfolio", exact: false },
    { title: "Sobre mim", path: "/about", exact: true },
    { title: "Entre em contato", path: "/contact", exact: true },
  ];

  const isLinkActive = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <LanguageToggle />
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  {navLinks.map((item) => {
                    const active = isLinkActive(item);
                    return (
                      <li
                        key={item.path}
                        className={`menu_item ${active ? "menu_item--active" : ""}`}
                      >
                        <Link
                          onClick={handleToggle}
                          to={item.path}
                          className="my-3 menu_link"
                        >
                          <span className="menu_dot"></span>
                          <span className="menu_text">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3 p-md-4">
            <div className="d-flex align-items-center menu_socials">
              <a
                href={socialprofils.github}
                target="_blank"
                rel="noreferrer"
                className="menu_social_link"
              >
                <FaGithub className="me-2" /> GitHub
              </a>
              <a
                href={socialprofils.linkedin}
                target="_blank"
                rel="noreferrer"
                className="menu_social_link"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
            </div>
            <p className="copyright m-0 mt-2 mt-md-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
