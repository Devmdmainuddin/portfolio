import { NextRequest, NextResponse } from "next/server";
import contact from "../model";
import { dbConnect } from "../../helpers";

// export async function DELETE(req: NextRequest) {
//   try {
//     await dbConnect();

//     const contactId = req.nextUrl.searchParams.get("contactId");
//     console.log("Request to delete contact with ID:", contactId);

//     if (!contactId) {
//       return NextResponse.json({ message: "Contact ID is required." }, { status: 400 });
//     }

//     const deletedContact = await contact.findByIdAndDelete(contactId);
//     console.log("Deleted contact:", deletedContact);

//     if (!deletedContact) {
//       return NextResponse.json({ message: "Contact not found." }, { status: 404 });
//     }

//     return NextResponse.json({ message: "Contact deleted successfully!" });
//   } catch (error) {
//     console.error("Error deleting contact:", error);
//     return NextResponse.json(
//       { message: "There was an error deleting the contact. Please try again." },
//       { status: 500 }
//     );
//   }
// }
export async function DELETE(req: NextRequest) {
    try {
      await dbConnect();
      console.log("Database connected successfully.");
  
      // Extract the contactId from the URL parameter
      const contactId = req.url.split("/").pop(); // This will grab the last part of the URL which is contactId
  
      console.log("Request to delete contact with ID:", contactId);
  
      // Validate contactId format
          if (!contactId) {
      return NextResponse.json({ message: "Contact ID is required." }, { status: 400 });
    }
  
      const deletedContact = await contact.findByIdAndDelete(contactId);
      console.log("Deleted contact:", deletedContact);
  
      if (!deletedContact) {
        return NextResponse.json({ message: "Contact not found." }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Contact deleted successfully!" });
    } catch (error) {
      console.error("Error deleting contact:", error);
      return NextResponse.json(
        { message: "There was an error deleting the contact. Please try again." },
        { status: 500 }
      );
    }
  }