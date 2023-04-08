import { z } from 'zod';

const UserZodSchema = z.object({
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
    }).email('email must be a valid'),
});

type IUser = z.infer<typeof UserZodSchema>;

export default IUser;
export { UserZodSchema };