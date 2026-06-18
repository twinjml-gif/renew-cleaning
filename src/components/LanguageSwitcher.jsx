import { languages } from "../data/navigation.js";
import { useLanguage } from "./LanguageProvider.jsx";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={item.code === language ? "language-option is-active" : "language-option"}
          onClick={() => setLanguage(item.code)}
          aria-pressed={item.code === language}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
