import { Mail, MapPin, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "../assets/renewcleaning-logo.svg";
import { company } from "../data/company.js";
import { navigation } from "../data/navigation.js";
import { track } from "../utils/analytics.js";
import { useLanguage } from "./LanguageProvider.jsx";

function Footer() {
  const { language, t } = useLanguage();
  const { pathname } = useLocation();
  const year = new Date().getFullYear();
  const isHome = pathname === "/";

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img className="footer-logo" src={logo} alt={`${company.name} logo`} />
          <p className="footer-text">{t.footer.tagline}</p>
          <p className="footer-small">
            {company.domain} · {t.footer.kvk}: {company.kvk}
          </p>
        </div>

        <div>
          <h2 className="footer-heading">{t.common.menu}</h2>
          <div className="footer-links">
            {navigation.map((item) => (
              <a key={item.section} href={isHome ? `#${item.section}` : `/#${item.section}`} onClick={() => track("navigation_click", { target_section: item.section, origin: "footer" })}>
                {item.label[language]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="footer-heading">{t.contactPage.detailsTitle}</h2>
          <div className="footer-contact">
            <a href={company.phoneHref} onClick={() => track("phone_click", { route: pathname, cta_location: "footer", section: "footer" })}>
              <Phone aria-hidden="true" size={18} />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.email}`} onClick={() => track("email_click", { route: pathname, cta_location: "footer", section: "footer" })}>
              <Mail aria-hidden="true" size={18} />
              {company.email}
            </a>
            <span>
              <MapPin aria-hidden="true" size={18} />
              {language === "nl" ? `Vestigingsplaats: ${company.location}` : `Business location: ${company.location}`}
            </span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {year} {company.name}. {t.footer.rights}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
