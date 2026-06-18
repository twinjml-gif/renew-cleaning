import { MessageCircle } from "lucide-react";
import { company } from "../data/company.js";
import { useLanguage } from "./LanguageProvider.jsx";

function FloatingWhatsApp() {
  const { t } = useLanguage();

  return (
    <a
      className="floating-whatsapp"
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label={t.common.whatsapp}
    >
      <MessageCircle aria-hidden="true" size={24} />
      <span>{t.common.whatsapp}</span>
    </a>
  );
}

export default FloatingWhatsApp;
