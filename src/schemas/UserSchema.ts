import { z } from "zod";

export const UserSchema = z.object({
  name: z.string().nonempty("Name is required"),
  username: z.string().nonempty("Username is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  phone: z.string().nonempty("Phone is required"),
  website: z.string().nonempty("Website is required"),

  companyName: z.string().nonempty("Company name is required"),

  street: z.string().nonempty("Street is required"),
  suite: z.string().nonempty("Suite is required"),
  city: z.string().nonempty("City is required"),
  zipcode: z.string().nonempty("Zipcode is required"),

  lat: z.string().nonempty("Latitude is required"),
  lng: z.string().nonempty("Longitude is required"),
});

export type UserFormData = z.infer<typeof UserSchema>;