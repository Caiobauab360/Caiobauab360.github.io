import React, { useEffect, useState } from "react";
import "./style.css";
import { translatePage } from "../../i18n";

const LanguageToggle = () => {
  const [lang, setLang] = useState(
    localStorage.getItem("portfolio_lang") || "pt"
  );

  const handleLangChange = (newLang) => {
    if (newLang !== lang) {
      setLang(newLang);
    }
  };

  useEffect(() => {
    localStorage.setItem("portfolio_lang", lang);
    translatePage(lang);

    // Watch for route changes and dynamic DOM updates
    const observer = new MutationObserver(() => {
      if (lang === "en") {
        translatePage("en");
      }
    });

    observer.observe(document.getElementById("root") || document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="lang_toggle nav_ac">
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
