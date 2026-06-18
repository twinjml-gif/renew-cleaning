import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider.jsx";

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <article className={isOpen ? "faq-item is-open" : "faq-item"}>
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen}>
        <span>{item.question[language]}</span>
        <ChevronDown aria-hidden="true" size={20} />
      </button>
      {isOpen ? <p>{item.answer[language]}</p> : null}
    </article>
  );
}

export default FAQItem;
