import { Camera, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { company } from "../data/company.js";
import { socials } from "../data/socials.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const socialIcons = {
  camera: Camera,
  facebook: Facebook,
  instagram: Instagram,
  message: MessageCircle,
  music: Music2,
};

function Contact() {
  const { language, t } = useLanguage();
  const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    t.contactPage.mailSubject,
  )}&body=${t.contactPage.mailBody}`;

  return (
    <>
      <PageHero
        compact
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        subtitle={t.contactPage.subtitle}
        image="/images/apparatuur-placeholder.jpg"
        imageAlt={t.contactPage.title}
      />
      <section className="section contact-grid">
        <div className="contact-panel">
          <p className="eyebrow">{t.contactPage.detailsTitle}</p>
          <h2>{company.name}</h2>
          <div className="contact-actions">
            <WhatsAppButton label={t.common.whatsapp} />
            <a className="btn btn-secondary" href={company.phoneHref}>
              <Phone aria-hidden="true" size={20} />
              <span>{t.common.call}</span>
            </a>
            <a className="btn btn-secondary" href={mailto}>
              <Mail aria-hidden="true" size={20} />
              <span>{t.common.email}</span>
            </a>
          </div>
          <div className="contact-lines">
            <a href={company.phoneHref}>
              <Phone aria-hidden="true" size={18} />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`}>
              <Mail aria-hidden="true" size={18} />
              {company.email}
            </a>
            <span>
              <MapPin aria-hidden="true" size={18} />
              {company.location}
            </span>
            <span>{language === "nl" ? company.serviceAreaNl : company.serviceAreaEn}</span>
            <span>
              {t.footer.kvk}: {company.kvk}
            </span>
          </div>
        </div>

        <div className="contact-panel social-panel">
          <p className="eyebrow">{t.contactPage.socialsTitle}</p>
          <h2>{t.contactPage.socialsTitle}</h2>
          <p>{t.contactPage.socialsText}</p>
          <div className="social-grid">
            {socials.map((social) => {
              const Icon = socialIcons[social.icon] || MessageCircle;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target={social.url === "#" ? undefined : "_blank"}
                  rel={social.url === "#" ? undefined : "noreferrer"}
                  aria-label={social.label}
                >
                  <Icon aria-hidden="true" size={22} />
                  <span>{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
