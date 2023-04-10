import CategoryModel from "../models/CategoryModel";
import ProductModel from "../models/ProductModel";

export const getAllService = async () => {
  return await ProductModel.find();
}

export const getByIdService = async (_id: string) => {
  return await ProductModel.findById(_id);
}

const validateProductFields = (product: any) => {
  const { name, quantity, price, category } = product;
  if (!name || typeof name !== 'string') {
    return { code: 400, message: 'Invalid Field' };
  }

  if (!quantity || typeof quantity !== 'number') {
    return { code: 400, message: 'Invalid Field' };
  }

  if (!price || typeof price !== 'number') {
    return { code: 400, message: 'Invalid Field' };
  }

  if (category && !Array.isArray(category)) {
    return { code: 400, message: 'Invalid Field' };
  }

  if (category && category.some((cat: any) => typeof cat !== 'string')) {
    return { code: 400, message: 'Invalid Field' };
  }

  return null;
};

const validateCategories = async (categories: string[]) => {
  const existingCategories = await CategoryModel.find({ name: { $in: categories } });
  if (existingCategories.length !== categories.length) {
    return { code: 400, message: 'Invalid Field' };
  }
  return true;
}

export const createService = async (newProduct: any) => {
  const validationError = validateProductFields(newProduct);
  if (validationError) {
    return validationError;
  }

  const { name, quantity, price, category } = newProduct;

  const isValidCategory = await validateCategories(category);
  if (isValidCategory !== true) {
    return isValidCategory;
  }

  const product = { name, quantity, price, category };

  await ProductModel.create(product);
  return { code: 201, message: 'Product created successfully' };
};

export const updateService = async (newProduct: any, _id: string) => {
  const validationError = validateProductFields(newProduct);
  if (validationError) {
    return validationError;
  }

  const { name, quantity, price, category } = newProduct;

  const isValidCategory = await validateCategories(category);
  if (isValidCategory !== true) {
    return isValidCategory;
  }

  const product = { name, quantity, price, category };

  const updatedProduct = await ProductModel.findOneAndUpdate({ _id }, product, {
    new: true,
  });

  if (!updatedProduct) {
    return { code: 404, message: 'Product not found' };
  }

  return { code: 200, message: 'Product updated successfully' };
};

export const deleteService = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  if (result.deletedCount === 0) {
    return { code: 404, message: 'Product not found' };
  }
  return { code: 200, message: 'Product deleted successfully' };
}