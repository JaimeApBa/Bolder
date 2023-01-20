import { Outlet } from "react-router-dom";
import { ProductsProvider } from "./";

export const RoutesContextLayout = () => {
  return (
    <ProductsProvider>
        <Outlet />
    </ProductsProvider>
  )
}
