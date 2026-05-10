import { contactType } from "@/app/(public)/contact/schema";
import axiosInstance from "./axios";
import API from "./endpoints";

export const sendEmail = async (contactData: contactType) => {
    try {
        const response = await axiosInstance.post(API.CONTACT.SEND_EMAIL, contactData);
        console.log(response.data)
        return response.data;
    } catch (err: Error | any) {
        throw new Error(
            err.response?.data?.message || err.message || "Something went wrong."
        );
    };
};