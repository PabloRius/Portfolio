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

const experienceSchema = z.object({
  id: z.number(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  skills: z.array(z.string()),
  logo: z.string().optional(),
});

const experiences = defineCollection({
  schema: experienceSchema,
});

const volunteering = defineCollection({
  schema: experienceSchema,
});

export type Experience = z.infer<typeof experienceSchema>;

const educationSchema = z.object({
  id: z.number(),
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
  courses: z.array(z.string()),
  logo: z.string().optional(),
});

const education = defineCollection({
  schema: educationSchema,
});

export type Education = z.infer<typeof educationSchema>;

export const collections = { projects, experiences, volunteering, education };
