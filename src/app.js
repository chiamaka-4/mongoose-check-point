import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import {
  createUser,
  findOneUserAndRemove,
  findOneUserAndUpdate,
  findOneUserByTheIdToDelete,
  findUserChain,
} from "./controllers/userControllers.js";
import { findUser } from "./controllers/userControllers.js";
import { findOneUser } from "./controllers/userControllers.js";
import { findOneUserById } from "./controllers/userControllers.js";
import { updateUser } from "./controllers/userControllers.js";
// Replace <Your URI> with your actual MongoDB URI obtained from MongoDB Atlas
// createUser();
// findUser();
// findOneUserAndRemove();
// findOneUser();
// findOneUserById();
// updateUser();
// findOneUserAndUpdate();
// findOneUserByTheIdToDelete();
findUserChain();
// Options for mongoose connection

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
