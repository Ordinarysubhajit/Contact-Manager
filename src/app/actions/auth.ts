"use server";
import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3001";

export const loginAction = async (formData: FormData) => {
  try {
    const email = String(formData.get("email")).trim();
    const password = String(formData.get("password")).trim();
    //console.log("EMAIL:", email);
    //console.log("PASSWORD:", password);
    //const response = await axios.get(`${API_URL}/users`);
    //console.log("API RESPONSE:", response.data);
    const response = await axios.get(
      `${API_URL}/users?email=${email}&password=${password}`,
    );
    const user = response.data[0];

    if (!user) {
      throw new Error("Invalid credentials");
    }
    await setSession({name:user.name, email: user.email, id: user.id});
  } catch (error) {
    console.error("REAL ERROR:", error);
    throw error;
  }

  redirect("/contact");
};

export const logoutAction = async() => {
    await deleteSession();
  redirect("/login");
};
