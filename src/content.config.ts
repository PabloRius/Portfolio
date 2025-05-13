import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  url: z.string().url().optional(),
  repository: z.array(
    z.object({ url: z.string().url(), title: z.string().optional() })
  ),
  stack: z.array(z.string()),
  status: z.string(),
  priority: z.number(),
  img: z.array(z.string()),
});

const projects = defineCollection({
  schema: projectSchema,
});

export type Project = z.infer<typeof projectSchema>;

export const collections = { projects };
