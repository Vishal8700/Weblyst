const URLS = [
  { url: "/", priority: "1.0", changefreq: "daily" },
  { url: "/about", priority: "0.9", changefreq: "monthly" },
  { url: "/services/website-building", priority: "0.9", changefreq: "weekly" },
  { url: "/services/social-media", priority: "0.9", changefreq: "weekly" },
  { url: "/services/meta-ads", priority: "0.9", changefreq: "weekly" },
  { url: "/portfolio", priority: "0.8", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/blog", priority: "0.7", changefreq: "weekly" },
  { url: "/faq", priority: "0.7", changefreq: "monthly" },
  { url: "/resources", priority: "0.6", changefreq: "monthly" },
  { url: "/revisions", priority: "0.5", changefreq: "yearly" },
  { url: "/t&c", priority: "0.5", changefreq: "yearly" },
  { url: "/3D-architecture-visualization-studio", priority: "0.8", changefreq: "weekly" },
  { url: "/3d-product-rendering", priority: "0.8", changefreq: "weekly" },
]

export async function GET(request: Request) {
  const { origin } = new URL(request.url)
  const lastmod = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${URLS.map(
  ({ url, priority, changefreq }) => `  <url>
    <loc>${origin}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join("\n")}
</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
