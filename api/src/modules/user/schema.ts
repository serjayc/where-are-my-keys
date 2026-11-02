import { z } from "zod";

export const userSchema = z.object({
  name: z.string().optional(),
  email: z.email().min(1, "Email is required"),
});

export type UserInput = z.infer<typeof userSchema>;
