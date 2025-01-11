import {NextRequest} from "next/server";
import {dbConnect, errorResponse, successResponse} from "../../helpers";
import  User, {IUser} from "./model";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const {name, email, password} = (await req.json()) as Partial<IUser>;

    if (!name || !email || !password) {
      return errorResponse("Missing required fields");
    }
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return errorResponse("User already exists.");
    }

    const users = await User.create({name, email, password});
    return successResponse(users);
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error");
  }
};
