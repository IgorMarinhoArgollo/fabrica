import { ObjectId } from 'mongodb';
import { z } from 'zod';

const UserZodSchema = z.object({
  id: z.string().refine((value) => ObjectId.isValid(value), {
    message: 'id must be a valid ObjectId',
  }).optional(),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }).min(3, { message: 'password must be 3 or more characters long' }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).min(3, { message: 'email must be 3 or more characters long' }),
});

type IUser = z.infer<typeof UserZodSchema>;

export default IUser;
export { UserZodSchema };