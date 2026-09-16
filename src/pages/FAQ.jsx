import { ChevronDown, Check } from "lucide-react";
import { useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { prices } from "../data/pricing.js";
import { track } from "../utils/analytics.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Veelgestelde vragen",
    title: "Duidelijke antwoorden op veelgestelde vragen",
    intro: "Hier vindt u antwoorden op vragen over onze reiniging, prijzen en werkwijze. Staat uw situatie er niet tussen? Stuur ons dan enkele foto's via WhatsApp.",
    primaryCta: "Stuur foto's voor uw exacte prijs", pricesCta: "Bekijk alle prijzen",
    trust: ["Transparante vanaf-prijzen", "Reiniging op locatie", "Foto's voor een exacte prijs"],
    faqEyebrow: "Praktische informatie", faqTitle: "Veelgestelde vragen",
    finalTitle: "Wilt u weten wat uw reiniging exact kost?", finalText: "Stuur enkele duidelijke foto's via WhatsApp. Op basis daarvan ontvangt u een prijs passend bij uw situatie.",
  },
  en: {
    eyebrow: "Frequently asked questions",
    title: "Clear answers to frequently asked questions",
    intro: "Here you will find answers about our cleaning, pricing and process. Is your situation not listed? Send us a few photos via WhatsApp.",
    primaryCta: "Send photos for your exact price", pricesCta: "View all prices",
    trust: ["Transparent starting prices", "Cleaning on location", "Photos for an exact price"],
    faqEyebrow: "Practical information", faqTitle: "Frequently asked questions",
    finalTitle: "Would you like to know the exact cost of your cleaning?", finalText: "Send a few clear photos via WhatsApp. Based on those, you will receive a price that suits your situation.",
  },
};

function AccordionItem({ item, faqId }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const { pathname } = useLocation();

  function toggle() {
    if (!isOpen) track("faq_open", { route: pathname, faq_id: faqId });
    setIsOpen(!isOpen);
  }

  return (
    <article className={isOpen ? "faq-refresh-item is-open" : "faq-refresh-item"}>
      <h3><button type="button" aria-expanded={isOpen} aria-controls={id} onClick={toggle}><span>{item.question}</span><ChevronDown aria-hidden="true" size={21} /></button></h3>
      <div id={id} hidden={!isOpen}>{item.content || <p>{item.answer}</p>}</div>
    </article>
  );
}

