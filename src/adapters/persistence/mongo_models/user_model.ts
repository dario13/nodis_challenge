import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
});

export const UserModel = mongoose.model("User", UserSchema);
