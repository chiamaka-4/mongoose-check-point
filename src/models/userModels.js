import { Schema, model } from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  favouriteFoods: [
    {
      type: String,
      required: true,
      trim: true,
    },
  ],
});

const User = model("user", userSchema);

export default User;
