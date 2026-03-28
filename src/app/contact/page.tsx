import axios from "axios";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

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
  return <div>Contact page</div>;
};

export default Contactpage;
