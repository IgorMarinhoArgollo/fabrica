import { model, Schema } from "mongoose";
import { CategorySchema } from './CategoryModel';

const ProductSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: [CategorySchema],
    default: [],
  }

});

export default model("Product", ProductSchema);