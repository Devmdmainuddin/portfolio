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

