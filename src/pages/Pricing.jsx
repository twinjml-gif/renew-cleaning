import { ArrowRight, Building2, Check, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { prices } from "../data/pricing.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Heldere vanaf-prijzen",
    title: "Heldere prijzen voor professionele reiniging",
    intro: "Bekijk onze transparante vanaf-prijzen. Stuur duidelijke foto's via WhatsApp voor een exacte prijs die past bij uw situatie.",
    primaryCta: "Stuur foto's voor uw exacte prijs",
    servicesCta: "Bekijk onze diensten",
    trust: ["Transparante vanaf-prijzen", "Exacte prijs na foto's", "Reiniging op locatie"],
    pricingEyebrow: "Onze vanaf-prijzen",
    pricingTitle: "Kies uw reiniging",
    pricingText: "De vanaf-prijs geeft richting. Voor de exacte prijs bekijken we uw foto's zorgvuldig.",
    cardCta: "Stuur foto's voor uw exacte prijs",
    factorsEyebrow: "Exacte prijs",
    factorsTitle: "Waar hangt de exacte prijs van af?",
    factorsText: "Formaat, aantal, mate van vervuiling, type meubel of textiel en uw specifieke situatie bepalen samen de exacte prijs.",
    factorList: ["Formaat en aantal", "Materiaal en type textiel", "Mate van vervuiling"],
    proofEyebrow: "Echte resultaten",
    proofTitle: "Een duidelijke prijs voor zichtbaar verschil",
    proofText: "Stuur enkele duidelijke foto's, dan beoordelen we het materiaal en de situatie zorgvuldig.",
    before: "Voor",
    after: "Na",
    otherEyebrow: "Andere textiele meubels",
    otherTitle: "Een afwijkend meubel of maatwerk?",
    otherText: "Voor fauteuils, poefs, eetkamerbanken en andere gestoffeerde of textiele meubels ontvangt u een exacte prijs via WhatsApp.",
    otherCta: "Stuur foto's voor uw exacte prijs",
    businessEyebrow: "Zakelijk en maatwerk",
    businessTitle: "Zakelijke reiniging op offertebasis",
    businessText: "Voor zakelijke ruimtes en maatwerk bespreken we de omvang, planning en situatie eerst samen.",
    businessCta: "Naar zakelijke reiniging",
    businessWhatsApp: "Bespreek uw situatie via WhatsApp",
    flowEyebrow: "Duidelijk geregeld",
    flowTitle: "Van vanaf-prijs tot exacte prijs",
    steps: ["Bekijk de vanaf-prijs.", "Maak duidelijke foto's.", "Stuur ze via WhatsApp.", "Ontvang de exacte prijs."],
    finalTitle: "Wilt u weten wat uw reiniging exact kost?",
    finalText: "Stuur foto's via WhatsApp en ontvang een duidelijke prijs voor uw situatie.",
  },
  en: {
    eyebrow: "Clear starting prices",
    title: "Clear prices for professional cleaning",
    intro: "View our transparent starting prices. Send clear photos via WhatsApp for an exact price suited to your situation.",
    primaryCta: "Send photos for your exact price",
    servicesCta: "View our services",
    trust: ["Transparent starting prices", "Exact price after photos", "Cleaning on location"],
    pricingEyebrow: "Our starting prices",
    pricingTitle: "Choose your cleaning service",
    pricingText: "The starting price gives direction. For the exact price, we review your photos carefully.",
    cardCta: "Send photos for your exact price",
    factorsEyebrow: "Exact price",
    factorsTitle: "What determines the exact price?",
    factorsText: "Size, quantity, level of soiling, type of furniture or textile and your specific situation together determine the exact price.",
    factorList: ["Size and quantity", "Material and textile type", "Level of soiling"],
    proofEyebrow: "Real results",
    proofTitle: "A clear price for a visible difference",
    proofText: "Send a few clear photos, and we will assess the material and situation carefully.",
    before: "Before",
    after: "After",
    otherEyebrow: "Other textile furniture",
    otherTitle: "An unusual item or tailored work?",
    otherText: "For armchairs, pouffes, dining benches and other upholstered or textile furniture, you receive an exact price via WhatsApp.",
    otherCta: "Send photos for your exact price",
    businessEyebrow: "Business and tailored work",
    businessTitle: "Business cleaning with a tailored quote",
    businessText: "For business spaces and tailored work, we first discuss the scale, planning and situation together.",
    businessCta: "Business cleaning",
    businessWhatsApp: "Discuss your situation via WhatsApp",
    flowEyebrow: "Clearly arranged",
    flowTitle: "From starting price to exact price",
    steps: ["View the starting price.", "Take clear photos.", "Send them via WhatsApp.", "Receive the exact price."],
    finalTitle: "Would you like to know the exact cost of your cleaning?",
    finalText: "Send photos via WhatsApp and receive a clear price for your situation.",
  },
};

