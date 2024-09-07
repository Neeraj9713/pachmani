import { z } from "zod";

const loginSchema = z.object({
  email: z
  .string({ required_error: "Name is required" })
  .trim()
  .min(3, { message: "message must be in 3 letter" })
  .max(233, { message: "message is not more than 255 character" }),
  password: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "message must be in 3 letter" })
    .max(233, { message: "message is not more than 255 character" }),
});

//create an object schema
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "message must be in 3 letter" })
    .max(233, { message: "message is not more than 255 character" }),
  phone: z
    .string({ required_error: "Number is requires" })
});

export {signupSchema,loginSchema};
