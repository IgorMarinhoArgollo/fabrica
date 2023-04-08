import { z } from 'zod';
import { CategoryZodSchema } from './ICategory';

const ProductZodSchema = z.object({
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