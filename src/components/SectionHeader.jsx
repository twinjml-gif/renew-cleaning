function SectionHeader({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "section-header center" : "section-header"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default SectionHeader;
