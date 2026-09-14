import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import ResponsiveCollage from "../components/ResponsiveCollage.jsx";
import { results } from "../data/results.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Over RenewCleaning",
    title: "Professionele reiniging, duidelijk en zorgvuldig uitgevoerd",
    intro: "RenewCleaning helpt bij het grondig reinigen van banken, matrassen, stoelen, tapijt en andere textiele meubels. We bekijken iedere situatie zorgvuldig en werken met professionele apparatuur op locatie.",
    primaryCta: "Stuur foto's voor uw exacte prijs", resultsCta: "Bekijk onze resultaten",
    trust: ["Professionele apparatuur", "Reiniging op locatie", "Transparante vanaf-prijzen"],
    storyEyebrow: "Waar we voor staan", storyTitle: "Aandacht voor materiaal, situatie en resultaat",
    storyText: ["Bij RenewCleaning draait het om grondige reiniging van textiele meubels, met aandacht voor de situatie waarin het meubel zich bevindt.", "We bekijken eerst het materiaal, formaat en de staat. Daarna bespreken we helder wat mogelijk is en welke prijs daarbij past."],
    processEyebrow: "Onze manier van werken", processTitle: "Van eerste foto tot verzorgd resultaat", steps: ["Situatie bekijken", "Reiniging afstemmen", "Professioneel reinigen", "Resultaat controleren"],
    valuesEyebrow: "Onze principes", valuesTitle: "Rustig, helder en professioneel",
    values: [["Zorgvuldig", "Iedere situatie wordt eerst bekeken, zodat de aanpak past bij materiaal en gebruik."], ["Duidelijk", "Transparante vanaf-prijzen en heldere communicatie geven vooraf richting."], ["Professioneel", "We werken op locatie met professionele reinigingsapparatuur."]],
    equipmentEyebrow: "Werkwijze in beeld", equipmentTitle: "Professionele apparatuur, toegepast op uw situatie", equipmentText: "We werken op locatie en stemmen de reiniging af op het type textiel, de bereikbaarheid en wat er zichtbaar nodig is.",
    proofEyebrow: "Echt resultaat", proofTitle: "Het verschil ziet u in het textiel", proofText: "Een compact voor- en naresultaat van een echte RenewCleaning-reiniging.", before: "VOOR", after: "NA", proofCta: "Bekijk meer resultaten",
    finalEyebrow: "RenewCleaning", finalTitle: "Uw meubel professioneel laten reinigen?", finalText: "Stuur enkele duidelijke foto's via WhatsApp. Op basis daarvan ontvangt u een prijs passend bij uw situatie.",
  },
  en: {
    eyebrow: "About RenewCleaning",
    title: "Professional cleaning, carried out clearly and carefully",
    intro: "RenewCleaning helps with thorough cleaning of sofas, mattresses, chairs, carpets and other textile furniture. We assess every situation carefully and work with professional equipment on location.",
    primaryCta: "Send photos for your exact price", resultsCta: "View our results",
    trust: ["Professional equipment", "Cleaning on location", "Transparent starting prices"],
    storyEyebrow: "What we stand for", storyTitle: "Attention to material, situation and result",
    storyText: ["At RenewCleaning, thorough cleaning of textile furniture is central, with attention to the situation the furniture is in.", "We first review the material, size and condition. Then we explain clearly what is possible and what price suits it."],
    processEyebrow: "How we work", processTitle: "From first photo to a cared-for result", steps: ["Review the situation", "Tailor the cleaning", "Clean professionally", "Check the result"],
    valuesEyebrow: "Our principles", valuesTitle: "Calm, clear and professional",
    values: [["Careful", "Every situation is reviewed first, so the approach suits the material and use."], ["Clear", "Transparent starting prices and clear communication give direction in advance."], ["Professional", "We work on location with professional cleaning equipment."]],
    equipmentEyebrow: "Process in view", equipmentTitle: "Professional equipment, applied to your situation", equipmentText: "We work on location and tailor the cleaning to the textile type, accessibility and what is visibly needed.",
    proofEyebrow: "Real result", proofTitle: "The difference shows in the textile", proofText: "A compact before-and-after result from a real RenewCleaning cleaning job.", before: "BEFORE", after: "AFTER", proofCta: "View more results",
    finalEyebrow: "RenewCleaning", finalTitle: "Would you like to have your furniture professionally cleaned?", finalText: "Send a few clear photos via WhatsApp. Based on those, you will receive a price that suits your situation.",
  },
};

function About() {
  const { language } = useLanguage();
  const copy = pageContent[language];
  const heroResult = results.find((item) => item.id === "bank-1");
  const proofResult = results.find((item) => item.id === "bank-2");

  return (
    <div className="renew-about">
      <section className="about-hero"><div className="about-shell about-hero-grid"><div><p className="about-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="about-lead">{copy.intro}</p><div className="about-actions"><WhatsAppButton label={copy.primaryCta} /><Link className="btn btn-secondary" to="/resultaten">{copy.resultsCta}</Link></div></div><figure className="about-hero-pair" aria-label={copy.proofTitle}><img src={heroResult.before} alt={`${copy.before}: bankreiniging`} /><img src={heroResult.after} alt={`${copy.after}: bankreiniging`} /><figcaption><span>{copy.before}</span><span>{copy.after}</span></figcaption></figure></div></section>
      <section className="about-trust" aria-label="Vertrouwenspunten"><div className="about-shell about-trust-grid">{copy.trust.map((item) => <span key={item}><Check aria-hidden="true" size={18} />{item}</span>)}</div></section>
      <section className="about-story-section"><div className="about-shell about-story-grid"><header className="about-heading"><p className="about-kicker">{copy.storyEyebrow}</p><h2>{copy.storyTitle}</h2></header><div className="about-story-copy">{copy.storyText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>
      <section className="about-process-section"><div className="about-shell"><header className="about-heading"><p className="about-kicker">{copy.processEyebrow}</p><h2>{copy.processTitle}</h2></header><ol className="about-process">{copy.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
      <section className="about-values-section"><div className="about-shell"><header className="about-heading"><p className="about-kicker">{copy.valuesEyebrow}</p><h2>{copy.valuesTitle}</h2></header><div className="about-values-grid">{copy.values.map(([title, text]) => <article key={title}><Check aria-hidden="true" size={20} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="about-equipment-section"><div className="about-shell about-equipment-grid"><figure><ResponsiveCollage alt="Professionele reinigingsapparatuur en resultaten van RenewCleaning" /></figure><div><p className="about-kicker">{copy.equipmentEyebrow}</p><h2>{copy.equipmentTitle}</h2><p>{copy.equipmentText}</p></div></div></section>
      <section className="about-proof-section"><div className="about-shell about-proof-grid"><header className="about-heading about-heading-dark"><p className="about-kicker">{copy.proofEyebrow}</p><h2>{copy.proofTitle}</h2><p>{copy.proofText}</p><Link className="about-inline-link" to="/resultaten">{copy.proofCta} <ArrowRight aria-hidden="true" size={18} /></Link></header><article className="about-proof-pair"><figure><img src={proofResult.before} alt={`${copy.before}: bankreiniging`} /><figcaption>{copy.before}</figcaption></figure><figure><img src={proofResult.after} alt={`${copy.after}: bankreiniging`} /><figcaption>{copy.after}</figcaption></figure></article></div></section>
      <section className="about-final-cta"><div className="about-shell about-final-grid"><div><p className="about-kicker">{copy.finalEyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p></div><WhatsAppButton label={copy.primaryCta} /></div></section>
    </div>
  );
}

export default About;
