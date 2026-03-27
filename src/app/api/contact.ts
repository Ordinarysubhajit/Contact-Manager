import axios from "axios";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { ContactType } from "../_types/contact";

const API_URL="http://localhost:3001";

export const getContacts = async ( userId:string) => {
    const response = await axios.get(`${API_URL}/contacts?userId=${userId}`);
    return response.data;
};
export const getContactsById = async ( id:string) => {
    const response = await axios.get(`${API_URL}/contacts?${id}`);
    return response.data;
};
export const UpdateContact = async ( id:string, contact:ContactType) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`, contact);
    return response.data;
};
export const CreateContact = async ( id:string) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`);
    return response.data;
}