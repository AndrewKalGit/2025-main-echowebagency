import { MetadataRoute } from 'next'
import blogsData from '@/data/blogs.json'
import projectsData from '@/data/projects.json'

interface BlogPost {
  slug: string
  date: string
  recommended?: boolean
}

interface Project {
  slug: string
  year: string
  featured?: boolean
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://echowebagency.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic blog posts
  const blogPosts: MetadataRoute.Sitemap = (blogsData as BlogPost[]).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: post.recommended ? 0.9 : 0.7,
  }))

  // Dynamic portfolio projects
  const portfolioProjects: MetadataRoute.Sitemap = (projectsData as Project[]).map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(`${project.year}-01-01`),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.7,
  }))

  return [...staticPages, ...blogPosts, ...portfolioProjects]
}