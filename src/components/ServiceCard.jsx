import { Building2, Compass, MessageCircle, Moon, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider.jsx";

const iconMap = {
  building: Building2,
  compass: Compass,
  message: MessageCircle,
  moon: Moon,
  shield: ShieldCheck,
  sparkles: Sparkles,
  star: Star,
};

function ServiceCard({ service }) {
  const { language } = useLanguage();
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <article className="service-card">
      <div className="card-image-wrap">
        <img src={service.image} alt={service.title[language]} />
      </div>
      <div className="card-body">
        <div className="service-icon">
          <Icon aria-hidden="true" size={22} />
        </div>
        <h3>{service.title[language]}</h3>
        <p>{service.description[language]}</p>
      </div>
    </article>
  );
}

export default ServiceCard;
