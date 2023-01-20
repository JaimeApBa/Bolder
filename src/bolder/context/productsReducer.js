import { types } from "./types";

export const productsReducer = (state, action) => {
  
  switch (action.type) {
    case types.products:
        
        return {
          ...state,
          products: action.payload
        };
  
    case types.categories:
        
        return {
          ...state,
          totalCategories: action.payload
        };

    case types.category:
        
        return {
          ...state,
          currentCategory: action.payload
        };
  
    default:
        return state;
  }
}
