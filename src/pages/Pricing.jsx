import { MessageCircle } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import PriceCard from "../components/PriceCard.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { prices } from "../data/pricing.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function Pricing() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.pricingPage.eyebrow}
        title={t.pricingPage.title}
        subtitle={t.pricingPage.subtitle}
        image="/images/resultaat-tapijt-placeholder.jpg"
        imageAlt={t.pricingPage.title}
      />
      <section className="section">
        <div className="price-grid">
          {prices.map((item) => (
            <PriceCard key={item.id} item={item} />
          ))}
        </div>
      </section>
      <section className="section">
        <div className="price-note">
          <MessageCircle aria-hidden="true" size={28} />
          <div>
            <h2>{t.pricingPage.noteTitle}</h2>
            <p>{t.pricingPage.noteText}</p>
          </div>
          <WhatsAppButton />
        </div>
      </section>
      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default Pricing;
