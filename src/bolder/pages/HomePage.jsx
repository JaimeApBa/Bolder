import '../styles/bolderStyles.css';
import { Breadcrumbs, Header, ProductResume, Sidebar } from "../components";
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../context';

// import products from '../../data/products.json';

export const HomePage = () => {

  const { loadingProducts, products, currentCategory, totalCategories } = useContext(ProductsContext);
  const [idCategory, setIdCategory] = useState([]);
  
  useEffect(() => {
    setCategories();
  }, [currentCategory])
  
  useEffect(() => {
    loadingProducts(idCategory);
  }, [idCategory]);
  
  const setCategories = () => {
    
    if(totalCategories) { 
      const ids = [];
      
      currentCategory.map( element => {
        const index = totalCategories.findIndex(x => x.name === element);
        if(index >= 0) ids.push(totalCategories[index].id);
      });

      setIdCategory(ids);
    }

  }
 
  return (
    <>
      <div className="container vov fade-in slow">

        <Header />
        <Breadcrumbs />
        <Sidebar />
        <main className="container-product">
          
          {
            (products)
              && products.map(element => (
                <ProductResume key={ element.id } { ...element } />
              ))
          }
        </main>
      
      </div>
    </>
  )
}
