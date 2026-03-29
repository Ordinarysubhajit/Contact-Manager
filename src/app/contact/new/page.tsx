import ContactForm from "@/app/_components/ContactForm"
import { CreateContactAction } from "@/app/actions/contact"


const NewContactpage = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create new contact</h1>
      <ContactForm action={CreateContactAction}/>
    </div>
  );
};

export default NewContactpage
