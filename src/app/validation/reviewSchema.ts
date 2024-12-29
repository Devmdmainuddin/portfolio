import { z } from 'zod';

export const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  professionName: z.string().min(1, 'Profession name is required'),
  profession: z.string().min(1, 'Profession is required'),
  email: z.string().email('Invalid email address'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;
