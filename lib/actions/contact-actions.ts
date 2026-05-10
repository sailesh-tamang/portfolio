import { contactType } from "@/app/(public)/contact/schema";
import { sendEmail } from "../api/contact";

export const handleContactEmail = async (formData: contactType) => {
    try {
        const result: any = await sendEmail(formData);
        if (result.success) {
            return {
                message: "Email sent successfully!",
                success: true
            };
        };
        return {
            message: result.message || "Something went wrong.",
            success: false
        }
    } catch (err: Error | any) {
        return {
            message: err.message || "Something went wrong.",
            success: false
        }
    }
};