import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  Sofa,
  WashingMachine,
} from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import FAQItem from "../components/FAQItem.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { faqs } from "../data/faq.js";
import { prices } from "../data/pricing.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const content = {
  nl: {
    eyebrow: "Professionele reiniging op locatie",
    title: "Professionele dieptereiniging aan huis",
    subtitle: "Voor banken, stoelen, matrassen, tapijt, kinderwagens en andere textiele meubels.",
    priceNote: "Voor een exacte prijs stuurt u eenvoudig foto's via WhatsApp.",
    primaryCta: "Stuur foto's voor uw exacte prijs",
    pricingCta: "Bekijk alle prijzen",
    trust: ["Reiniging aan huis", "Professionele apparatuur", "Transparante vanaf-prijzen"],
    pricesEyebrow: "Heldere vanaf-prijzen",
    pricesTitle: "Snel inzicht, afgestemd op uw situatie",
    pricesText: "Voor standaarddiensten ziet u direct een vanaf-prijs. Voor maatwerk bekijken we uw foto's eerst zorgvuldig.",
    resultsEyebrow: "Echte resultaten",
    resultsTitle: "Het verschil ziet u direct",
    resultsText: "Een selectie van echte voor- en naresultaten van RenewCleaning.",
    servicesEyebrow: "Onze diensten",
    servicesTitle: "Voor een fris en verzorgd interieur",
    servicesText: "Van een enkele stoel tot een complete bank: we beoordelen ieder materiaal zorgvuldig.",
    processEyebrow: "Zo werkt het",
    processTitle: "Duidelijk van foto tot resultaat",
    equipmentEyebrow: "Professionele werkwijze",
    equipmentTitle: "Zorgvuldig reinigen met professionele apparatuur",
    equipmentText: "We werken op locatie en behandelen ieder object met aandacht voor materiaal, gebruik en bereikbaarheid.",
    videoEyebrow: "Stoelreiniging",
    videoTitle: "Bekijk een stoelresultaat",
    customEyebrow: "Maatwerk",
    customTitle: "Maatwerk voor trappenhuizen en kleine bedrijven",
    customText: "Voor deze opdrachten stemmen we de prijs af op de situatie, omvang en bereikbaarheid.",
    customCta: "Bespreek uw situatie via WhatsApp",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Goed om te weten",
    faqCta: "Bekijk alle vragen",
    before: "Voor",
    after: "Na",
    sofaResult: "Bankreiniging aan huis",
    mattressResult: "Matrasreiniging",
    priceLabels: { banken: "Bank reinigen", matras: "Matras reinigen", tapijt: "Tapijt reinigen", stoelen: "Stoelen reinigen" },
    services: [
      ["Banken", "Voor stoffen banken, hoekbanken en loungesets."],
      ["Matrassen", "Voor een frisse en verzorgde slaapomgeving."],
      ["Tapijt", "Voor tapijt en vloerkleden, afgestemd op materiaal en formaat."],
      ["Kinderwagens", "Voor bekleding en bereikbare onderdelen van kinderwagens."],
      ["Stoelen", "Voor eetkamerstoelen, fauteuils en gestoffeerde zitplaatsen."],
      ["Andere textiele meubels", "Stuur foto's, dan beoordelen we zorgvuldig wat mogelijk is."],
    ],
    steps: [
      ["1", "Stuur foto's via WhatsApp", "Stuur een overzicht en duidelijke foto's van het object."],
      ["2", "Ontvang uw exacte prijs", "U ontvangt een heldere prijs die past bij uw situatie."],
      ["3", "Wij reinigen op locatie", "We komen naar u toe en voeren de reiniging zorgvuldig uit."],
    ],
  },
  en: {
    eyebrow: "Professional cleaning on location",
    title: "Professional deep cleaning at your home",
    subtitle: "For sofas, chairs, mattresses, carpets, strollers and other upholstered furniture.",
    priceNote: "For an exact price, simply send your photos via WhatsApp.",
    primaryCta: "Send photos for your exact price",
    pricingCta: "View all prices",
    trust: ["Cleaning at your home", "Professional equipment", "Transparent starting prices"],
    pricesEyebrow: "Clear starting prices",
    pricesTitle: "Quick insight, tailored to your situation",
    pricesText: "For standard services you see a starting price immediately. For tailored work, we first assess your photos carefully.",
    resultsEyebrow: "Real results",
    resultsTitle: "You can see the difference immediately",
    resultsText: "A selection of real before-and-after results from RenewCleaning.",
    servicesEyebrow: "Our services",
    servicesTitle: "For a fresh, well-kept interior",
    servicesText: "From a single chair to a complete sofa: every material is assessed carefully.",
    processEyebrow: "How it works",
    processTitle: "Clear from photo to result",
    equipmentEyebrow: "Professional approach",
    equipmentTitle: "Careful cleaning with professional equipment",
    equipmentText: "We work on location and treat every item with attention to material, use and accessibility.",
    videoEyebrow: "Chair cleaning",
    videoTitle: "View a chair-cleaning result",
    customEyebrow: "Tailored work",
    customTitle: "Tailored work for stairwells and small businesses",
    customText: "For these jobs, we tailor the price to the situation, size and accessibility.",
    customCta: "Discuss your situation via WhatsApp",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Good to know",
    faqCta: "View all questions",
    before: "Before",
    after: "After",
    sofaResult: "At-home sofa cleaning",
    mattressResult: "Mattress cleaning",
    priceLabels: { banken: "Sofa cleaning", matras: "Mattress cleaning", tapijt: "Carpet cleaning", stoelen: "Chair cleaning" },
    services: [
      ["Sofas", "For fabric sofas, corner sofas and lounge sets."],
      ["Mattresses", "For a fresh and well-kept sleeping environment."],
      ["Carpets", "For carpets and rugs, tailored to material and size."],
      ["Strollers", "For upholstery and reachable stroller parts."],
      ["Chairs", "For dining chairs, armchairs and upholstered seating."],
      ["Other upholstered furniture", "Send photos and we will carefully assess what is possible."],
    ],
    steps: [
      ["1", "Send photos via WhatsApp", "Send an overview and clear photos of the item."],
      ["2", "Receive your exact price", "You receive a clear price suited to your situation."],
      ["3", "We clean on location", "We come to you and carry out the cleaning carefully."],
    ],
  },
};

