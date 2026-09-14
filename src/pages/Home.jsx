import { ArrowRight, Building2, Camera, Check, Facebook, Instagram, Mail, MessageCircle, Music2, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { company } from "../data/company.js";
import { faqs } from "../data/faq.js";
import { prices } from "../data/pricing.js";
import { results } from "../data/results.js";
import { socials } from "../data/socials.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const copy = {
  nl: {
    hero: ["Professionele reiniging op locatie", "Professionele dieptereiniging aan huis", "Voor banken, stoelen, matrassen, tapijt, kinderwagens en andere textiele meubels."],
    priceNote: "Voor een exacte prijs stuurt u eenvoudig foto's via WhatsApp.", primaryCta: "Stuur foto's voor uw exacte prijs", pricesCta: "Bekijk alle prijzen",
    trust: ["Reiniging aan huis", "Professionele apparatuur", "Transparante vanaf-prijzen"],
    services: ["Onze diensten", "Voor meubels en textiel die aandacht verdienen", "Van een bank of matras tot tapijt en eetkamerstoelen: we bekijken de situatie zorgvuldig.", "Bekijk alle diensten"],
    serviceCards: [["banken", "Banken", "Voor stoffen banken, hoekbanken en loungesets."], ["matras", "Matrassen", "Voor een frisse en verzorgde slaapomgeving."], ["tapijt", "Tapijt", "Afgestemd op materiaal, formaat en vervuiling."], ["kinderwagen", "Kinderwagens", "Voor bekleding en bereikbare onderdelen."], ["stoelen", "Eetkamerstoelen", "Voor gestoffeerde zitplaatsen en stoelen."], ["other-textile", "Andere textiele meubels", "Stuur foto's, dan bekijken we wat passend is."]],
    pricing: ["Heldere vanaf-prijzen", "Snel inzicht, afgestemd op uw situatie", "De vanaf-prijs geeft richting. Met duidelijke foto's kunnen we de situatie bekijken en een passende exacte prijs bespreken."],
    results: ["Echte resultaten", "Het verschil ziet u direct", "Een compacte selectie van echte voor- en naresultaten van RenewCleaning.", "Bekijk alle resultaten", "VOOR", "NA"],
    process: ["Zo werkt het", "Duidelijk van foto tot resultaat", ["Stuur duidelijke foto's", "Wij bekijken de situatie", "Bespreek uw passende prijs", "Professionele reiniging op locatie", "Resultaat controleren"]],
    business: ["Zakelijk en maatwerk", "Ook voor een zakelijke of afwijkende aanvraag", "Voor zakelijke reiniging en maatwerk bekijken we eerst de situatie, omvang en planning. Daarna bespreken we een passende offerte.", "Bespreek uw situatie via WhatsApp", "Meer over zakelijke reiniging"],
    about: ["Over RenewCleaning", "Zorgvuldig, duidelijk en professioneel", "We stemmen de reiniging af op materiaal, gebruik en de situatie. Met professionele apparatuur werken we zorgvuldig op locatie.", "Meer over RenewCleaning", ["Aandacht voor materiaal", "Duidelijke communicatie", "Professionele apparatuur"]],
    faq: ["Veelgestelde vragen", "Goed om te weten", "Bekijk alle veelgestelde vragen", "Voor andere textiele meubels bespreken we de exacte prijs via WhatsApp."],
    contact: ["Contact", "Uw reiniging eenvoudig bespreken", "Stuur enkele duidelijke foto's via WhatsApp. Dan kunnen we uw situatie bekijken en een passende prijs bespreken.", "Bekijk meer van ons werk", "Volg RenewCleaning voor beelden van reinigingen, resultaten en nieuw werk."],
    contactSteps: ["Stuur duidelijke foto's", "Wij bekijken de situatie", "U bespreekt een passende prijs"],
    whatsappHelp: "Stuur foto's van uw meubel", callHelp: "Bel RenewCleaning", mailHelp: "Stuur een e-mail",
  },
  en: {
    hero: ["Professional cleaning on location", "Professional deep cleaning at your home", "For sofas, chairs, mattresses, carpets, strollers and other textile furniture."],
    priceNote: "For an exact price, simply send your photos via WhatsApp.", primaryCta: "Send photos for your exact price", pricesCta: "View all prices",
    trust: ["Cleaning at your home", "Professional equipment", "Transparent starting prices"],
    services: ["Our services", "For furniture and textiles that deserve attention", "From a sofa or mattress to carpet and dining chairs: we assess every situation carefully.", "View all services"],
    serviceCards: [["banken", "Sofas", "For fabric sofas, corner sofas and lounge sets."], ["matras", "Mattresses", "For a fresh and well-kept sleeping environment."], ["tapijt", "Carpets", "Tailored to material, size and level of soiling."], ["kinderwagen", "Strollers", "For upholstery and reachable parts."], ["stoelen", "Dining chairs", "For upholstered seating and chairs."], ["other-textile", "Other textile furniture", "Send photos and we will see what suits your situation."]],
    pricing: ["Clear starting prices", "Quick insight, tailored to your situation", "The starting price gives direction. With clear photos, we can assess the situation and discuss a suitable exact price."],
    results: ["Real results", "You can see the difference immediately", "A compact selection of real before-and-after results from RenewCleaning.", "View all results", "BEFORE", "AFTER"],
    process: ["How it works", "Clear from photo to result", ["Send clear photos", "We assess the situation", "Discuss your suitable price", "Professional cleaning on location", "Check the result"]],
    business: ["Business and tailored work", "Also for a business or unusual request", "For business cleaning and tailored work, we first review the situation, scale and planning. Then we discuss a suitable quote.", "Discuss your situation via WhatsApp", "More about business cleaning"],
    about: ["About RenewCleaning", "Careful, clear and professional", "We tailor the cleaning to material, use and the situation. With professional equipment, we work carefully on location.", "More about RenewCleaning", ["Attention to material", "Clear communication", "Professional equipment"]],
    faq: ["Frequently asked questions", "Good to know", "View all frequently asked questions", "For other textile furniture, we discuss the exact price via WhatsApp."],
    contact: ["Contact", "Discuss your cleaning easily", "Send a few clear photos via WhatsApp. We can then review your situation and discuss a suitable price.", "See more of our work", "Follow RenewCleaning for images of cleaning jobs, results and new work."],
    contactSteps: ["Send clear photos", "We assess the situation", "Discuss a suitable price"],
    whatsappHelp: "Send photos of your furniture", callHelp: "Call RenewCleaning", mailHelp: "Send an email",
  },
};

