import {NextRequest, NextResponse} from "next/server";
import Review from "./models";
import {dbConnect} from "../helpers";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const {name, professionName, profession, email, rating, comment, createdAt} = await req.json();
    const review = new Review({
      name,
      professionName,
      profession,
      email,
      rating,
      comment,
      createdAt,
    });
    await review.save();

    return NextResponse.json({message: "Review added successfully!"});
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error submitting the form. Please try again."},
      {status: 500},
    );
  }
}
export async function GET() {
  try {
    await dbConnect();
    const reviews = await Review.find();
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {message: "There was an error fetching the reviews. Please try again."},
      {status: 500},
    );
  }
}
