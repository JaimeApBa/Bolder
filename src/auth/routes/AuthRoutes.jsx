
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useCheckAuth } from "../../hooks";
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  
  const status = useCheckAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const path = location.state?.path;
    const product = location.state?.product;
    if (status === 'authenticated' && product ) navigate(path, { state: product });
    
    if (status === 'authenticated' && !product ) navigate(path);
  }, [status])
  
  
  
  return (
    
    <Routes>
        <Route path="login" element={ <LoginPage /> }/>
        <Route path="register" element={ <RegisterPage /> }/>
        <Route path="/auth/*" element={ <Navigate to="login" /> }/>
    </Routes>
  )
}
