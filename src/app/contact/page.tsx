import axios from "axios";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import ContactList from "../_components/ContactList";

const Contactpage = async () => {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        Please{" "}
        <a href="/login" className="text-blue-600 hover:underline">
          login
        </a>{" "}
        to view contacts
      </div>
    );
  }
  const contacts = await getContacts(String(user?.id));
  console.log("contacts:", contacts);
  console.log("User:", user);
 
  
  if (!contacts || contacts.length === 0) {
    return (
      <div>
        Please{" "}
        <a href="/contact/new" className="text-blue-600 hover:underline">
          Add a contact
        </a>{" "}
        to your Contact list
      </div>
    );
  }
  return <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl"> Your Contacts</h1>
      <a href="/contact/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add Contact
      </a>
    </div>
    <ContactList contacts={contacts} />

    </div>;
};

export default Contactpage;
