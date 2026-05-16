import { MetadataRoute } from "next";

const BASE_URL = "https://generlate.com";

const routes = [
    "",
    "/about",
    "/docs",
    "/donate",
    "/finances",
    "/legal",
    "/news",
    "/pricing",
    "/team",
    "/team/austen-cabret",
];

const changeFrequencies: Record<
    string,
    MetadataRoute.Sitemap[0]["changeFrequency"]
> = {
    "": "yearly",
    "/about": "monthly",
    "/docs": "monthly",
    "/donate": "yearly",
    "/finances": "monthly",
    "/legal": "yearly",
    "/news": "weekly",
    "/pricing": "monthly",
    "/team": "monthly",
    "/team/austen-cabret": "monthly",
};

const priorities: Record<string, number> = {
    "": 1,
    "/about": 0.8,
    "/docs": 0.7,
    "/donate": 0.6,
    "/finances": 0.7,
    "/legal": 0.6,
    "/news": 0.7,
    "/pricing": 0.7,
    "/team": 0.7,
    "/team/austen-cabret": 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified,
        changeFrequency: changeFrequencies[route] || "monthly",
        priority: priorities[route] || 0.5,
    }));
}
