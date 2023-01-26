import { useContext, useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../../auth/context';
import { ProductsContext } from '../context';

export const AddingToCart = (product) => {
    
    const { stock } = product;
    const { status } = useContext(AuthContext);
    const { orderProducts, totalOrder } = useContext(ProductsContext);
    const selectElem = useRef();
    
    const maxAmount = Array(stock).fill().map((el, i) => i);


    const checkIfAuth = () => {
        if(status === "authenticated") return true;

        Swal.fire('Atención', 'Debes de acceder con tu usuario para poder realizar una compra', 'info');
        return false;
    }

    const addToCart = () => {
        
        if(!checkIfAuth()) return;

        const { value } = selectElem.current;
        
        const newProduct = {
            product,
            qtty: Number(value),
            totalProduct: product.price * Number(value)
        };
        
        if(totalOrder.products) {
            checkIfExistInOrder(newProduct, Number(value));
            
            orderProducts(totalOrder);

        }
        else {
            const newOrder = {
                date: new Date().getTime(),
                ordered: false,
                products: [newProduct],
                totalPrice: product.price * Number(value)
            }
            orderProducts(newOrder);
        }

        return Swal.fire('Enhorabuena', 'Se ha actualizado el carrito de compra', 'success');
    }

    const checkIfExistInOrder = (newProduct, value) => {

        const index = totalOrder.products.findIndex(el => el.product.id === newProduct.product.id );

        if(index < 0) {
            totalOrder.products.push(newProduct);
        }
        else {
            const { product } = totalOrder.products[index];
            const { price } = product;
            totalOrder.products[index].totalProduct = price * value;
            totalOrder.products[index].qtty = value;
        }

        totalOrder.totalPrice = totalOrder.products.map(el => el.totalProduct).reduce((accumulator, currentValue) => accumulator + currentValue);
    }

    return (
        <div className="cart">
            <label htmlFor="amount">Cantidad:</label>
            <select name="cart" id="cart" ref={ selectElem } onChange={ checkIfAuth } >
                {
                    maxAmount.map(number => (
                        <option key={ number } value={ number + 1 }>{ number + 1 }</option>
                    ))
                }
            </select>
            <span className="material-symbols-outlined icon-cart pointer" onClick={ addToCart }>
                add_shopping_cart
            </span>
        </div>
    )
}
