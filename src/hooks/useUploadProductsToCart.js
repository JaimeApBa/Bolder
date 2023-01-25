import { uploadProductsToCart } from "../helpers/uploadProductsToCart"

export const useUploadProductsToCart = async (product) => {
  return await uploadProductsToCart(product);
}
