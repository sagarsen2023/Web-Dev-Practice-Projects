import * as Z from "zod";

export const AuthSchema = Z.object({
  email: Z.string().email(),
  password: Z.string({ message: "This field is required" }).min(8, {
    message: "Password must be at least 8 characters long",
  }),
  userType: Z.enum(["admin", "user"], {message: "Invalid user type"}),
});

export type AuthSchemaType = Z.infer<typeof AuthSchema>;
