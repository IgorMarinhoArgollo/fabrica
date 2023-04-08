import { z } from 'zod';
import { CategoryZodSchema } from './ICategory';
import { ObjectId } from 'mongodb';

const ProductZodSchema = z.object({
  id: z.string().refine((value) => ObjectId.isValid(value), {
    message: 'id must be a valid ObjectId',
  }).optional(),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
  quantity: z.number({
    required_error: 'name is required',
    invalid_type_error: 'name must be a number',
  }),
  price: z.number({
    required_error: 'name is required',
    invalid_type_error: 'name must be a number',
  }),
  category: z.array(CategoryZodSchema).optional(),
});

type IProduct = z.infer<typeof ProductZodSchema>;

export default IProduct;
export { ProductZodSchema };