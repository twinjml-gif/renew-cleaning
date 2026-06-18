import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { results } from "../data/results.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

function Results() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageHero
        compact
        eyebrow={t.resultsPage.eyebrow}
        title={t.resultsPage.title}
        subtitle={t.resultsPage.subtitle}
        image="/images/resultaat-bank-placeholder.jpg"
        imageAlt={t.resultsPage.title}
      />
      <section className="section">
        <SectionHeader title={t.resultsPage.title} text={t.resultsPage.subtitle} />
        <div className="results-grid">
          {results.map((item) => (
            <article key={item.id} className="result-card">
              <img src={item.image} alt={item.title[language]} />
              <div>
                <h3>{item.title[language]}</h3>
                <p>{item.description[language]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTASection title={t.servicesPage.ctaTitle} text={t.servicesPage.ctaText} />
    </>
  );
}

export default Results;
