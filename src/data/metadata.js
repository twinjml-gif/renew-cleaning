const siteUrl = "https://renewcleaning.nl";

export const routeMetadata = {
  "/": { title: "RenewCleaning | Professionele meubelreiniging aan huis", description: "Professionele reiniging van banken, matrassen, tapijt, kinderwagens en andere textiele meubels. Stuur foto's via WhatsApp voor een exacte prijs." },
  "/diensten": { title: "RenewCleaning Diensten | Banken, matrassen en textiel reinigen", description: "Bekijk de reinigingsdiensten van RenewCleaning voor banken, matrassen, tapijt, kinderwagens, eetkamerstoelen en andere textiele meubels." },
  "/prijzen": { title: "RenewCleaning Prijzen | Transparante vanaf-prijzen", description: "Bekijk transparante vanaf-prijzen voor meubel- en textielreiniging. Stuur foto's via WhatsApp voor een exacte prijs passend bij uw situatie." },
  "/resultaten": { title: "RenewCleaning Resultaten | Voor en na meubelreiniging", description: "Bekijk echte voor- en naresultaten van banken, matrassen en eetkamerstoelen na professionele reiniging door RenewCleaning." },
  "/zakelijk": { title: "RenewCleaning Zakelijk | Professionele textielreiniging op maat", description: "Voor zakelijke reiniging en maatwerk bekijken we de situatie, omvang en planning zorgvuldig en bespreken we een passende offerte." },
  "/over-ons": { title: "Over RenewCleaning | Professionele en zorgvuldige reiniging", description: "Lees hoe RenewCleaning zorgvuldig werkt: van het beoordelen van foto's tot professionele reiniging op locatie en een helder resultaat." },
  "/faq": { title: "Veelgestelde vragen | RenewCleaning", description: "Antwoorden op veelgestelde vragen over professionele reiniging, vanaf-prijzen, foto's sturen via WhatsApp en de werkwijze van RenewCleaning." },
  "/contact": { title: "Contact | RenewCleaning", description: "Neem contact op met RenewCleaning. Stuur duidelijke foto's via WhatsApp om uw reiniging te bespreken en een exacte prijs te ontvangen." },
};

export function getCanonicalUrl(pathname) {
  return pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;
}
