import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/_next/'],
    },
    sitemap: 'https://hindustaan.in/sitemap.xml', // Sitemap Index → references sitemap-main, sitemap-services, sitemap-blog
  }
}