import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/renewcleaning-logo.svg";
import { company } from "../data/company.js";
import { navigation } from "../data/navigation.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useLanguage } from "./LanguageProvider.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { hash, pathname } = useLocation();
  const { language, t } = useLanguage();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return undefined;

    const sectionIds = navigation.map((item) => item.section);
    const hashSection = hash.replace("#", "");
    if (sectionIds.includes(hashSection)) setActiveSection(hashSection);

    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const active = atPageEnd
        ? "contact"
        : sections.reduce((current, section) => (
          section.getBoundingClientRect().top <= activationLine ? section.id : current
        ), "home");
      setActiveSection(active);
    };

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-18% 0px -62% 0px",
      threshold: [0, 0.12, 0.35],
    });
    const footer = document.querySelector(".footer");
    const footerObserver = footer
      ? new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) setActiveSection("contact");
      }, { threshold: 0.01 })
      : null;

    sections.forEach((section) => observer.observe(section));
    if (footer && footerObserver) footerObserver.observe(footer);
    updateActiveSection();

    const onHashChange = () => {
      const next = window.location.hash.replace("#", "");
      if (sectionIds.includes(next)) setActiveSection(next);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      observer.disconnect();
      footerObserver?.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [hash, isHome]);

  function closeMenu() {
    setIsOpen(false);
  }

  function hrefFor(section) {
    return isHome ? `#${section}` : `/#${section}`;
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="brand-link" href={hrefFor("home")} onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt={`${company.name} logo`} />
        </a>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.section}
              className={isHome && activeSection === item.section ? "nav-link is-active" : "nav-link"}
              href={hrefFor(item.section)}
              aria-current={isHome && activeSection === item.section ? "location" : undefined}
            >
              {item.label[language]}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <LanguageSwitcher />
          <a
            className="icon-cta"
            href={company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label={t.common.whatsapp}
          >
            <MessageCircle aria-hidden="true" size={20} />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t.common.closeNavigation : t.common.openNavigation}
            aria-expanded={isOpen}
            aria-controls="primary-mobile-navigation"
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mobile-nav" id="primary-mobile-navigation">
          {navigation.map((item) => (
            <a
              key={item.section}
              className={isHome && activeSection === item.section ? "mobile-nav-link is-active" : "mobile-nav-link"}
              href={hrefFor(item.section)}
              onClick={closeMenu}
              aria-current={isHome && activeSection === item.section ? "location" : undefined}
            >
              {item.label[language]}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
