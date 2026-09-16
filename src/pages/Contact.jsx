import { Camera, Facebook, Instagram, Mail, MessageCircle, Music2, Phone } from "lucide-react";
import TrackedContactLink from "../components/TrackedContactLink.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
import { company } from "../data/company.js";
import { socials } from "../data/socials.js";
import { useLanguage } from "../components/LanguageProvider.jsx";

const pageContent = {
  nl: {
    eyebrow: "Neem contact op",
    title: "Uw reiniging eenvoudig bespreken",
    intro: "Wilt u weten wat uw meubel kost om te reinigen? Stuur enkele duidelijke foto's via WhatsApp. Op basis daarvan kunnen we uw situatie bekijken en een passende prijs bespreken.",
    primaryCta: "Stuur foto's voor uw exacte prijs",
    callCta: "Bel ons",
    contactTitle: "Kies wat voor u het makkelijkst is",
    contactText: "WhatsApp is de handigste manier om foto's van uw situatie te sturen. Telefonisch en per e-mail kunt u ons ook bereiken.",
    whatsappTitle: "Stuur foto's van uw meubel",
    whatsappText: "Via WhatsApp kunnen we uw situatie gericht bekijken.",
    phoneTitle: "Bel RenewCleaning",
    emailTitle: "Stuur een e-mail",
    flowEyebrow: "Van foto naar prijs",
    flowTitle: "Duidelijk in drie stappen",
    steps: ["Stuur duidelijke foto's", "Wij bekijken de situatie", "U bespreekt een passende prijs"],
    socialEyebrow: "Volg RenewCleaning",
    socialTitle: "Bekijk meer van ons werk",
    socialText: "Volg RenewCleaning voor beelden van reinigingen, resultaten en nieuw werk.",
    finalEyebrow: "RenewCleaning",
    finalTitle: "Klaar om uw meubel professioneel te laten reinigen?",
    finalText: "Stuur enkele duidelijke foto's via WhatsApp. Dan kunnen we uw situatie bekijken en de prijs met u bespreken.",
  },
  en: {
    eyebrow: "Get in touch",
    title: "Discuss your cleaning easily",
    intro: "Would you like to know the cost of cleaning your furniture? Send a few clear photos via WhatsApp. Based on those, we can review your situation and discuss a suitable price.",
    primaryCta: "Send photos for your exact price",
    callCta: "Call us",
    contactTitle: "Choose what is easiest for you",
    contactText: "WhatsApp is the easiest way to send photos of your situation. You can also reach us by phone or email.",
    whatsappTitle: "Send photos of your furniture",
    whatsappText: "Via WhatsApp, we can review your situation in a focused way.",
    phoneTitle: "Call RenewCleaning",
    emailTitle: "Send an email",
    flowEyebrow: "From photo to price",
    flowTitle: "Clear in three steps",
    steps: ["Send clear photos", "We review the situation", "Discuss a suitable price"],
    socialEyebrow: "Follow RenewCleaning",
    socialTitle: "See more of our work",
    socialText: "Follow RenewCleaning for images of cleaning jobs, results and new work.",
    finalEyebrow: "RenewCleaning",
    finalTitle: "Ready to have your furniture professionally cleaned?",
    finalText: "Send a few clear photos via WhatsApp. We can then review your situation and discuss the price with you.",
  },
};

const socialIcons = { instagram: Instagram, tiktok: Music2, snapchat: Camera, facebook: Facebook };

function ContactMethod({ icon: Icon, title, text, href, primary = false, eventName, tracking }) {
  const Tag = href ? "a" : "div";
  const props = href ? { href } : {};
  const content = <><Icon aria-hidden="true" size={22} /><span><strong>{title}</strong>{text ? <small>{text}</small> : null}</span></>;

  return eventName ? <TrackedContactLink className={primary ? "contact-method is-primary" : "contact-method"} eventName={eventName} tracking={tracking} {...props}>{content}</TrackedContactLink> : <Tag className={primary ? "contact-method is-primary" : "contact-method"} {...props}>{content}</Tag>;
}

function Contact() {
  const { language } = useLanguage();
  const copy = pageContent[language];

  return (
    <div className="renew-contact">
      <section className="contact-refresh-hero"><div className="contact-shell contact-hero-grid"><div><p className="contact-kicker">{copy.eyebrow}</p><h1>{copy.title}</h1><p className="contact-lead">{copy.intro}</p><div className="contact-refresh-actions"><WhatsAppButton label={copy.primaryCta} /><TrackedContactLink eventName="phone_click" tracking={{ cta_location: "hero", section: "contact" }} className="btn btn-secondary" href={company.phoneHref}><Phone aria-hidden="true" size={20} />{copy.callCta}</TrackedContactLink></div></div><aside className="contact-quick-panel" aria-label={copy.contactTitle}><p className="contact-kicker">{copy.contactTitle}</p><p>{copy.contactText}</p><div className="contact-methods"><ContactMethod icon={MessageCircle} title={copy.whatsappTitle} text={copy.whatsappText} href={company.whatsappHref} primary eventName="whatsapp_click" tracking={{ cta_location: "quick_panel", section: "contact", cta_text: "WhatsApp" }} /><ContactMethod icon={Phone} title={copy.phoneTitle} text={company.phoneDisplay} href={company.phoneHref} eventName="phone_click" tracking={{ cta_location: "quick_panel", section: "contact" }} /><ContactMethod icon={Mail} title={copy.emailTitle} text={company.email} href={`mailto:${company.email}`} eventName="email_click" tracking={{ cta_location: "quick_panel", section: "contact" }} /></div></aside></div></section>
      <section className="contact-flow-section"><div className="contact-shell"><header className="contact-heading"><p className="contact-kicker">{copy.flowEyebrow}</p><h2>{copy.flowTitle}</h2></header><ol className="contact-flow">{copy.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></section>
      <section className="contact-social-section"><div className="contact-shell"><header className="contact-heading"><p className="contact-kicker">{copy.socialEyebrow}</p><h2>{copy.socialTitle}</h2><p>{copy.socialText}</p></header><div className="contact-social-grid">{socials.map((social) => { const Icon = socialIcons[social.icon]; const content = <><Icon aria-hidden="true" size={23} /><span><strong>{social.label}</strong><small>{social.handle}</small></span></>; return social.url ? <TrackedContactLink key={social.id} eventName="social_click" tracking={{ section: "contact", platform: social.id }} href={social.url} target="_blank" rel="noreferrer" aria-label={`${social.label}: ${social.handle}`}>{content}</TrackedContactLink> : <div key={social.id} aria-label={`${social.label}: ${social.handle}`}>{content}</div>; })}</div></div></section>
      <section className="contact-final-cta"><div className="contact-shell contact-final-grid"><div><p className="contact-kicker">{copy.finalEyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p></div><WhatsAppButton label={copy.primaryCta} /></div></section>
    </div>
  );
}

export default Contact;
