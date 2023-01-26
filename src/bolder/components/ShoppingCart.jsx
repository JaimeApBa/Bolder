import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context";

export const ShoppingCart = ( order ) => {
    
    const navigate = useNavigate();
    const { totalOrder, orderProducts } = useContext(ProductsContext);
    const { products } = totalOrder;
    const { product, qtty, totalProduct } = order;
    const { id, brend, model, name, description, image, price } = product;

    const navigateTo = () => {
        navigate(`/product/${ id }`, { state: product });
    }
    
    const deleteProduct = () => {
        
        const temp = products.filter(el => el.product !== order.product);
        totalOrder.products = temp;
        if(temp.length > 0) {
            totalOrder.totalPrice = temp.map(el => el.totalProduct).reduce((accumulator, currentValue) => accumulator + currentValue);
        } else totalOrder.totalPrice = 0;
        orderProducts(totalOrder);
       
    }
    return (
        <div className="product-resume-card border-bottom-dashed">
            <div className="image-product">
                <img src={ image[0]} className="image" alt="Image of the product"/>
            </div>
            <div className="product-body">
                <div className="product-details">
                    <h3 className="title linkTo" onClick={ navigateTo }>{ name }</h3>
                    <p>{ description }</p>
                    <p>
                        <span>Marca: </span>
                        { brend }
                        <span className={ !model ? "hide" : "model" }>Modelo: </span>
                        { model }
                    </p>
                </div>
                <div className="product-price flex-column">
                    <span className="price-details">{ qtty } x { price.toFixed(2) || '' } €</span>
                    <span className="totalPrice">{ totalProduct.toFixed(2) } €</span>
                </div>
            </div>
            <div className="delete-contain">
                <button className="bt-delete" onClick={ deleteProduct }>Eliminar</button>
            </div>
        </div>
    )
}
