
import { dbConnect } from "../helpers";
import service from "./model";
// import services from '../../../lib/service'
import { NextResponse } from "next/server";




export async function GET() {
  try {
    await dbConnect();
    const services = await service.find();
    return NextResponse.json({success: true, services});
  } catch (error) {
    console.error("Error fetching service:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the service. Please try again.",
      },
      {status: 500},
    );
  }
}

// export const GET = async () =>{
    
//  try{
//    await dbConnect();
//     await service.deleteMany();
//     const data = await service.insertMany(services);
//      return NextResponse.json({success: true, data});

//  }catch(err){
//     console.log(err);
//     return NextResponse.json(
//         {
//           success: false,
//           message: "An error occurred while fetching the service. Please try again.",
//         },
//         {status: 500},)
//  }
// }