const socialIcons = { instagram: Instagram, tiktok: Music2, snapchat: Camera, facebook: Facebook };
const standardPriceIds = ["banken", "matras", "tapijt", "kinderwagen", "stoelen"];
const faqIds = ["prijs", "werkwijze", "diensten", "vlekken", "droogtijd"];

function HomeFaq({ item, language, standardPrices, extraText }) {
  const [open, setOpen] = useState(false);
  return <article className={open ? "home-v2-faq-item is-open" : "home-v2-faq-item"}><h3><button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}><span>{item.question[language]}</span><span aria-hidden="true">+</span></button></h3>{open ? <div>{item.id === "prijs" ? <><ul>{standardPrices.map((price) => <li key={price.id}><span>{price.service[language]}</span><strong>{price.price[language].toLowerCase()}</strong></li>)}</ul><p>{extraText}</p></> : <p>{item.answer[language]}</p>}</div> : null}</article>;
}

function ResultPair({ item, before, after, lazy = false, language }) {
  return <div className="home-v2-result-pair"><figure><img loading={lazy ? "lazy" : undefined} src={item.before} alt={`${before}: ${item.title[language]}`} /><figcaption>{before}</figcaption></figure><figure><img loading={lazy ? "lazy" : undefined} src={item.after} alt={`${after}: ${item.title[language]}`} /><figcaption>{after}</figcaption></figure></div>;
}

