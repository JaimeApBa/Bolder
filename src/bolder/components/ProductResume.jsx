import { useLocation, useNavigate } from "react-router-dom";
import { AddingToCart } from "./AddingToCart";

export const ProductResume = (product) => {

    const location = useLocation();
    const navigate = useNavigate();
    
    const { id, brend, model, name, description, image, price, rating, stock } = product;
    const { pathname } = location;

    const starRating = {
        '--rating': rating
    }
    
    const navigateTo = () => {
        navigate(`/product/${ id }`, { state: product });
    }

    return (
    <div className={ (pathname === '/') ? "product-resume-card border-bottom-dashed" : "product-resume-card" }>
        <div className="image-product">
            <img src={ image[0]} className="image" alt="Image of the product"/>
        </div>
        <div className="product-body">
            <div className="product-details">
                <h3 className={ (pathname === '/') ? "title linkTo" : "title"} onClick={ navigateTo }>{ name }</h3>
                <p>{ description }</p>
                <p>
                    <span>Marca: </span>
                    { brend }
                    <span className={ !model ? "hide" : "model" }>Modelo: </span>
                    { model }
                </p>
                <div className="stars" style={ starRating }></div>
                {
                    (pathname !== '/') 
                        && <AddingToCart { ...product } />
                }
            </div>
            <div className="product-price">
                <span className="price">{ price.toFixed(2) || '' } €</span>
            </div>
        </div>
    </div>
  )
}

