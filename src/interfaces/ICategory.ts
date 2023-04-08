import { ObjectId } from 'mongodb';
import { z } from 'zod';

const CategoryZodSchema = z.object({
  id: z.string().refine((value) => ObjectId.isValid(value), {
    message: 'id must be a valid ObjectId',
  }).optional(),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
});

type ICategory = z.infer<typeof CategoryZodSchema>;

export default ICategory;
export { CategoryZodSchema };