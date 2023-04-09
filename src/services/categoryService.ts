import CategoryModel from "../models/CategoryModel";

const categoryService = async () => {
  return await CategoryModel.find();
}

export default categoryService;