const standardPriceIds = ["banken", "matras", "tapijt", "kinderwagen", "stoelen"];

function Pricing() {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const priceById = Object.fromEntries(prices.map((item) => [item.id, item]));
  const standardPrices = standardPriceIds.map((id) => priceById[id]);

  return (
    <div className="renew-pricing">
      <section className="pricing-hero"><div className="pricing-shell pricing-hero-grid"><div><p className="pricing-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="pricing-lead">{copy.intro}</p><div className="pricing-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/diensten">{copy.servicesCta}</Link></div></div><figure className="pricing-hero-image"><img src="/images/collage RENEW.png" alt="Professionele apparatuur en voor-en-na-resultaat van RenewCleaning" /></figure></div></section>
      <section className="pricing-trust" aria-label="Prijsvoordelen"><div className="pricing-shell pricing-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>
      <section className="pricing-section"><div className="pricing-shell"><header className="pricing-heading"><p className="pricing-kicker">{copy.pricingEyebrow}</p><h2>{copy.pricingTitle}</h2><p>{copy.pricingText}</p></header><div className="pricing-card-grid">{standardPrices.map((item) => <article className="pricing-card" key={item.id}><Sparkles aria-hidden="true" size={20} /><p className="pricing-service">{item.service[language]}</p><strong>{item.price[language]}</strong><p className="pricing-detail">{item.detail[language]}</p><WhatsAppButton className="pricing-card-cta" label={copy.cardCta} /></article>)}</div></div></section>
      <section className="pricing-factors-section"><div className="pricing-shell pricing-factors-panel"><MessageCircle aria-hidden="true" size={30} /><div><p className="pricing-kicker">{copy.factorsEyebrow}</p><h2>{copy.factorsTitle}</h2><p>{copy.factorsText}</p></div><ul>{copy.factorList.map((item) => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}</ul></div></section>
      <section className="pricing-proof-section"><div className="pricing-shell"><header className="pricing-heading pricing-heading-dark"><p className="pricing-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofText}</p></header><div className="pricing-proof-grid"><article><figure><img src="/images/bank1 voor.jpg" alt={`${copy.before}: bankreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src="/images/bank1 after.jpg" alt={`${copy.after}: bankreiniging`} /><figcaption>{copy.after}</figcaption></figure><p>{language === "nl" ? "Bankreiniging" : "Sofa cleaning"}</p></article><article><figure><img src="/images/matras before.jpg" alt={`${copy.before}: matrasreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src="/images/matras after.jpg" alt={`${copy.after}: matrasreiniging`} /><figcaption>{copy.after}</figcaption></figure><p>{language === "nl" ? "Matrasreiniging" : "Mattress cleaning"}</p></article></div></div></section>
      <section className="pricing-custom-section"><div className="pricing-shell pricing-custom-grid"><article className="pricing-custom-panel"><p className="pricing-kicker">{copy.otherEyebrow}</p><h2>{copy.otherTitle}</h2><p>{copy.otherText}</p><WhatsAppButton label={copy.otherCta} /></article><article className="pricing-custom-panel pricing-business-panel"><Building2 aria-hidden="true" size={28} /><p className="pricing-kicker">{copy.businessEyebrow}</p><h2>{copy.businessTitle}</h2><p>{copy.businessText}</p><div className="pricing-actions"><Link className="btn btn-secondary" to="/zakelijk">{copy.businessCta}<ArrowRight aria-hidden="true" size={18} /></Link><WhatsAppButton label={copy.businessWhatsApp} /></div></article></div></section>
      <section className="pricing-flow-section"><div className="pricing-shell"><header className="pricing-heading"><p className="pricing-kicker">{copy.flowEyebrow}</p><h2>{copy.flowTitle}</h2></header><ol className="pricing-flow">{copy.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
      <CTASection title={copy.finalTitle} text={copy.finalText} whatsAppLabel={copy.primaryCta} />
    </div>
  );
}

export default Pricing;
