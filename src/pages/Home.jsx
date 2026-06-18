import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { results } from "../data/results.js";
import { services } from "../data/services.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function Home() {
  const { language, t } = useLanguage();
  const featuredServices = services.slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={t.home.eyebrow}
        title={t.home.title}
        subtitle={t.home.subtitle}
        image="/images/hero-interieur-placeholder.jpg"
        imageAlt={t.home.heroImageAlt}
      >
        <p>{t.home.intro}</p>
        <div className="hero-highlights">
          {t.home.highlights.map((highlight) => (
            <span key={highlight}>
              <CheckCircle2 aria-hidden="true" size={18} />
              {highlight}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="trust-strip">
          <div>
            <ShieldCheck aria-hidden="true" size={24} />
            <span>{t.common.onLocation}</span>
          </div>
          <div>
            <MapPin aria-hidden="true" size={24} />
            <span>{t.common.fromLeiden}</span>
          </div>
          <div>
            <Clock3 aria-hidden="true" size={24} />
            <span>{t.home.qualityTitle}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title={t.home.sections.servicesTitle} text={t.home.sections.servicesText} />
        <div className="card-grid">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="section-actions">
          <Link className="btn btn-secondary" to="/diensten">
            <span>{t.common.viewServices}</span>
            <ArrowRight aria-hidden="true" size={20} />
          </Link>
          <WhatsAppButton />
        </div>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">{t.home.qualityTitle}</p>
          <h2>{t.home.qualityText}</h2>
          <p>{t.common.exactPrice}</p>
        </div>
        <div className="result-mini-grid">
          {results.slice(0, 2).map((item) => (
            <article key={item.id}>
              <img src={item.image} alt={item.title[language]} />
              <h3>{item.title[language]}</h3>
            </article>
          ))}
        </div>
      </section>

      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default Home;
