import { useContext } from "react";
import '../styles/bolderStyles.css';

import { AuthContext } from "../../auth/context";

export const HomePage = () => {

  const { logout } = useContext(AuthContext);

  return (
    <>
      <div className="container">HomePage
        <button onClick={ logout }>logout</button>
      
      </div>
    </>
  )
}
