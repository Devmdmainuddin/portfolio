// import serviceData from "@/lib/service";
import {dbConnect} from "../helpers";
import service from "./model";
import {NextResponse} from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const data = await service.find();
    console.log(data);
    return NextResponse.json({success: true, data});
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
// export const GET = async () => {
//   try {
//     await dbConnect();
//     await service.deleteMany();
//     const data = await service.insertMany(serviceData);
//     return NextResponse.json({success: true, data});
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       {
//         success: false,
//         message: "An error occurred while fetching the service. Please try again.",
//       },
//       {status: 500},
//     );
//   }
// };
