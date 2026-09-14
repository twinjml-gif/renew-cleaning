function ResponsiveCollage({ alt, priority = false }) {
  return (
    <picture className="responsive-collage-picture">
      <source
        type="image/avif"
        srcSet="/images/collage-renew-720.avif 720w, /images/collage-renew-1152.avif 1152w"
        sizes="(max-width: 720px) calc(100vw - 2rem), (min-width: 900px) 516px, calc(100vw - 2.5rem)"
      />
      <source
        type="image/webp"
        srcSet="/images/collage-renew-720.webp 720w, /images/collage-renew-1152.webp 1152w"
        sizes="(max-width: 720px) calc(100vw - 2rem), (min-width: 900px) 516px, calc(100vw - 2.5rem)"
      />
      <img
        src="/images/collage RENEW.png"
        alt={alt}
        width="1536"
        height="1024"
        sizes="(max-width: 720px) calc(100vw - 2rem), (min-width: 900px) 516px, calc(100vw - 2.5rem)"
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  );
}

export default ResponsiveCollage;
