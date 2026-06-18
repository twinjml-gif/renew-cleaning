import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider.jsx";

function PriceCard({ item }) {
  const { language } = useLanguage();

  return (
    <article className="price-card">
      <div>
        <p className="price-service">{item.service[language]}</p>
        <h3>{item.price[language]}</h3>
      </div>
      <p>{item.detail[language]}</p>
      <span className="price-check">
        <CheckCircle2 aria-hidden="true" size={18} />
      </span>
    </article>
  );
}

export default PriceCard;
