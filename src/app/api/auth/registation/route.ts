import {NextRequest} from "next/server";
import {dbConnect, errorResponse, successResponse} from "../../helpers";
import user, {IUser} from "./model";

export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const {name, email, password, type} = (await req.json()) as Partial<IUser>;

    if (!name || !email || !password) {
      return errorResponse("Missing required fields");
    }
    const existingUser = await user.findOne({email});
    if (existingUser) {
      return errorResponse("User already exists.");
    }

    const users = await user.create({name, email, password, type});
    return successResponse(users);
  } catch (error) {
    console.log(error);
    return errorResponse("Internal server error");
  }
};
