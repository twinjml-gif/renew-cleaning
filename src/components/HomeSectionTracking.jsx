import { useEffect } from "react";
import { track } from "../utils/analytics.js";

const trackedSections = ["diensten", "prijzen", "resultaten", "zakelijk", "contact"];

function HomeSectionTracking() {
  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seen.has(entry.target.id)) return;
        seen.add(entry.target.id);
        track("section_view", { section: entry.target.id });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    trackedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default HomeSectionTracking;
