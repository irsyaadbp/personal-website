import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    role: z.string(),
    year: z.string(),
    techStack: z.array(z.string()),
    heroImage: z.string(),
    images: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    externalUrl: z.string().url().optional(),
  }),
});

const writings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writings' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { projects, writings };
