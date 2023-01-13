import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { AuthContext } from "../auth/context";

export const useCheckAuth = () => {
    const { status, login,logout } = useContext(AuthContext);

    useEffect(() => {
    
        onAuthStateChanged(FirebaseAuth, async( user ) => {
          
          if( !user ) return logout();
    
          const { uid, email, displayName, photoURL } = user;
    
          login({ uid, email, displayName, photoURL });
    
        })
    
      }, []);

      return status;
}
