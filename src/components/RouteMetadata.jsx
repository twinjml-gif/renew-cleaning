import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCanonicalUrl, routeMetadata } from "../data/metadata.js";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] || routeMetadata["/"];
    const canonicalUrl = getCanonicalUrl(pathname);
    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}

export default RouteMetadata;
