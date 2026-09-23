import { Product } from "./Product";
import { convertSlug } from "./helper";

const productData = (data: Product[] | undefined) => {
  return data
    ?.filter((product) => typeof product.product_name === "string" && product.product_name.trim().length > 0)
    .map((product, index) => ({
      ...product,
      _id: product._id ?? index,
      image_url: product.image_url || "",
      price: product.price ?? Math.floor(Math.random() * (1000 - 10 + 1)) + 10,
      slug: convertSlug(product.product_name),
      weight: product.weight?.length ? product.weight : ["100mg", "500mg", "1kg"],
    }));
};

export default productData
