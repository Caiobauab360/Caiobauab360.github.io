// Google Translate Silent Integration for 100% site-wide translation (PT | EN)

export const initGoogleTranslate = () => {
  if (typeof window === "undefined" || window.googleTranslateInitialized) return;
  window.googleTranslateInitialized = true;

  // Global callback required by Google Translate script
  window.googleTranslateElementInit = () => {
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "en,pt",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    } catch (e) {
      console.warn("Google Translate init:", e);
    }
  };

  // Create hidden container if not present
  if (!document.getElementById("google_translate_element")) {
    const div = document.createElement("div");
    div.id = "google_translate_element";
    div.style.display = "none";
    document.body.appendChild(div);
  }

  // Inject script
  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
  }
};

export const setLanguage = (lang) => {
  const googleLang = lang === "en" ? "en" : "pt";
  const cookieValue = `/pt/${googleLang}`;

  // Set translation cookie for Google Translate
  document.cookie = `googtrans=${cookieValue}; path=/;`;
  document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname};`;
  
  if (window.location.hostname.includes(".")) {
    const parts = window.location.hostname.split(".");
    if (parts.length >= 2) {
      const rootDomain = parts.slice(-2).join(".");
      document.cookie = `googtrans=${cookieValue}; path=/; domain=.${rootDomain};`;
    }
  }

  // Update HTML attributes
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  document.body.setAttribute("data-lang", lang);
  localStorage.setItem("portfolio_lang", lang);

  // Trigger change in hidden Google Translate select combo
  const triggerCombo = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = googleLang;
      select.dispatchEvent(new Event("change"));
      return true;
    }
    return false;
  };

  if (!triggerCombo()) {
    // Retry for up to 3 seconds until script finishes loading
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (triggerCombo() || attempts > 15) {
        clearInterval(interval);
        // If switching back to PT and combo wasn't ready, reload smoothly to reset
        if (lang === "pt" && attempts > 15) {
          window.location.reload();
        }
      }
    }, 200);
  }
};
