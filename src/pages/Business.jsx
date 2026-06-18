import { CheckCircle2 } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../components/LanguageProvider.jsx";

function Business() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.businessPage.eyebrow}
        title={t.businessPage.title}
        subtitle={t.businessPage.subtitle}
        image="/images/zakelijke-ruimte-placeholder.jpg"
        imageAlt={t.businessPage.title}
      />
      <section className="section split-section">
        <div>
          <p className="eyebrow">{t.businessPage.eyebrow}</p>
          <h2>{t.businessPage.ctaTitle}</h2>
          <p>{t.businessPage.ctaText}</p>
        </div>
        <div className="feature-list">
          {t.businessPage.points.map((point) => (
            <div key={point}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>
      <CTASection title={t.businessPage.ctaTitle} text={t.businessPage.ctaText} />
    </>
  );
}

export default Business;
