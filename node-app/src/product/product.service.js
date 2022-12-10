import Product from "./product.model";

export const productService = {
  create: (product) => Product.create(product),
  single: (field, value) => Product.findOne({ [field]: value }),
  update: (condition, product) => Product.updateOne({ condition }, product),
  list: (condition) => Product.find(condition?.length > 0 ? condition : {}),
  delete: (field, value) => Product.deleteOne({ [field]: value }),
};
