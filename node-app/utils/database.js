import mongoose from "mongoose";

mongoose
  .connect("mongodb://mongoDB:27017/node-app")
  .then(() => {
    console.log("DB connection established");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: " + err.message);
  });
