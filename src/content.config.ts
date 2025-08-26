// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string(),
    featured: z.boolean().optional(),
    info: z
      .array(z.object({ title: z.string(), description: z.string() }))
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
