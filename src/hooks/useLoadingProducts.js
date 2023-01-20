import { loadAllProducts, loadProductsByCategory } from "../helpers";


export const useLoadingProducts = async (category) => {

    if(category.length === 0) return await loadAllProducts();
    else return await loadProductsByCategory(category);
    
}
