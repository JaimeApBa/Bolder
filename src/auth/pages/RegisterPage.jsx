import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { ButtonComponent } from "../components/ButtonComponent";
import { AuthContext } from "../context";
import { formValidations } from "../validators/validations";

const formData = {
    displayName: '',
    email: '',
    password: ''
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { registerWithCredentials, errorMessage } = useContext(AuthContext);
  
  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );


  
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;
    
    registerWithCredentials(formState);
 
  }

  return (
    <div className="authContainer">
      <form className="formContainer" onSubmit={ onSubmit }>
        <fieldset className={ (formSubmitted && !!displayNameValid) ? 'border-red' : 'm-25'}>
          <legend className={ (formSubmitted && !!displayNameValid) ? 'red' : '' }>Nombre</legend>
          <input 
              type="text"
              className="inputField"
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
          />
        </fieldset>
        {
          (formSubmitted && !!displayNameValid) &&<p className='errorField red'>{ displayNameValid }</p>
        }
        <fieldset className={ (formSubmitted && !!emailValid) ? 'border-red' : 'm-25' }>
          <legend className={ (formSubmitted && !!emailValid) ? 'red' : '' }>Correo Electrónico</legend>
          <input 
              type="email"
              className="inputField"
              name='email'
              value={ email }
              onChange={ onInputChange }
          />
        </fieldset>
        {
          (formSubmitted && !!emailValid) &&<p className='errorField red'>{ emailValid }</p>
        }
        <fieldset className={ (formSubmitted && !!passwordValid) ? 'border-red' : 'm-25' }>
          <legend className={ (formSubmitted && !!passwordValid) ? 'red' : '' }>Contraseña</legend>
          <input 
              type="password"
              className="inputField"
              name='password'
              value={ password }
              onChange={ onInputChange }
          />
        </fieldset>
        {
          (formSubmitted && !!passwordValid) &&<p className='errorField red'>{ passwordValid }</p>
        }

        <ButtonComponent formSubmitted = { formSubmitted } buttonName = "Registrar" />

        <p className='linkToLogin'>
          <Link to="/login">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  )
}
