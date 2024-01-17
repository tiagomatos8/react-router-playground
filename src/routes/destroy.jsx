import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ request, params }) {
  throw new Error('bang');
  await deleteContact(params.contactId);
  return redirect('/');
}
