import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('General'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('Trần Vĩnh Thịnh'),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
