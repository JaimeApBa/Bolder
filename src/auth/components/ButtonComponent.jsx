import { useContext } from 'react'
import { AuthContext } from '../context';

export const ButtonComponent = ( { formSubmitted, buttonName } ) => {

  const { errorMessage, message } = useContext(AuthContext);
  
  return (
    <>
      <button type="submit" className={ (formSubmitted && (!!errorMessage || !!message)) ? 'bt bt-register' : 'bt bt-register m-25'}>{ buttonName }</button>
      {
        (formSubmitted && !!errorMessage) &&<p className='errorField red'>{ errorMessage }</p>
      }
      {
        (formSubmitted && !!message) &&<p className='messageField green'>{ message }</p>
      }
    </>
  )
}
