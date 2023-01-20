import { useReducer } from 'react';
import { ProductsContext, productsReducer } from './';
import { useLoadingCategories, useLoadingProducts } from '../../hooks';
import { types } from './types';
import data from '../../data/products.json';


export const ProductsProvider = ({ children }) => {

    const initialState = {
        products: [],
        currentCategory: ["Todas las categorias"]
    }

    const [productsState, dispatch] = useReducer(productsReducer, initialState);

    const loadingProducts = async (category) => {
        
        try{
            const products = await useLoadingProducts(category);
            
            const action = {
                type: types.products,
                payload: products 
            }
            dispatch(action);

        }
        catch(error) {
            data.map((el, index) => {
                el.id = index
            });
            const action = {
                type: types.products,
                payload: data
            }
            dispatch(action);
            throw new Error('Error al conectar a la base de datos');
        }
    }

    const getAllCategories = async () => {
        try {
            const categories = await useLoadingCategories();
            
            const action = {
                type: types.categories,
                payload: categories
            }

            dispatch(action);

        } catch (error) {
            console.log('Error al cargar las categorias');
        }
    }

    const getCurrentCategory = (category) => {
        const action = {
            type: types.category,
            payload: category
        }
        dispatch(action);
    }

    return (
        <ProductsContext.Provider
            value={{
                ...productsState,
                loadingProducts,
                getAllCategories,
                getCurrentCategory
            }}
        >
            { children }
        </ProductsContext.Provider>
    )
}
