import { z } from "zod";

export const contactSchema = z.object({
    fullName: z.string().nonempty("Full name is required.").min(5, "Full name must be at least 5 characters."),
    email: z.string().nonempty("Email is required.").email({ message: "Invalid email." }),
    projectType: z.string(),
    projectDescription: z.string().nonempty("Project description is required.").min(10, "Project description must be at least 10 characters.")
});

export type contactType = z.infer<typeof contactSchema>