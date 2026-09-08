import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { results } from "../data/results.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Zakelijk en maatwerk",
    title: "Professionele reiniging voor bedrijven en maatwerk",
    intro: "Voor bedrijven en maatwerkopdrachten bekijken we eerst wat er nodig is. Deel uw situatie en ontvang een passende offerte.",
    primaryCta: "Bespreek uw situatie via WhatsApp",
    resultsCta: "Bekijk onze resultaten",
    contactCta: "Neem contact op",
    trust: ["Zakelijke reiniging op maat", "Duidelijke offerte vooraf", "Professionele apparatuur"],
    situationsEyebrow: "Mogelijke opdrachten",
    situationsTitle: "Voor welke situaties?",
    situationsText: "Denk bijvoorbeeld aan textiele onderdelen in een zakelijke ruimte of een opdracht die om een zorgvuldige beoordeling vraagt.",
    situations: ["Gestoffeerde zitmeubels", "Stoelen en banken", "Tapijt en textiele oppervlakken", "Andere textiele interieuronderdelen", "Kleine zakelijke ruimtes", "Afwijkende maatwerkvragen"],
    flowEyebrow: "Duidelijk geregeld",
    flowTitle: "Van situatie naar passende offerte",
    steps: ["Deel uw situatie", "Stuur foto's en relevante informatie", "RenewCleaning beoordeelt de opdracht", "U ontvangt een passende offerte of prijsafspraak"],
    customEyebrow: "Offerte op maat",
    customTitle: "Zakelijke reiniging — offerte op maat",
    customText: "Zakelijke opdrachten tonen we niet als één vaste vanaf-prijs. We bespreken eerst wat bij uw situatie past.",
    factorsTitle: "De prijs kan afhangen van",
    factors: ["De omvang van de opdracht", "Het aantal meubels of objecten", "Het type textiel", "De mate van vervuiling", "De praktische situatie"],
    proofEyebrow: "Echte resultaten",
    proofTitle: "Zichtbaar verschil in het textiel",
    proofText: "Een compact voor- en naresultaat van een echte RenewCleaning-reiniging.",
    before: "VOOR",
    after: "NA",
    contactEyebrow: "Eerste stap",
    contactTitle: "Bespreek uw opdracht eerst rustig",
    contactText: "Stuur foto's en een korte toelichting. Dan kunnen we samen bekijken wat passend is voor uw situatie.",
    finalTitle: "Een zakelijke of afwijkende reinigingsopdracht bespreken?",
    finalText: "Stuur enkele foto's en informatie over de situatie. Dan bekijken we wat passend is.",
  },
  en: {
    eyebrow: "Business and tailored work",
    title: "Professional cleaning for business situations",
    intro: "For business and unusual cleaning requests, we first look at what is needed. Share your situation and receive a suitable quote.",
    primaryCta: "Discuss your situation via WhatsApp",
    resultsCta: "View our results",
    contactCta: "Get in touch",
    trust: ["Tailored business cleaning", "Clear quote in advance", "Professional equipment"],
    situationsEyebrow: "Possible assignments",
    situationsTitle: "For which situations?",
    situationsText: "Think, for example, of textile elements in a business space or an assignment that needs a careful assessment.",
    situations: ["Upholstered seating", "Chairs and sofas", "Carpets and textile surfaces", "Other textile interior elements", "Small business spaces", "Unusual tailored requests"],
    flowEyebrow: "Clearly arranged",
    flowTitle: "From situation to a suitable quote",
    steps: ["Share your situation", "Send photos and relevant information", "RenewCleaning assesses the assignment", "You receive a suitable quote or price arrangement"],
    customEyebrow: "Tailored quote",
    customTitle: "Business cleaning — tailored quote",
    customText: "We do not show business assignments as one fixed starting price. We first discuss what suits your situation.",
    factorsTitle: "The price can depend on",
    factors: ["The scale of the assignment", "The number of furniture items or objects", "The textile type", "The level of soiling", "The practical situation"],
    proofEyebrow: "Real results",
    proofTitle: "Visible difference in the textile",
    proofText: "A compact before-and-after result from a real RenewCleaning cleaning job.",
    before: "BEFORE",
    after: "AFTER",
    contactEyebrow: "First step",
    contactTitle: "Discuss your assignment calmly first",
    contactText: "Send photos and a short explanation. Together we can see what suits your situation.",
    finalTitle: "Would you like to discuss a business or unusual cleaning assignment?",
    finalText: "Send a few photos and information about the situation. We will then see what is suitable.",
  },
};

function Business() {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const bankResult = results.find((item) => item.id === "bank-1");

  return (
    <div className="renew-business">
      <section className="business-hero"><div className="business-shell business-hero-grid"><div><p className="business-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="business-lead">{copy.intro}</p><div className="business-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/resultaten">{copy.resultsCta}</Link></div></div><figure className="business-hero-image"><img src="/images/collage RENEW.png" alt="Professionele apparatuur en een echt reinigingsresultaat van RenewCleaning" /></figure></div></section>
      <section className="business-trust" aria-label="Zakelijke voordelen"><div className="business-shell business-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>

      <section className="business-situations-section"><div className="business-shell"><header className="business-heading"><p className="business-kicker">{copy.situationsEyebrow}</p><h2>{copy.situationsTitle}</h2><p>{copy.situationsText}</p></header><div className="business-situations-grid">{copy.situations.map((item) => <article key={item}><Check aria-hidden="true" size={18} /><p>{item}</p></article>)}</div></div></section>

      <section className="business-flow-section"><div className="business-shell"><header className="business-heading"><p className="business-kicker">{copy.flowEyebrow}</p><h2>{copy.flowTitle}</h2></header><ol className="business-flow">{copy.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>

      <section className="business-custom-section"><div className="business-shell business-custom-panel"><div><p className="business-kicker">{copy.customEyebrow}</p><h2>{copy.customTitle}</h2><p>{copy.customText}</p></div><div className="business-factors"><h3>{copy.factorsTitle}</h3><ul>{copy.factors.map((item) => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul></div></div></section>

      <section className="business-proof-section"><div className="business-shell business-proof-grid"><header className="business-heading business-heading-dark"><p className="business-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofText}</p></header><article className="business-proof-pair"><figure><img src={bankResult.before} alt={`${copy.before}: bankreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src={bankResult.after} alt={`${copy.after}: bankreiniging`} /><figcaption>{copy.after}</figcaption></figure></article></div></section>

      <section className="business-contact-section"><div className="business-shell business-contact-panel"><div><p className="business-kicker">{copy.contactEyebrow}</p><h2>{copy.contactTitle}</h2><p>{copy.contactText}</p></div><div className="business-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/contact">{copy.contactCta}<ArrowRight aria-hidden="true" size={18} /></Link></div></div></section>

      <section className="business-final-cta"><div className="business-shell business-final-grid"><div><p className="business-kicker">{copy.eyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p></div><div className="business-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/contact">{copy.contactCta}</Link></div></div></section>
    </div>
  );
}

export default Business;
