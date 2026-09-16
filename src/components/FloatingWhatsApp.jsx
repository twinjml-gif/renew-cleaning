import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { company } from "../data/company.js";
import { track } from "../utils/analytics.js";
import { useLanguage } from "./LanguageProvider.jsx";

function FloatingWhatsApp() {
  const { t } = useLanguage();
  const { pathname } = useLocation();

  return (
    <a
      className="floating-whatsapp"
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={t.common.whatsapp}
      onClick={() => track("whatsapp_click", { route: pathname, cta_location: "floating", cta_text: t.common.whatsapp })}
    >
      <MessageCircle aria-hidden="true" size={24} />
      <span>{t.common.whatsapp}</span>
    </a>
  );
}

export default FloatingWhatsApp;
