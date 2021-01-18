import * as mongoose from "mongoose";

export const UserProductSchema = new mongoose.Schema({
  _id: { type: String, required: false },
  gtin13: { type: String, required: true },
  email: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export const UserProductModel = mongoose.model(
  "UserProduct",
  UserProductSchema
);
