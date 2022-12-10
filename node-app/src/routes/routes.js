import { productRoutes } from "../product/product.routes";
import { Router } from "express";
const router = Router();

router.use("/products", productRoutes);

router.use("/", (req, res) => {
  return res.status(404).send({ message: "Route not found" });
});

export default router;
