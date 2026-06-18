import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languages } from "../data/navigation.js";
import { siteContent } from "../data/siteContent.js";

const LanguageContext = createContext(null);
const defaultLanguage = "nl";
const supportedLanguages = languages.map((language) => language.code);

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem("renewcleaning-language");
  return supportedLanguages.includes(savedLanguage) ? savedLanguage : defaultLanguage;
}

function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(nextLanguage) {
    if (!supportedLanguages.includes(nextLanguage)) return;
    window.localStorage.setItem("renewcleaning-language", nextLanguage);
    setLanguageState(nextLanguage);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: siteContent[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export default LanguageProvider;
