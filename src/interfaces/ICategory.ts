import { z } from 'zod';

const CategoryZodSchema = z.object({
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
});

type ICategory = z.infer<typeof CategoryZodSchema>;

export default ICategory;
export { CategoryZodSchema };