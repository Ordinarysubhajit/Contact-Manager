"use server";
import { revalidatePath } from "next/cache";
import { CreateContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";

export const CreateContactAction = async (prevState: any, formData: FormData) => {
    if (!formData.get("name") || !formData.get("email")) {
        return { error: "Name and email are required" };
    }
    const user=await getSession();

    const newContact :ContactType={
        name: formData.get ("name") as string,
        email: formData.get ("email") as string,
        userId: Number(user?.id)
    };

    try {
        await CreateContact(newContact);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("Error creating contact:", error);
        return { error: "Failed to create contact" };   
    }
};

export const UpdateContactAction = async (prevState: any, formData: FormData) => {
};

export const deleteContactAction = async (prevState: any, formData: FormData) => {
    const id = formData.get("id") as string ;
    try {
        await deleteContact(id);
        revalidatePath("/contact");
        return { success: true };
    } catch (error) {
        console.log("Error deleting contact:", error);
        return { error: "Failed to delete contact" };
    }
};
