import { model, Schema } from "mongoose";

export const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

export default model("Category", CategorySchema);