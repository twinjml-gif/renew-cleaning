import { Mail } from "lucide-react";
import { company } from "../data/company.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import TrackedContactLink from "./TrackedContactLink.jsx";
import { useLanguage } from "./LanguageProvider.jsx";

function CTASection({ title, text, whatsAppLabel }) {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div>
        <p className="eyebrow">{t.common.contactUs}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <WhatsAppButton label={whatsAppLabel} tracking={{ cta_location: "final_cta", section: "final_cta" }} />
        <TrackedContactLink eventName="email_click" tracking={{ cta_location: "final_cta", section: "final_cta" }} className="btn btn-secondary" href={`mailto:${company.email}`}>
          <Mail aria-hidden="true" size={20} />
          <span>{t.common.email}</span>
        </TrackedContactLink>
      </div>
    </section>
  );
}

export default CTASection;
