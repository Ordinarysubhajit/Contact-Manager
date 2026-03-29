import ContactForm from "@/app/_components/ContactForm";
import { UpdateContactAction } from "@/app/actions/contact";
import { getContactsById } from "@/app/api/contact";
import { use } from "react";


const EditContactpage = ({params}:{params: Promise<{ id: string }>}) => {
  const { id } = use (params);
    const contact = use (getContactsById(id));
    console.log("Contact to edit:", contact);
   return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit contact</h1>
      <ContactForm action={UpdateContactAction} contact={contact} />
    </div>
  );
};

export default EditContactpage
