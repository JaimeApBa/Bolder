import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';



export const Header = () => {
  
  const { status, logout, displayName } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const { state:product } = location;
  
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
          (status === 'authenticated' && pathname !== '/shoppingcart')
            ? (
              <>
                <div className="shopping-cart" onClick={ goToShoppinCart }>
                  <span className="material-symbols-outlined">
                    shopping_cart_checkout
                  </span>
                </div>
                <div className='header-config'>
                  <span>Bienvenido, { displayName }</span>
                  <button className="bt-header bt-logout" onClick={ logout }>
                      <span className="material-symbols-outlined">logout</span>
                  </button>
                </div>
              </>
              )
            : ( <button className="bt-header bt-login-home" onClick={ onLogin }>
                <span className="material-symbols-outlined">login</span>
                </button>
              )
        }
        
        
        
    </header>
  )
}
