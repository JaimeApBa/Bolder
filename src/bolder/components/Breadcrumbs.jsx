import { useContext } from "react"
import { ProductsContext } from "../context"

export const Breadcrumbs = () => {
  const { currentCategory, getCurrentCategory } = useContext(ProductsContext);
 

  const resetFilter = ({ target }) => {
    const filters = currentCategory;
    const { innerText:category } = target.parentNode.firstChild;
    
    const categories = filters.filter(filter => filter !== category);
    
    if(categories.length === 0) categories.push('Todas las categorias');
    
    getCurrentCategory(categories); 
}

  return (
    <nav className="breadcrumbs">
      {
        currentCategory.map((category, index) => (
          <div key={ index } className="bt-breadcrumbs">
            <span>{ category }</span>
            {
              (category !== "Todas las categorias")
                && <span className="icon material-symbols-outlined" onClick={ resetFilter }>close</span>
            }
            
          </div>
        ))
      }
    </nav>
  )
}
