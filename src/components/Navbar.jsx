import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/renewcleaning-logo.svg";
import { company } from "../data/company.js";
import { navigation } from "../data/navigation.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useLanguage } from "./LanguageProvider.jsx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <NavLink className="brand-link" to="/" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt={`${company.name} logo`} />
        </NavLink>

        <div className="desktop-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
              to={item.path}
            >
              {item.label[language]}
            </NavLink>
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
          >
            {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mobile-nav">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) => (isActive ? "mobile-nav-link is-active" : "mobile-nav-link")}
              to={item.path}
              onClick={closeMenu}
            >
              {item.label[language]}
            </NavLink>
          ))}
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
