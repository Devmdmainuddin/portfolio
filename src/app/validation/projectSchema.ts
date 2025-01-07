import {z} from "zod";

export const projectSchema = z.object({
  // _id: z.string().min(1, "ID is required"),
  title: z.string().nonempty("Title is required"),
  image: z.string().url("Invalid URL for Image").nonempty("Image URL is required"),
  description: z.string().nonempty("Description is required"),
  liveLink: z.string().url("Invalid URL for Live Link").nonempty("Live link is required"),
  clientLink: z.string().url("Invalid URL for Client Link").nonempty("Client link is required"),
  serverLink: z.string().optional(),
  tags: z
    .string()
    .nonempty("Tags are required")
    .refine((tags) => tags.split(",").length > 0, "Tags must include at least one item"),
  category: z.string().nonempty("Category is required"),
});

export type ProjectFormData = z.infer<typeof projectSchema>;
