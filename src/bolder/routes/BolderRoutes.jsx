import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../../auth/routes/AuthRoutes";
import { RoutesContextLayout } from "../context";
import { HomeProductPage, ProductDetailPage, ShoppingCartPage } from '../pages';

export const BolderRoutes = () => {
  
  return (
    <Routes>
        <Route element={ <RoutesContextLayout /> }>
          <Route path="*" element={ <HomeProductPage /> } />
          <Route path="product/:id" element={ <ProductDetailPage /> } />
          <Route path="shoppingcart" element={ <ShoppingCartPage /> } />
          <Route path="auth/*" element={ <AuthRoutes /> } />

          <Route path="/*" element={ <Navigate to="/home" /> } />
        </Route>
    </Routes>
  )
}
