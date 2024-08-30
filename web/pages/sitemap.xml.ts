import { fetchDataFromSanity } from "@/lib/sanity";
import { sitemapQuery } from "@/lib/sanity/queries/sitemapQuery";
import { GetServerSidePropsContext } from "next";

type SitemapLocation = {
  url: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
  lastmod?: Date;
};

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: "/",
    changefreq: "daily",
    priority: 1,
    lastmod: new Date(), // or custom date: '2023-06-12T00:00:00.000Z',
  },
];

const createSitemap = (locations: SitemapLocation[]) => {
  const vercelDeploymentUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : null
  const siteUrl =
      vercelDeploymentUrl || "https://jamstacky.com"; // Make sure to configure this
  const baseUrl = siteUrl.endsWith("/")
    ? siteUrl.slice(0, siteUrl.length - 1)
    : siteUrl;
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
        .map((location) => {
          const encodedPath = location?.url
          .split("/")
          .map((i) => encodeURIComponent(i))
          .join("/")
          return `<url>
          <loc>${baseUrl}${encodedPath?.endsWith('/')?encodedPath :`${encodedPath}/`}</loc>
          <priority>${location?.priority}</priority>
          ${
            location?.lastmod
              ? `<lastmod>${location?.lastmod.toISOString()}</lastmod>`
              : ""
          }
      </url>`;
        })
        .join("")}
  </urlset>
  `;
};

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  // Get list of sanity page-urls
  const routesFromSanity = await fetchDataFromSanity<
    { slug: string; _updatedAt: string }[]
  >({
    query: sitemapQuery.query,
  });
  const siteUrls: SitemapLocation[] = routesFromSanity.map((route) => {
    return {
      url: `/${route.slug}`,
      priority: 0.5,
      lastmod: new Date(route._updatedAt),
    };
  });

  // ... get more routes here

  // Return the default urls, combined with dynamic urls above
  const locations = [...defaultUrls, ...siteUrls];

  // Set response to XML
  res.setHeader("Content-Type", "text/xml");
  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=60");
  res.end(createSitemap(locations));

  return {
    props: {},
  };
}
