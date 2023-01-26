import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';
import { ProductsContext } from '../context';



export const Header = () => {
  
  const { status, logout, displayName } = useContext(AuthContext);
  const { totalOrder } = useContext(ProductsContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const { state:product } = location;

  const { products } = totalOrder;
  
  const onLogin = () => {
    
    navigate("/auth/login" ,{ state: { path: pathname, product: product }});
  }

  const goToShoppinCart = () => {
    navigate("/shoppingcart");
  }

  return (
    <header className='header animated'>
        <div className="logo vov slide-in-left">Bolder</div>
        
        {
          (status === 'authenticated')
            ? (
              <>
              <div className='shopping-cart-wrapper'>
                <div className="shopping-cart" onClick={ goToShoppinCart }>
                  <span className="material-symbols-outlined bt-cart">
                    shopping_cart_checkout
                  </span>
                </div>
                  {
                    (products && products.length > 0)
                        ? <span className='notification'>{ products.length }</span>
                        : <span className='notification'>0</span>
                  }
                  
              </div>
                <div className='header-config'>
                  <span>Bienvenido, { displayName }</span>
                  <button className="bt-header bt-logout" onClick={ logout }>
                      <span className="material-symbols-outlined">logout</span>
                  </button>
                </div>
              </>
              )
            : ( 
                <button className="bt-header bt-login-home" onClick={ onLogin }>
                  <span className="material-symbols-outlined">login</span>
                </button>
              )
        }
        
        
        
    </header>
  )
}
