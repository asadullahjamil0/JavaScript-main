import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

console.log(process.env.MONGODB_URI);

connectDB()
  .then(() => {
    app.on("errotr", (error) => {
      console.log("ERROR: ", error);
      throw error;f
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running at port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!! ", error);
  });

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