function Home() {
  const { language } = useLanguage();
  const text = copy[language];
  const priceById = Object.fromEntries(prices.map((item) => [item.id, item]));
  const standardPrices = standardPriceIds.map((id) => priceById[id]);
  const featured = results.find((item) => item.id === "bank-1");
  const supporting = [results.find((item) => item.id === "bank-2"), results.find((item) => item.id === "matras")];
  const aboutImage = results.find((item) => item.id === "bank-3");
  const homeFaqs = faqIds.map((id) => faqs.find((item) => item.id === id)).filter(Boolean);

  return <div className="renew-home renew-home-v2">
    <section className="home-v2-hero" id="home"><div className="home-v2-shell home-v2-hero-grid"><div><p className="home-v2-kicker">{text.hero[0]}</p><h1>{text.hero[1]}</h1><p className="home-v2-lead">{text.hero[2]}</p><div className="home-v2-hero-price"><span>{language === "nl" ? "Bank reinigen" : "Sofa cleaning"}</span><strong>{priceById.banken.price[language]}</strong></div><p className="home-v2-price-note">{text.priceNote}</p><div className="home-v2-actions"><WhatsAppButton label={text.primaryCta} /><a className="btn btn-secondary" href="#prijzen">{text.pricesCta}</a></div></div><figure className="home-v2-hero-media"><img src="/images/collage RENEW.png" alt="Voor en na resultaat van bankreiniging met professionele apparatuur van RenewCleaning" /></figure></div></section>
    <section className="home-v2-trust" aria-label="Waarom RenewCleaning"><div className="home-v2-shell home-v2-trust-grid">{text.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>
    <section className="home-v2-section" id="diensten"><div className="home-v2-shell"><header className="home-v2-heading"><p className="home-v2-kicker">{text.services[0]}</p><h2>{text.services[1]}</h2><p>{text.services[2]}</p></header><div className="home-v2-services-grid">{text.serviceCards.map(([id, title, description]) => <article key={id}><Sparkles aria-hidden="true" size={19} /><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="home-v2-inline-link" to="/diensten">{text.services[3]}<ArrowRight aria-hidden="true" size={18} /></Link></div></section>
    <section className="home-v2-section home-v2-pricing" id="prijzen"><div className="home-v2-shell"><header className="home-v2-heading"><p className="home-v2-kicker">{text.pricing[0]}</p><h2>{text.pricing[1]}</h2><p>{text.pricing[2]}</p></header><div className="home-v2-prices-grid">{standardPrices.map((item) => <article key={item.id}><p>{item.service[language]}</p><strong>{item.price[language]}</strong></article>)}</div><p className="home-v2-other-price"><strong>{priceById["other-textile"].service[language]}</strong> — {priceById["other-textile"].price[language]}</p><div className="home-v2-actions"><WhatsAppButton label={text.primaryCta} /></div></div></section>
    <section className="home-v2-section home-v2-results" id="resultaten"><div className="home-v2-shell"><header className="home-v2-heading home-v2-heading-dark"><p className="home-v2-kicker">{text.results[0]}</p><h2>{text.results[1]}</h2><p>{text.results[2]}</p></header><article className="home-v2-featured-result"><ResultPair item={featured} before={text.results[4]} after={text.results[5]} language={language} /><h3>{featured.title[language]}</h3><p>{featured.caption[language]}</p></article><div className="home-v2-supporting-results">{supporting.map((item) => <article key={item.id}><ResultPair item={item} before={text.results[4]} after={text.results[5]} language={language} lazy /><h3>{item.title[language]}</h3></article>)}</div><Link className="home-v2-inline-link home-v2-inline-link-light" to="/resultaten">{text.results[3]}<ArrowRight aria-hidden="true" size={18} /></Link></div></section>
    <section className="home-v2-section home-v2-process" id="werkwijze"><div className="home-v2-shell"><header className="home-v2-heading"><p className="home-v2-kicker">{text.process[0]}</p><h2>{text.process[1]}</h2></header><ol className="home-v2-process-list">{text.process[2].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
    <section className="home-v2-section home-v2-business" id="zakelijk"><div className="home-v2-shell home-v2-business-grid"><Building2 aria-hidden="true" size={32} /><div><p className="home-v2-kicker">{text.business[0]}</p><h2>{text.business[1]}</h2><p>{text.business[2]}</p></div><div className="home-v2-actions"><WhatsAppButton label={text.business[3]} /><Link className="btn btn-secondary" to="/zakelijk">{text.business[4]}</Link></div></div></section>
    <section className="home-v2-section" id="over-ons"><div className="home-v2-shell home-v2-about-grid"><figure><img loading="lazy" src={aboutImage.after} alt="Professioneel gereinigde stoffen bank van RenewCleaning" /></figure><div><p className="home-v2-kicker">{text.about[0]}</p><h2>{text.about[1]}</h2><p>{text.about[2]}</p><ul>{text.about[4].map((item) => <li key={item}><Check aria-hidden="true" size={18} />{item}</li>)}</ul><Link className="home-v2-inline-link" to="/over-ons">{text.about[3]}<ArrowRight aria-hidden="true" size={18} /></Link></div></div></section>
    <section className="home-v2-section home-v2-faq" id="faq"><div className="home-v2-shell home-v2-faq-shell"><header className="home-v2-heading"><p className="home-v2-kicker">{text.faq[0]}</p><h2>{text.faq[1]}</h2></header><div className="home-v2-faq-list">{homeFaqs.map((item) => <HomeFaq key={item.id} item={item} language={language} standardPrices={standardPrices} extraText={text.faq[3]} />)}</div><Link className="home-v2-inline-link" to="/faq">{text.faq[2]}<ArrowRight aria-hidden="true" size={18} /></Link></div></section>
    <section className="home-v2-contact" id="contact"><div className="home-v2-shell"><div className="home-v2-contact-intro"><div><p className="home-v2-kicker">{text.contact[0]}</p><h2>{text.contact[1]}</h2><p>{text.contact[2]}</p></div><WhatsAppButton label={text.primaryCta} /></div><div className="home-v2-contact-grid"><ol>{text.contactSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol><div className="home-v2-contact-methods"><a href={company.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={21} /><span><strong>WhatsApp</strong><small>{text.whatsappHelp}</small></span></a><a href={company.phoneHref}><Phone aria-hidden="true" size={21} /><span><strong>{company.phoneDisplay}</strong><small>{text.callHelp}</small></span></a><a href={`mailto:${company.email}`}><Mail aria-hidden="true" size={21} /><span><strong>{company.email}</strong><small>{text.mailHelp}</small></span></a></div></div><div className="home-v2-socials"><div><p className="home-v2-kicker">{language === "nl" ? "Volg RenewCleaning" : "Follow RenewCleaning"}</p><h2>{text.contact[3]}</h2><p>{text.contact[4]}</p></div><div className="home-v2-social-grid">{socials.map((social) => { const Icon = socialIcons[social.icon]; const card = <><Icon aria-hidden="true" size={22} /><span><strong>{social.label}</strong><small>{social.handle}</small></span></>; return social.url ? <a key={social.id} href={social.url} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`}>{card}</a> : <div key={social.id} aria-label={`${social.label}: ${social.handle}`}>{card}</div>; })}</div></div></div></section>
  </div>;
}

export default Home;
