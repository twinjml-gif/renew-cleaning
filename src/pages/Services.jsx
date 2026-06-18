import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function Services() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        subtitle={t.servicesPage.subtitle}
        image="/images/apparatuur-placeholder.jpg"
        imageAlt={t.servicesPage.title}
      />
      <section className="section">
        <SectionHeader title={t.servicesPage.title} text={t.servicesPage.subtitle} />
        <div className="card-grid three">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default Services;
