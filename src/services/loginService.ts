import tokenGenerator from "../helpers/tokenGenerator";
import { compare } from "../helpers/encrypt-compare";
import UserModel from "../models/UserModel";

const loginService = async (email: string, password: string) => {
  if (!email || !password) {
    return { code: 400, message: 'Invalid Field' };
  }
  const user = await UserModel.findOne({ email })
  if (await compare(user?.password as string, password)) {
    
    return {token: tokenGenerator(user?.email as string, user?.name as string)};
  }
  return { code: 401, message: 'Unauthorized' };
};

export default loginService;