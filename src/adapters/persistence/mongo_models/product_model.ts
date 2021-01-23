import * as mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  gtin13: { type: String, required: true },
  name: { type: String, required: true },
  images: { type: [String], required: true },
  description: { type: String, required: true },
});

export interface IProduct extends mongoose.Document {
  _id: string;
  gtin13: string;
  name: string;
  images: Array<string>;
  description: string;
}

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