function FAQ() {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const priceById = Object.fromEntries(prices.map((item) => [item.id, item]));
  const standardPriceIds = ["banken", "matras", "tapijt", "kinderwagen", "stoelen"];
  const standardPrices = standardPriceIds.map((id) => priceById[id]);
  const faqItems = language === "nl" ? [
    { question: "Wat kost het reinigen van mijn meubel?", content: <><ul className="faq-price-list">{standardPrices.map((item) => <li key={item.id}><span>{item.service.nl}</span><strong>{item.price.nl.toLowerCase()}</strong></li>)}</ul><p>Voor andere textiele meubels bespreken we de exacte prijs via WhatsApp.</p></> },
    { question: "Hoe krijg ik een exacte prijs?", answer: "Stuur duidelijke foto's van het meubel en de situatie via WhatsApp. We bekijken onder meer het formaat, materiaal en de staat, zodat we een passende prijs kunnen bespreken." },
    { question: "Waarom werken jullie met vanaf-prijzen?", answer: "De exacte prijs hangt af van de situatie. Daarom geven de vanaf-prijzen richting en bekijken we foto's vooraf zorgvuldig." },
    { question: "Welke meubels en textiel reinigen jullie?", answer: "RenewCleaning richt zich op banken, matrassen, stoelen, tapijt, kinderwagens en andere textiele meubels. Voor een afwijkend meubel kunt u foto's sturen, dan bekijken we wat passend is." },
    { question: "Hoe werkt een reiniging?", answer: "U stuurt eerst foto's en een korte toelichting. Daarna bekijken we de situatie, stemmen we de reiniging af en voeren we de reiniging zorgvuldig op locatie uit." },
    { question: "Moet ik iets voorbereiden?", answer: "Zorg dat het meubel of object goed bereikbaar is en haal losse spullen weg. Bij twijfel kunt u vooraf foto's sturen, dan bekijken we samen wat praktisch is." },
    { question: "Kunnen alle vlekken worden verwijderd?", answer: "Het resultaat hangt onder andere af van het materiaal, de vervuiling en de staat van het meubel. Daarom bekijken we iedere situatie vooraf en doen we geen beloftes over afzonderlijke vlekken." },
    { question: "Hoe lang duurt het voordat een meubel weer droog is?", answer: "Dat hangt af van het materiaal, de ventilatie en de situatie. We geven daarom geen vaste droogtijd vooraf; stuur gerust foto's als u hierover wilt overleggen." },
    { question: "Kan ik ook een zakelijke of afwijkende opdracht aanvragen?", answer: "Ja. Voor zakelijke reiniging en maatwerk bekijken we eerst de situatie en de omvang van de opdracht. Daarna kunnen we een passende offerte of prijsafspraak bespreken." },
  ] : [
    { question: "What does it cost to clean my furniture?", content: <><ul className="faq-price-list">{standardPrices.map((item) => <li key={item.id}><span>{item.service.en}</span><strong>{item.price.en}</strong></li>)}</ul><p>For other textile furniture, we discuss the exact price via WhatsApp.</p></> },
    { question: "How do I receive an exact price?", answer: "Send clear photos of the furniture and the situation via WhatsApp. We review the size, material and condition, among other things, so we can discuss a suitable price." },
    { question: "Why do you use starting prices?", answer: "The exact price depends on the situation. That is why the starting prices give direction and we review photos carefully in advance." },
    { question: "Which furniture and textiles do you clean?", answer: "RenewCleaning focuses on sofas, mattresses, chairs, carpets, strollers and other textile furniture. For an unusual item, send photos and we will see what is suitable." },
    { question: "How does a cleaning appointment work?", answer: "You first send photos and a short explanation. We then review the situation, tailor the cleaning and carry it out carefully on location." },
    { question: "Do I need to prepare anything?", answer: "Make sure the furniture or object is easy to access and remove loose items. If unsure, send photos in advance and we can look at what is practical together." },
    { question: "Can every stain be removed?", answer: "The result depends, among other things, on the material, level of soiling and condition of the furniture. We therefore review each situation in advance and do not make promises about individual stains." },
    { question: "How long does furniture take to dry?", answer: "That depends on the material, ventilation and situation. We therefore do not give one fixed drying time in advance; feel free to send photos if you would like to discuss it." },
    { question: "Can I request a business or tailored cleaning job?", answer: "Yes. For business cleaning and tailored work, we first review the situation and scale of the request. We can then discuss a suitable quote or price arrangement." },
  ];

  return (
    <div className="renew-faq">
      <section className="faq-refresh-hero"><div className="faq-shell"><p className="faq-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="faq-lead">{copy.intro}</p><div className="faq-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/prijzen">{copy.pricesCta}</Link></div></div></section>
      <section className="faq-trust" aria-label="Praktische voordelen"><div className="faq-shell faq-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>
      <section className="faq-main-section"><div className="faq-shell faq-content-shell"><header className="faq-heading"><p className="faq-kicker">{copy.faqEyebrow}</p><h2>{copy.faqTitle}</h2></header><div className="faq-refresh-list">{faqItems.map((item, index) => <AccordionItem key={item.question} item={item} faqId={`faq_${index + 1}`} />)}</div></div></section>
      <section className="faq-final-cta"><div className="faq-shell faq-final-grid"><div><p className="faq-kicker">{copy.eyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p></div><WhatsAppButton label={copy.primaryCta} /></div></section>
    </div>
  );
}

export default FAQ;
