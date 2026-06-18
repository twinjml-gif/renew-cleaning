import { MessageCircle } from "lucide-react";
import { company } from "../data/company.js";
import { useLanguage } from "./LanguageProvider.jsx";

function WhatsAppButton({ className = "", variant = "primary", label }) {
  const { t } = useLanguage();

  return (
    <a
      className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"} ${className}`}
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>{label || t.common.requestQuote}</span>
    </a>
  );
}

export default WhatsAppButton;
