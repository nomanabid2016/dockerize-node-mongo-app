import { productService } from "./product.service";

export const createProduct = async (req, res) => {
  try {
    await productService.create(req.body);
    return res.send({ message: "Product created successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await productService.update({ _id: req.params.product }, req.body);
    return res.send({ message: "Product updated successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productService.delete(req.params.product);
    return res.send({ message: "Product deleted successfully" });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await productService.single("_id", req.params.product);
    return res.send({ message: "Get single product", data: product });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err.message });
  }
};

export const listProduct = async (req, res) => {
  try {
    const products = await productService.list([]);
    return res.send({ message: "Product listing", data: products });
  } catch (err) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: err.message });
  }
};
