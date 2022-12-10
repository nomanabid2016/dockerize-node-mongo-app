import { Schema, model } from "mongoose";
const productSchema = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamp: true }
);

export default model("products", productSchema);
