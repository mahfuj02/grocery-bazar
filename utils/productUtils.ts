import { Product } from "./Product";
import { convertSlug } from "./helper";

const productData = (data: Product[] | undefined) => {
    data?.forEach((product) => {
    const randomPrice = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
    product.price = randomPrice;
    product.slug = convertSlug(product.product_name);
    product.weight = ["100mg", "500mg", "1kg"];
  });
  return data;
};

export default productData
