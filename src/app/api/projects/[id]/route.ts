import {NextRequest, NextResponse} from "next/server";
import project from "../model";
import {dbConnect} from "../../helpers";

export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const {title, image, description, liveLink, clientLink, serverLink, tags, category} =
      await req.json();
    const projectId = req.nextUrl.pathname.split("/")[3];

    if (!projectId) {
      return NextResponse.json({success: false, message: "Project ID is required."}, {status: 400});
    }

    const existingProject = await project.findById(projectId);

    if (!existingProject) {
      return NextResponse.json({success: false, message: "Project not found."}, {status: 404});
    }

    // Update the project
    existingProject.title = title || existingProject.title;
    existingProject.image = image || existingProject.image;
    existingProject.description = description || existingProject.description;
    existingProject.liveLink = liveLink || existingProject.liveLink;
    existingProject.clientLink = clientLink || existingProject.clientLink;
    existingProject.serverLink = serverLink || existingProject.serverLink;
    existingProject.tags = tags || existingProject.tags;
    existingProject.category = category || existingProject.category;

    await existingProject.save();

    return NextResponse.json({
      success: true,
      message: "Project updated successfully!",
    });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while updating the project. Please try again.",
      },
      {status: 500},
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    const projecttId = req.url.split("/").pop();
    if (!projecttId) {
      return NextResponse.json({message: "Contact ID is required."}, {status: 400});
    }

    const deletedProject = await project.findByIdAndDelete(projecttId);
    if (!deletedProject) {
      return NextResponse.json({message: "project not found."}, {status: 404});
    }

    return NextResponse.json({message: "project deleted successfully!"});
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      {message: "There was an error deleting the project. Please try again."},
      {status: 500},
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const projectId = req.nextUrl.pathname.split("/")[3]; // Extract projectId from URL

    if (!projectId) {
      return NextResponse.json({success: false, message: "Project ID is required."}, {status: 400});
    }

    // Find the project by ID
    const singleProject = await project.findById(projectId);

    if (!singleProject) {
      return NextResponse.json({success: false, message: "Project not found."}, {status: 404});
    }

    return NextResponse.json({success: true, project: singleProject});
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the project. Please try again.",
      },
      {status: 500},
    );
  }
}
