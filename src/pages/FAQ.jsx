import CTASection from "../components/CTASection.jsx";
import FAQItem from "../components/FAQItem.jsx";
import PageHero from "../components/PageHero.jsx";
import { faqs } from "../data/faq.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function FAQ() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.faqPage.eyebrow}
        title={t.faqPage.title}
        subtitle={t.faqPage.subtitle}
      />
      <section className="section faq-list">
        {faqs.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </section>
      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default FAQ;
