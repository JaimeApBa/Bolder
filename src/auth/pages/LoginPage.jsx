import { Link, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks';
import '../styles/authStyles.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../context';


const formData = {
  email: '',
  password: ''
}

export const LoginPage = () => {
  const hasError = false;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const location = useLocation();
  const { path, product } = location.state;
   
  const { 
    formState, email, password, onInputChange } = useForm( formData );

  const { loginWithGoogle, loginWithCredentials, errorMessage } = useContext(AuthContext)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    loginWithCredentials(formState);
  }

  return (
    <div className="authContainer">
      <form className="formContainer">
        <fieldset className={ !hasError ? 'm-25' : ''}>
          <legend>Correo Electrónico</legend>
          <input 
              type="email"
              className="inputField"
              name='email'
              value={ email}
              onChange={ onInputChange }
          />
        </fieldset>
        {
          (hasError) &&<p className='errorField red'>error</p>
        }
        <fieldset className={ !hasError ? 'm-25' : ''}>
          <legend>Contraseña</legend>
          <input 
              type="password"
              className="inputField"
              name='password'
              value={ password}
              onChange={ onInputChange }
          />
        </fieldset>
        {
          (hasError) &&<p className='errorField red'>error</p>
        }
        <div className={ (formSubmitted && !!errorMessage) ? '' : 'm-25'}>
          <button type='button' className='bt bt-login mr-30' onClick={ onSubmit }>Entra</button>
          <button type='button' className='bt bt-login' onClick={ loginWithGoogle }><span className='google'>G</span>oogle</button>
        </div>

        {
          (formSubmitted && !!errorMessage) &&<p className='errorField red'>{ errorMessage }</p>
        }
        <div className='footerAuth'>
          <span className='linkToRegister'>
            <Link to={ path } state={ product }>Volver</Link>
          </span>
          <span className='linkToRegister'>
            <Link to="/register">Registrate</Link>
          </span>
        </div>
      </form>
    </div>
  )
}
