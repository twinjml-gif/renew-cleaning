import WhatsAppButton from "./WhatsAppButton.jsx";

function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  children,
  compact = false,
  showDefaultCta = true,
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <div className="page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        {children ? <div className="hero-extra">{children}</div> : null}
        {showDefaultCta ? <WhatsAppButton /> : null}
      </div>
      {image ? (
        <div className="page-hero-media">
          <img src={image} alt={imageAlt} />
        </div>
      ) : null}
    </section>
  );
}

export default PageHero;
