import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    url: z.string().url().optional(),
    repository: z.string().url(),
    stack: z.array(z.string()),
  }),
});

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    img: z.string().optional(),
  }),
});

export const collections = { projects, events };
