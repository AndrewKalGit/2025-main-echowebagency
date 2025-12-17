import { notFound } from "next/navigation"
import { Metadata } from "next"
import blogsData from "@/data/blogs.json"
import BlogPostClient from "./BlogPostClient"

// Define the blog post type
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  sections?: Array<{
    heading: string
    content: string
    keyPoint?: string
    image?: string
  }>
  author: string
  date: string
  readingTime: string
  tags: string[]
  topic: string
  image: string
  recommended?: boolean
  interactive?: {
    type: string
    component?: string
    data?: any
  }
  additionalInteractive?: {
    type: string
    data?: any
  }
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate metadata for SEO
export async function generateMetadata(
  { params }: BlogPostPageProps
): Promise<Metadata> {
  const { slug } = await params
  const post = (blogsData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Echo Web Agency`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return (blogsData as BlogPost[]).map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = (blogsData as BlogPost[]).find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const recommendedPosts = (blogsData as BlogPost[])
    .filter((p) => p.recommended && p.slug !== post.slug)
    .slice(0, 3)

  const relatedPosts = (blogsData as BlogPost[])
    .filter((p) => p.topic === post.topic && p.slug !== post.slug)
    .slice(0, 3)

  const sidebarPosts =
    recommendedPosts.length > 0 ? recommendedPosts : relatedPosts

  return (
    <BlogPostClient
      post={post}
      recommendedPosts={recommendedPosts}
      sidebarPosts={sidebarPosts}
    />
  )
}