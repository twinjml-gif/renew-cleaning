import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Onze diensten", title: "Professionele reiniging van meubels en textiel",
    intro: "Van banken en matrassen tot tapijt en eetkamerstoelen. Bekijk onze reinigingsdiensten en stuur foto’s voor een exacte prijs.",
    primaryCta: "Stuur foto's voor uw exacte prijs", pricesCta: "Bekijk alle prijzen",
    trust: ["Reiniging op locatie", "Heldere vanaf-prijzen", "Professionele apparatuur"],
    servicesTitle: "Kies uw reiniging", servicesText: "Bekijk de vanaf-prijs en stuur daarna foto's voor een exacte prijs die past bij het materiaal, formaat en de staat.",
    services: [
      ["Banken reinigen", "Vanaf €100", "Professionele dieptereiniging van stoffen banken, hoekbanken en loungesets. We behandelen vuil en vlekken in het textiel zorgvuldig."],
      ["Matrassen reinigen", "Vanaf €60", "Grondige textielreiniging om uw matras op te frissen, met aandacht voor materiaal en gebruik."],
      ["Tapijt reinigen", "Vanaf €65", "Dieptereiniging van tapijt en vloerkleden, afgestemd op de vezel, afmeting en vervuiling."],
      ["Kinderwagens reinigen", "Vanaf €65", "Grondige reiniging van de textiele delen en bereikbare onderdelen van uw kinderwagen."],
      ["Eetkamerstoelen reinigen", "Vanaf €5,50 per stoel", "Een nette reiniging van gestoffeerde eetkamerstoelen. De prijs geldt per eetkamerstoel."],
      ["Andere textiele meubels", "Exacte prijs via WhatsApp", "Voor fauteuils, poefs, eetkamerbanken en andere gestoffeerde of textiele meubels bekijken we uw foto's eerst zorgvuldig."],
    ],
    proofEyebrow: "Echte resultaten", proofTitle: "Het verschil ziet u in het textiel", proofText: "Een kleine selectie van echte RenewCleaning-resultaten. Geen impressies, maar zichtbaar verschil na reiniging.", before: "Voor", after: "Na",
    customEyebrow: "Zakelijk en maatwerk", customTitle: "Een afwijkende of zakelijke reinigingsvraag?", customText: "Voor zakelijke ruimtes en maatwerk bespreken we de situatie, omvang en planning eerst samen.", businessCta: "Naar zakelijke reiniging", customCta: "Bespreek uw situatie via WhatsApp",
    flowEyebrow: "Duidelijk geregeld", flowTitle: "Van foto tot exacte prijs", steps: ["Kies de gewenste reiniging.", "Bekijk de vanaf-prijs.", "Stuur foto's via WhatsApp.", "Ontvang uw exacte prijs."],
    finalTitle: "Wilt u weten wat uw reiniging exact kost?", finalText: "Stuur foto's via WhatsApp en ontvang een duidelijke prijs voor uw situatie.",
  },
  en: {
    eyebrow: "Our services", title: "Professional cleaning for furniture and textiles",
    intro: "From sofas and mattresses to carpets and dining chairs: we clean carefully on location and tailor the exact price to your situation.",
    primaryCta: "Send photos for your exact price", pricesCta: "View all prices",
    trust: ["Cleaning on location", "Clear starting prices", "Professional equipment"],
    servicesTitle: "Choose your cleaning service", servicesText: "View the starting price, then send photos for an exact price based on the material, size and condition.",
    services: [
      ["Sofa cleaning", "From €100", "Professional deep cleaning for fabric sofas, corner sofas and lounge sets. We treat dirt and stains in the textile carefully."],
      ["Mattress cleaning", "From €60", "Thorough textile cleaning to freshen your mattress, with attention to material and use."],
      ["Carpet cleaning", "From €65", "Deep cleaning for carpets and rugs, tailored to fibre, size and level of soiling."],
      ["Stroller cleaning", "From €65", "Thorough cleaning of textile parts and reachable elements of your stroller."],
      ["Dining chair cleaning", "From €5.50 per chair", "Careful cleaning for upholstered dining chairs. The price applies to each dining chair."],
      ["Other textile furniture", "Exact price via WhatsApp", "For armchairs, pouffes, dining benches and other upholstered or textile furniture, we first review your photos carefully."],
    ],
    proofEyebrow: "Real results", proofTitle: "The difference shows in the textile", proofText: "A small selection of real RenewCleaning results. Not impressions, but visible difference after cleaning.", before: "Before", after: "After",
    customEyebrow: "Business and tailored work", customTitle: "An unusual or business cleaning request?", customText: "For business spaces and tailored work, we first discuss the situation, scale and planning together.", businessCta: "Business cleaning", customCta: "Discuss your situation via WhatsApp",
    flowEyebrow: "Clearly arranged", flowTitle: "From photo to an exact price", steps: ["Choose the required cleaning.", "View the starting price.", "Send photos via WhatsApp.", "Receive your exact price."],
    finalTitle: "Would you like to know the exact cost of your cleaning?", finalText: "Send photos via WhatsApp and receive a clear price for your situation.",
  },
};

