import {
  getProduct,
  listProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} from "./product.controller";
import { Router } from "express";
const router = Router();

router.get("/", listProduct);
router.post("/", createProduct);
router.get("/:product", getProduct);
router.patch("/:product", updateProduct);
router.delete("/:product", deleteProduct);

export const productRoutes = router;
