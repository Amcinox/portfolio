import { MetadataRoute } from 'next'
import config from '@/config'
const { projects, siteMetadata } = config


export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const allprojects = projects
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))

  const routes = ['', 'privacy-policy', 'term-of-service'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...allprojects]
}
