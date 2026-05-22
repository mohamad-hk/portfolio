export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/fa"],
      disallow: ["/en/projects/", "/fa/projects/"],
    },
    sitemap: "https://mhkarimi.dev/sitemap.xml",
  };
}
