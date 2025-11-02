# CMS Integration Guide

This document explains how to connect the blog section to a backend CMS (Supabase or Strapi).

## Current Setup

The blog is currently using local JSON files from `/data/blogs.ts`. This works great for static sites but if you want dynamic content management, you can connect to a CMS.

## Option 1: Supabase Integration

### Setup Steps

1. **Create a Supabase Project**
   - Go to https://supabase.com
   - Create a new project
   - Note your project URL and API key

2. **Create Blog Posts Table**
   ```sql
   CREATE TABLE blog_posts (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     title TEXT NOT NULL,
     description TEXT NOT NULL,
     content TEXT NOT NULL,
     author TEXT NOT NULL,
     date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     thumbnail TEXT,
     category TEXT NOT NULL,
     tags TEXT[],
     read_time INTEGER,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

3. **Install Supabase Client**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Create Supabase Client**
   Create `lib/supabase.ts`:
   ```typescript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
   const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

   export const supabase = createClient(supabaseUrl, supabaseKey);
   ```

5. **Update Blog Pages**
   Replace static imports with Supabase queries:
   ```typescript
   // app/blog/page.tsx
   import { supabase } from '@/lib/supabase';
   
   export default async function BlogPage() {
     const { data: blogs } = await supabase
       .from('blog_posts')
       .select('*')
       .order('date', { ascending: false });
     
     // ... rest of component
   }
   ```

6. **Add Environment Variables**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

## Option 2: Strapi Integration

### Setup Steps

1. **Install Strapi**
   ```bash
   npx create-strapi-app my-strapi --quickstart
   ```

2. **Create Blog Content Type**
   - Log into Strapi admin panel
   - Create "Blog Post" content type with fields:
     - title (Text)
     - description (Text)
     - content (Rich Text)
     - author (Text)
     - date (Date)
     - thumbnail (Media)
     - category (Text)
     - tags (Text)
     - readTime (Number)

3. **Install Strapi SDK**
   ```bash
   npm install @strapi/strapi
   ```

4. **Create API Client**
   Create `lib/strapi.ts`:
   ```typescript
   const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

   export async function getBlogPosts() {
     const res = await fetch(`${STRAPI_URL}/api/blog-posts?populate=*`);
     const data = await res.json();
     return data.data;
   }

   export async function getBlogPost(id: string) {
     const res = await fetch(`${STRAPI_URL}/api/blog-posts/${id}?populate=*`);
     const data = await res.json();
     return data.data;
   }
   ```

5. **Update Blog Pages**
   Replace static data with API calls:
   ```typescript
   import { getBlogPosts } from '@/lib/strapi';
   
   export default async function BlogPage() {
     const blogs = await getBlogPosts();
     // ... rest of component
   }
   ```

6. **Add Environment Variables**
   ```
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   ```

## Option 3: Headless CMS (Contentful/Sanity)

### Contentful Example

1. **Create Contentful Account**
   - Go to https://www.contentful.com
   - Create a space and Blog Post content model

2. **Install Contentful SDK**
   ```bash
   npm install contentful
   ```

3. **Create Contentful Client**
   ```typescript
   import { createClient } from 'contentful';
   
   const client = createClient({
     space: process.env.CONTENTFUL_SPACE_ID!,
     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
   });
   
   export async function getBlogPosts() {
     const entries = await client.getEntries({
       content_type: 'blogPost',
       order: '-sys.createdAt',
     });
     return entries.items;
   }
   ```

## Migration Strategy

1. **Keep Local Data as Fallback**
   ```typescript
   import { blogs as localBlogs } from '@/data/blogs';
   import { getBlogPosts } from '@/lib/cms';
   
   export default async function BlogPage() {
     let blogs;
     try {
       blogs = await getBlogPosts();
     } catch (error) {
       console.error('CMS fetch failed, using local data');
       blogs = localBlogs;
     }
     // ...
   }
   ```

2. **Gradual Migration**
   - Start with static data
   - Add CMS as enhancement
   - Migrate content gradually

## Recommendations

- **For Simple Sites**: Stick with local JSON/Markdown files
- **For Dynamic Content**: Use Supabase (easiest SQL setup)
- **For Rich Content Editing**: Use Strapi (great admin UI)
- **For Enterprise**: Consider Contentful or Sanity

## Benefits of CMS Integration

1. **Content Management**: Non-technical users can edit content
2. **Dynamic Updates**: Content changes without code deployments
3. **Rich Media**: Better handling of images and assets
4. **Versioning**: Track content changes over time
5. **Multi-author**: Support multiple content creators

## Next Steps

1. Choose your CMS based on needs
2. Set up the CMS and create your schema
3. Migrate existing blog content
4. Update components to fetch from API
5. Test thoroughly before going live
