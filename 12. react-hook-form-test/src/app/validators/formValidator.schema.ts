import * as z from "zod";

export const formSchema = z.object({
  distributor: z.string().optional(),
  phoneNumber: z
    .number({
      message: "Phone number must be a number",
    })
    .min(10, "Phone number is required"),
  address: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.number().min(1, "Zip code is required"),
  }),
});

export type FormType = z.infer<typeof formSchema>;
