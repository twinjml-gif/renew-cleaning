import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { company } from "../data/company.js";
import { track } from "../utils/analytics.js";
import { useLanguage } from "./LanguageProvider.jsx";

function WhatsAppButton({ className = "", variant = "primary", label, tracking = {} }) {
  const { t } = useLanguage();
  const { pathname } = useLocation();
  const ctaText = label || t.common.requestQuote;

  return (
    <a
      className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"} ${className}`}
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      onClick={() => track("whatsapp_click", {
        route: pathname,
        cta_location: "cta",
        cta_text: ctaText,
        ...tracking,
      })}
    >
      <MessageCircle aria-hidden="true" size={20} />
      <span>{ctaText}</span>
    </a>
  );
}

export default WhatsAppButton;
