import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "firstName is too short min 1" })
      .max(5, { message: "firstName is too long max 5" }),
    lastName: z
      .string()
      .min(1, { message: "lastName is too short min 1" })
      .max(5, { message: "lastName is too long max 5" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" })
      .max(10, { message: "Password must be less than 10 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export type signUpSchemaType = z.infer<typeof signUpSchema>;
