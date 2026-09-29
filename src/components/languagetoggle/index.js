import React, { useEffect, useState } from "react";
import "./style.css";
import { initGoogleTranslate, setLanguage } from "../../i18n";

const LanguageToggle = () => {
  const [lang, setLang] = useState(
    localStorage.getItem("portfolio_lang") || "pt"
  );

  useEffect(() => {
    initGoogleTranslate();
    const savedLang = localStorage.getItem("portfolio_lang") || "pt";
    if (savedLang === "en") {
      setLanguage("en");
    }
  }, []);

  const handleLangChange = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
      setLanguage(newLang);
    }
  };

  return (
    <div className="lang_toggle nav_ac notranslate" translate="no">
      <button
        type="button"
        className={`lang_btn ${lang === "pt" ? "lang_btn--active" : ""}`}
        onClick={() => handleLangChange("pt")}
        title="Mudar idioma para Português"
      >
        PT
      </button>
      <span className="lang_divider">|</span>
      <button
        type="button"
        className={`lang_btn ${lang === "en" ? "lang_btn--active" : ""}`}
        onClick={() => handleLangChange("en")}
        title="Change language to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