const resultSets = [
  { id: "bank-1", before: "/images/bank1 voor.jpg", after: "/images/bank1 after.jpg", type: "sofa" },
  { id: "bank-2", before: "/images/bank2 voor.jpg", after: "/images/bank2 after.jpg", type: "sofa" },
  { id: "bank-3", before: "/images/bank3 voor.jpg", after: "/images/bank3 after.jpg", type: "sofa" },
  { id: "matras", before: "/images/matras before.jpg", after: "/images/matras after.jpg", type: "mattress" },
];

function Home() {
  const { language } = useLanguage();
  const copy = content[language];
  const displayedPrices = [
    { id: "banken", price: prices.find((item) => item.id === "banken")?.price[language] },
    { id: "matras", price: prices.find((item) => item.id === "matras")?.price[language] },
    { id: "tapijt", price: prices.find((item) => item.id === "tapijt")?.price[language] },
    { id: "stoelen", price: prices.find((item) => item.id === "overig")?.price[language] },
  ];
  const homeFaqs = faqs.filter((item) => ["werkwijze", "droogtijd", "vlekken", "voorbereiding"].includes(item.id));

  return (
    <div className="renew-home">
      <section className="home-hero">
        <div className="home-shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-kicker">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="home-lead">{copy.subtitle}</p>
            <div className="home-hero-price"><span>{copy.priceLabels.banken}</span><strong>{displayedPrices[0].price}</strong></div>
            <p className="home-price-note">{copy.priceNote}</p>
            <div className="home-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/prijzen">{copy.pricingCta}</Link></div>
          </div>
          <figure className="home-hero-image"><img src="/images/collage RENEW.png" alt="Voor en na resultaat van bankreiniging met professionele apparatuur van RenewCleaning" /></figure>
        </div>
      </section>

      <section className="home-trust" aria-label="Waarom RenewCleaning"><div className="home-shell home-trust-grid">
        {[Sofa, WashingMachine, CircleDollarSign].map((Icon, index) => <div key={copy.trust[index]}><Icon aria-hidden="true" size={22} /><span>{copy.trust[index]}</span></div>)}
      </div></section>

      <section className="home-section home-pricing-section"><div className="home-shell">
        <div className="home-section-heading"><p className="home-kicker">{copy.pricesEyebrow}</p><h2>{copy.pricesTitle}</h2><p>{copy.pricesText}</p></div>
        <div className="home-price-grid">{displayedPrices.map((item) => <article key={item.id} className="home-price-card"><p>{copy.priceLabels[item.id]}</p><strong>{item.price}</strong></article>)}</div>
        <Link className="home-inline-link" to="/prijzen">{copy.pricingCta} <ArrowRight aria-hidden="true" size={18} /></Link>
      </div></section>

      <section className="home-section home-results-section"><div className="home-shell">
        <div className="home-section-heading home-section-heading-dark"><p className="home-kicker">{copy.resultsEyebrow}</p><h2>{copy.resultsTitle}</h2><p>{copy.resultsText}</p></div>
        <div className="before-after-grid">{resultSets.map((result) => <article className="before-after-card" key={result.id}>
          <div className="before-after-images"><figure><img loading="lazy" src={result.before} alt={`${copy.before}: ${result.type === "sofa" ? copy.sofaResult : copy.mattressResult}`} /><figcaption>{copy.before}</figcaption></figure><figure><img loading="lazy" src={result.after} alt={`${copy.after}: ${result.type === "sofa" ? copy.sofaResult : copy.mattressResult}`} /><figcaption>{copy.after}</figcaption></figure></div>
          <p>{result.type === "sofa" ? copy.sofaResult : copy.mattressResult}</p>
        </article>)}</div>
      </div></section>

      <section className="home-section home-services-section"><div className="home-shell">
        <div className="home-section-heading"><p className="home-kicker">{copy.servicesEyebrow}</p><h2>{copy.servicesTitle}</h2><p>{copy.servicesText}</p></div>
        <div className="home-service-grid">{copy.services.map(([title, description], index) => <article key={title} className="home-service-card"><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="home-actions"><Link className="btn btn-secondary" to="/diensten">{language === "nl" ? "Bekijk alle diensten" : "View all services"}</Link><WhatsAppButton label={copy.primaryCta} /></div>
      </div></section>

      <section className="home-section home-process-section"><div className="home-shell">
        <div className="home-section-heading home-section-heading-dark"><p className="home-kicker">{copy.processEyebrow}</p><h2>{copy.processTitle}</h2></div>
        <div className="home-steps">{copy.steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div></section>

      <section className="home-section home-equipment-section"><div className="home-shell home-equipment-grid">
        <figure><img loading="lazy" src="/images/collage RENEW.png" alt="Professionele reinigingsapparatuur van RenewCleaning op locatie" /></figure>
        <div><p className="home-kicker">{copy.equipmentEyebrow}</p><h2>{copy.equipmentTitle}</h2><p>{copy.equipmentText}</p><div className="home-equipment-points"><span><Check aria-hidden="true" size={18} />{language === "nl" ? "Professionele apparatuur" : "Professional equipment"}</span><span><Check aria-hidden="true" size={18} />{language === "nl" ? "Zorgvuldige behandeling" : "Careful treatment"}</span></div></div>
      </div></section>

      <section className="home-section home-video-section"><div className="home-shell">
        <div className="home-section-heading"><p className="home-kicker">{copy.videoEyebrow}</p><h2>{copy.videoTitle}</h2></div>
        <div className="home-video-grid"><figure><video aria-label={`${copy.before}: ${copy.videoTitle}`} muted playsInline controls preload="metadata"><source src="/videos/stoel before vid.mp4" type="video/mp4" /></video><figcaption>{copy.before}</figcaption></figure><figure><video aria-label={`${copy.after}: ${copy.videoTitle}`} muted playsInline controls preload="metadata"><source src="/videos/stoel after vid.mp4" type="video/mp4" /></video><figcaption>{copy.after}</figcaption></figure></div>
      </div></section>

      <section className="home-section home-custom-section"><div className="home-shell home-custom-panel"><Building2 aria-hidden="true" size={32} /><div><p className="home-kicker">{copy.customEyebrow}</p><h2>{copy.customTitle}</h2><p>{copy.customText}</p></div><WhatsAppButton label={copy.customCta} /></div></section>

      <section className="home-section home-faq-section"><div className="home-shell">
        <div className="home-section-heading"><p className="home-kicker">{copy.faqEyebrow}</p><h2>{copy.faqTitle}</h2></div>
        <div className="faq-list">{homeFaqs.map((item) => <FAQItem key={item.id} item={item} />)}</div>
        <Link className="home-inline-link" to="/faq">{copy.faqCta} <ArrowRight aria-hidden="true" size={18} /></Link>
      </div></section>

      <CTASection title={language === "nl" ? "Wilt u weten wat uw reiniging exact kost?" : "Would you like to know the exact cost of your cleaning?"} text={language === "nl" ? "Stuur foto's via WhatsApp en ontvang een duidelijke prijs voor uw situatie." : "Send photos via WhatsApp and receive a clear price for your situation."} whatsAppLabel={copy.primaryCta} />
    </div>
  );
}

export default Home;
