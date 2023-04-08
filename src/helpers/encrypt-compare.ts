import * as bcrypt from 'bcryptjs';

export const encrypt = async (password: string) => {
  try {
    return await bcrypt.hash(password, 10)
  } catch (error) {
    console.log(error);
    return ("");
  }
}

export const compare = async (password: string, hash: string) => {
  return await bcrypt.compare(hash, password);
}