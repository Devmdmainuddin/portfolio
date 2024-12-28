import {NextRequest, NextResponse} from "next/server";
import project from "./model";
import {dbConnect} from "../helpers";
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const {title, image, description, liveLink, clientLink, serverLink, tags} = await req.json();

    if (!title || !image || !description || !liveLink || !clientLink || !tags) {
      return NextResponse.json(
        {success: false, message: "All required fields must be provided."},
        {status: 400},
      );
    }
    const newProject = new project({
      title,
      image,
      description,
      liveLink,
      clientLink,
      serverLink,
      tags,
      createdAt: new Date(),
    });

    await newProject.save();
    return NextResponse.json({
      success: true,
      message: "Project submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while submitting the project. Please try again.",
      },
      {status: 500},
    );
  }
}

// GET method to fetch all contacts
export async function GET() {
  try {
    await dbConnect();
    const Project = await project.find();
    return NextResponse.json({success: true, Project});
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the projects. Please try again.",
      },
      {status: 500},
    );
  }
}

// DELETE method to remove a contact by ID
export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();

    const projectId = req.nextUrl.searchParams.get("projectId");
    if (!projectId) {
      return NextResponse.json({success: false, message: "Project ID is required."}, {status: 400});
    }
    const deletedProject = await project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return NextResponse.json({success: false, message: "Project not found."}, {status: 404});
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully!",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while deleting the project. Please try again.",
      },
      {status: 500},
    );
  }
}
