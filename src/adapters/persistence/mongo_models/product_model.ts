import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  gtin13: { type: String, required: true },
  name: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
});

export const ProductModel = mongoose.model("Product", ProductSchema);
