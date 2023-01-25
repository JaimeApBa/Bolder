import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Header, ShoppingCart } from "../components";
import { ProductsContext } from "../context";

export const ShoppingCartPage = () => {
  const { totalOrder } = useContext(ProductsContext);
  const { totalPrice } = totalOrder;

  const handlePayment = () => {
    let timerInterval;
    Swal.fire({
      title: 'Procesando la compra...',

      timer: 2000,
      timerProgressBar: false,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
        Swal.fire('Tu compra se ha completado', 'Recibiras un correo de confirmación de tu compra', 'success' )

      }
    });

  }

  return (
    <div className="product-detail-container h-100 pb-20 vov fade-in slow">
            <Header />
            <div className="bt-breadcrumbs">
                <Link to="/" className="white">Volver</Link>
            </div>
            {
              ( totalOrder && totalOrder.products )
                ? totalOrder.products.map(el => (
                  <ShoppingCart key={ el.product.id } { ...el }/>
                ))
                : <p>El carrito de la compra esta vacio</p>
            }
            <div className="totalOrderPrice">
              <span className="font-size-20 mr-30">Total:</span>
              {
                ( totalOrder && totalOrder.products )
                  ? <span>{ totalPrice.toFixed(2) } €</span>
                  : <span>0.00 €</span>
              }
              
            </div>
            <button className="bt-payment" onClick={ handlePayment }>Pagar</button>

        </div>
  )
}
