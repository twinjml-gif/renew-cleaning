import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { prices } from "../data/pricing.js";
import { results } from "../data/results.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Echte RenewCleaning-resultaten",
    title: "Echte resultaten van onze reinigingen",
    intro: "Bekijk echte voor- en naresultaten van banken, matrassen en stoelen die door RenewCleaning zijn gereinigd.",
    heroImageAlt: "Na: professioneel gereinigde stoffen bank",
    heroPairLabel: "Voor en na bankreiniging",
    chairVideoLabel: "eetkamerstoel reinigen",
    chairPriceLabel: "Eetkamerstoelen reinigen",
    primaryCta: "Stuur foto's voor uw exacte prijs",
    servicesCta: "Bekijk onze diensten",
    trust: ["Echte voor/na-resultaten", "Professionele reiniging op locatie", "Foto's voor exacte prijs"],
    featuredEyebrow: "Uitgelicht resultaat",
    featuredTitle: "Bankreiniging in beeld",
    featuredText: "Een duidelijke vergelijking van dezelfde bank voor en na de reiniging.",
    banksEyebrow: "Meer bankresultaten",
    banksTitle: "Het verschil ziet u in het textiel",
    banksText: "Twee extra voorbeelden van echte bankreinigingen.",
    mattressEyebrow: "Matrasresultaat",
    mattressTitle: "Matras reinigen",
    mattressText: "Ook hier ziet u dezelfde situatie voor en na de reiniging.",
    chairsEyebrow: "Eetkamerstoelen",
    chairsTitle: "Reiniging van stoelen in beweging",
    chairsText: "Bekijk de beelden voor en na de reiniging. De vanaf-prijs geldt per eetkamerstoel.",
    whatEyebrow: "Duidelijk vergelijken",
    whatTitle: "Wat u op onze beelden ziet",
    whatText: "We tonen echte voor- en naresultaten zonder filters of overdreven claims. Stuur foto's van uw eigen meubel, dan bekijken we wat passend is voor uw situatie.",
    pricesCta: "Bekijk alle prijzen",
    finalTitle: "Wilt u weten wat uw meubel kost om te reinigen?",
    finalText: "Stuur enkele duidelijke foto's via WhatsApp. Op basis daarvan ontvangt u een prijs passend bij uw situatie.",
    before: "VOOR",
    after: "NA",
  },
  en: {
    eyebrow: "Real RenewCleaning results",
    title: "Real results from our cleaning work",
    intro: "View real before-and-after results of sofas, mattresses and chairs cleaned by RenewCleaning.",
    heroImageAlt: "After: professionally cleaned fabric sofa",
    heroPairLabel: "Before and after sofa cleaning",
    chairVideoLabel: "dining chair cleaning",
    chairPriceLabel: "Dining chair cleaning",
    primaryCta: "Send photos for your exact price",
    servicesCta: "View our services",
    trust: ["Real before-and-after results", "Professional cleaning on location", "Photos for an exact price"],
    featuredEyebrow: "Featured result",
    featuredTitle: "Sofa cleaning in view",
    featuredText: "A clear comparison of the same sofa before and after cleaning.",
    banksEyebrow: "More sofa results",
    banksTitle: "The difference shows in the textile",
    banksText: "Two additional examples of real sofa cleaning work.",
    mattressEyebrow: "Mattress result",
    mattressTitle: "Mattress cleaning",
    mattressText: "Here too, you see the same situation before and after cleaning.",
    chairsEyebrow: "Dining chairs",
    chairsTitle: "Chair cleaning in motion",
    chairsText: "View the footage before and after cleaning. The starting price applies per dining chair.",
    whatEyebrow: "A clear comparison",
    whatTitle: "What you see in our images",
    whatText: "We show real before-and-after results without filters or exaggerated claims. Send photos of your own furniture and we will assess what suits your situation.",
    pricesCta: "View all prices",
    finalTitle: "Would you like to know the cost of cleaning your furniture?",
    finalText: "Send a few clear photos via WhatsApp. Based on those, you will receive a price suited to your situation.",
    before: "BEFORE",
    after: "AFTER",
  },
};

