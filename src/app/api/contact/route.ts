import {NextRequest, NextResponse} from "next/server";
import contact from "./model";
import {dbConnect} from "../helpers";
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const {firstName, lastName, phone, email, message} = await req.json();
    const newContact = new contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newContact.save();
    return NextResponse.json({message: "Form submitted successfully!"});
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error submitting the form. Please try again."},
      {status: 500},
    );
  }
}

// GET method to fetch all contacts
export async function GET() {
  try {
    await dbConnect();
    const contacts = await contact.find();
    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error fetching the contacts. Please try again."},
      {status: 500},
    );
  }
}

// DELETE method to remove a contact by ID
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();

    const contactId = req.nextUrl.searchParams.get("contactId");
    if (!contactId) {
      return NextResponse.json({message: "Contact ID is required."}, {status: 400});
    }
    const deletedContact = await contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return NextResponse.json({message: "Contact not found."}, {status: 404});
    }

    return NextResponse.json({message: "Contact deleted successfully!"});
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error deleting the contact. Please try again."},
      {status: 500},
    );
  }
}
