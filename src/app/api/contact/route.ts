import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {name, firstName, lastName, phone, email, message} = await req.json();
    console.log("Received Contact Form:", {name, firstName, lastName, phone, email, message});

    // Handle the form data (e.g., send email, store in DB)
    // await sendEmail({ name, email, message });

    return NextResponse.json({message: "Form submitted successfully!"});
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error submitting the form. Please try again."},
      {status: 500},
    );
  }
}