function ResultPair({ item, beforeLabel, afterLabel, featured = false }) {
  return (
    <article className={`results-pair results-pair-${item.id}${featured ? " results-pair-featured" : ""}`}>
      <div className="results-pair-images">
        <figure>
          <img src={item.before} alt={`${beforeLabel}: ${item.title}`} />
          <figcaption>{beforeLabel}</figcaption>
        </figure>
        <figure>
          <img src={item.after} alt={`${afterLabel}: ${item.title}`} />
          <figcaption>{afterLabel}</figcaption>
        </figure>
      </div>
      <div className="results-pair-caption">
        <h3>{item.title}</h3>
        <p>{item.caption}</p>
      </div>
    </article>
  );
}

function Results() {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const bankResults = results.filter((item) => item.category === "bank");
  const featuredBank = bankResults[0];
  const mattress = results.find((item) => item.category === "matras");
  const chairPrice = prices.find((item) => item.id === "stoelen");
  const localizedItem = (item) => ({ ...item, title: item.title[language], caption: item.caption[language] });

  return (
    <div className="renew-results">
      <section className="results-hero"><div className="results-shell results-hero-grid"><div><p className="results-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="results-lead">{copy.intro}</p><div className="results-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/diensten">{copy.servicesCta}</Link></div></div><div className="results-hero-image results-hero-pair" role="group" aria-label={copy.heroPairLabel}><figure><img src={featuredBank.before} alt={`${copy.before}: ${localizedItem(featuredBank).title}`} /><figcaption>{copy.before}</figcaption></figure><figure><img src={featuredBank.after} alt={copy.heroImageAlt} /><figcaption>{copy.after}</figcaption></figure></div></div></section>
      <section className="results-trust" aria-label="Waarom RenewCleaning"><div className="results-shell results-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>

      <section className="results-featured-section"><div className="results-shell"><header className="results-heading"><p className="results-kicker">{copy.featuredEyebrow}</p><h2>{copy.featuredTitle}</h2><p>{copy.featuredText}</p></header><ResultPair item={localizedItem(featuredBank)} beforeLabel={copy.before} afterLabel={copy.after} featured /></div></section>
      <section className="results-banks-section"><div className="results-shell"><header className="results-heading results-heading-dark"><p className="results-kicker">{copy.banksEyebrow}</p><h2>{copy.banksTitle}</h2><p>{copy.banksText}</p></header><div className="results-bank-grid">{bankResults.slice(1).map((item) => <ResultPair key={item.id} item={localizedItem(item)} beforeLabel={copy.before} afterLabel={copy.after} />)}</div></div></section>
      <section className="results-mattress-section"><div className="results-shell results-mattress-grid"><header className="results-heading"><p className="results-kicker">{copy.mattressEyebrow}</p><h2>{copy.mattressTitle}</h2><p>{copy.mattressText}</p></header><ResultPair item={localizedItem(mattress)} beforeLabel={copy.before} afterLabel={copy.after} /></div></section>

      <section className="results-chairs-section"><div className="results-shell"><header className="results-heading"><p className="results-kicker">{copy.chairsEyebrow}</p><h2>{copy.chairsTitle}</h2><p>{copy.chairsText}</p></header><div className="results-video-grid"><figure><video muted playsInline controls preload="metadata" aria-label={`${copy.before}: ${copy.chairVideoLabel}`}><source src="/videos/stoel before vid.mp4" type="video/mp4" /></video><figcaption>{copy.before}</figcaption></figure><figure><video muted playsInline controls preload="metadata" aria-label={`${copy.after}: ${copy.chairVideoLabel}`}><source src="/videos/stoel after vid.mp4" type="video/mp4" /></video><figcaption>{copy.after}</figcaption></figure></div><p className="results-chair-price">{copy.chairPriceLabel}<span aria-hidden="true"> · </span>{chairPrice.price[language]}</p></div></section>
      <section className="results-explainer-section"><div className="results-shell results-explainer-panel"><MessageCircle aria-hidden="true" size={30} /><div><p className="results-kicker">{copy.whatEyebrow}</p><h2>{copy.whatTitle}</h2><p>{copy.whatText}</p></div><div className="results-explainer-actions"><Link className="results-inline-link" to="/prijzen">{copy.pricesCta}<ArrowRight aria-hidden="true" size={18} /></Link></div></div></section>
      <CTASection title={copy.finalTitle} text={copy.finalText} whatsAppLabel={copy.primaryCta} />
    </div>
  );
}

export default Results;
