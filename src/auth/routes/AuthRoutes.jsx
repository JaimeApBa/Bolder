import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { BolderRoutes, HomePage } from "../../bolder";
import { useCheckAuth } from "../../hooks";
import { BolderAppRouter } from "../../router/BolderAppRouter";
import { LoginPage, RegisterPage } from "../pages"

export const AuthRoutes = () => {
  const status = useCheckAuth();
  const navigate = useNavigate();
  
  if (status === 'authenticated') navigate("/*");
  
  return (
    
    <Routes>
        <Route path="login" element={ <LoginPage /> }/>
        <Route path="register" element={ <RegisterPage /> }/>
    </Routes>
  )
}
