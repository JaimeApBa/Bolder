import { useContext, useEffect } from "react";
import { ProductsContext } from "../context";

export const Sidebar = () => {

    const { getAllCategories, getCurrentCategory, currentCategory, totalCategories } = useContext(ProductsContext);

    useEffect(() => {
        getAllCategories();
    }, [])
       
    const addFilter = ({ target }) => {
        const { innerText:text } = target;
        const filters = [];

        if(currentCategory.includes('Todas las categorias')) {
            filters.push(text)         
        } else if(currentCategory.includes(text)) {
            return;
        } else {
            filters.push(...currentCategory, text);
        }   
        
        getCurrentCategory(filters);
    }

    const resetFilter = ({ target }) => {
        const { innerText:text } = target;
        getCurrentCategory([text]); 
    }

    return (
        <aside className="sidebar" >
            <ul>
                <li className="sidebar-list" onClick={ resetFilter }>Todas las categorias</li>
                {
                    (totalCategories)
                        && totalCategories.map(category => (
                            <li className="sidebar-list" key={ category.id } onClick={ addFilter }>{ category.name }</li>
                        ))
                }
            </ul>
        </aside>
    )
}
