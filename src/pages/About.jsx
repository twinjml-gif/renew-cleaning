import { CheckCircle2 } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import { company } from "../data/company.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function About() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        subtitle={t.aboutPage.subtitle}
        image="/images/over-renewcleaning-placeholder.jpg"
        imageAlt={t.aboutPage.title}
      />
      <section className="section split-section">
        <div>
          <p className="eyebrow">{company.domain}</p>
          <h2>{t.aboutPage.title}</h2>
          <p>{t.aboutPage.body}</p>
          <p>{language === "nl" ? company.serviceAreaNl : company.serviceAreaEn}</p>
        </div>
        <div className="feature-list">
          {t.aboutPage.values.map((value) => (
            <div key={value}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <span>{value}</span>
            </div>
          ))}
        </div>
      </section>
      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default About;
