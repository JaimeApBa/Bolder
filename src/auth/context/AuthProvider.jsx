import { useReducer } from 'react';
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGogle } from '../../firebase/provider';
import { AuthContext, authReducer, types } from './';

export const AuthProvider = ({ children }) => {

  const initialState = {
        status: 'checking', 
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        message: null
  }
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const registerWithCredentials = async ({ email, password, displayName }) => {
     const result = await registerUserWithEmailPassword({ email, password, displayName });
     
     const action = {
        type: types.register,
        payload: result
    }
    dispatch(action);
  }

  const loginWithCredentials = async ({ email, password }) => {
    const result = await loginWithEmailPassword({ email, password });

    const action = {
      type: types.login,
      payload: result
    }

    dispatch(action);
  }

  const loginWithGoogle = async () => {

    const result = await signInWithGogle();

    const action = {
      type: types.login,
      payload: result
    }

    dispatch(action);

  }

  const login = ({ uid, email, displayName, photoURL }) => {
    const action = {
      type: types.login,
      payload: { uid, email, displayName, photoURL }
    }

    dispatch(action);
  }

  const logout = () => {
    logoutFirebase();
    const action = {
      type: types.logout
    }
    dispatch(action)
  }


  return (
    <AuthContext.Provider 
        value={ { 
            ...authState,
            registerWithCredentials,
            loginWithCredentials,
            loginWithGoogle,
            login,
            logout 
        }}
    >
      { children }
    </AuthContext.Provider>
  )
}
