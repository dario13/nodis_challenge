import * as mongoose from "mongoose";
import { Status } from "../../../domain/user_product";

export const UserProductSchema = new mongoose.Schema({
  _id: { type: String, required: false },
  productId: { type: String, required: true },
  userId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["created", "updated", "deleted"],
    required: true,
  },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: false },
  deletedAt: { type: Date, required: false },
});

export interface IUserProduct extends mongoose.Document {
  _id: string;
  productId: string;
  userId: string;
  quantity: number;
  price: number;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const UserProductModel = mongoose.model<IUserProduct>(
  "UserProduct",
  UserProductSchema
);