function Services() {
  const { language } = useLanguage();
  const copy = pageContent[language];

  return (
    <div className="renew-services">
      <section className="services-hero"><div className="services-shell services-hero-grid"><div><p className="services-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="services-lead">{copy.intro}</p><div className="services-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/prijzen">{copy.pricesCta}</Link></div></div><figure className="services-hero-image"><img src="/images/collage RENEW.png" alt="Voor en na resultaat van bankreiniging met professionele apparatuur van RenewCleaning" /></figure></div></section>
      <section className="services-trust" aria-label="Voordelen"><div className="services-shell services-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>
      <section className="services-section"><div className="services-shell"><header className="services-heading"><p className="services-kicker">{copy.eyebrow}</p><h2>{copy.servicesTitle}</h2><p>{copy.servicesText}</p></header><div className="services-grid">{copy.services.map(([title, price, text]) => <article className="services-card" key={title}><Sparkles aria-hidden="true" size={20} /><h3>{title}</h3><strong>{price}</strong><p>{text}</p><WhatsAppButton className="services-card-cta" label={copy.primaryCta} /></article>)}</div></div></section>
      <section className="services-proof-section"><div className="services-shell"><header className="services-heading services-heading-dark"><p className="services-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofText}</p></header><div className="services-proof-grid"><article><div><figure><img src="/images/bank1 voor.jpg" alt={`${copy.before}: bankreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src="/images/bank1 after.jpg" alt={`${copy.after}: bankreiniging`} /><figcaption>{copy.after}</figcaption></figure></div><p>{language === "nl" ? "Bankreiniging" : "Sofa cleaning"}</p></article><article><div><figure><img src="/images/matras before.jpg" alt={`${copy.before}: matrasreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src="/images/matras after.jpg" alt={`${copy.after}: matrasreiniging`} /><figcaption>{copy.after}</figcaption></figure></div><p>{language === "nl" ? "Matrasreiniging" : "Mattress cleaning"}</p></article></div></div></section>
      <section className="services-custom-section"><div className="services-shell services-custom-panel"><div><p className="services-kicker">{copy.customEyebrow}</p><h2>{copy.customTitle}</h2><p>{copy.customText}</p></div><div className="services-actions"><Link className="btn btn-secondary" to="/zakelijk">{copy.businessCta}<ArrowRight aria-hidden="true" size={18} /></Link><WhatsAppButton label={copy.customCta} /></div></div></section>
      <section className="services-flow-section"><div className="services-shell"><header className="services-heading"><p className="services-kicker">{copy.flowEyebrow}</p><h2>{copy.flowTitle}</h2></header><ol className="services-flow">{copy.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
      <CTASection title={copy.finalTitle} text={copy.finalText} whatsAppLabel={copy.primaryCta} />
    </div>
  );
}

export default Services;
