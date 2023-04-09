import { model, Schema } from "mongoose";

export const CategorySchema = new Schema({
  name: {
    type: String,
    require: true,
  },
}, { versionKey: false });

export default model("Category", CategorySchema);