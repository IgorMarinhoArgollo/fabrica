import { model, Schema } from "mongoose";

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
    type: [String],
    default: [],
  }

});

export default model("Product", ProductSchema);