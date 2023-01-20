import { Navigate, Route, Routes } from "react-router-dom";
import { RoutesContextLayout } from "../context";
import { HomePage } from '../pages';

export const BolderRoutes = () => {
  return (
    <Routes>
        <Route element={ <RoutesContextLayout /> }>
          <Route path="/" element={ <HomePage /> } />

          <Route path="/*" element={ <Navigate to="/home" /> } />
        </Route>
    </Routes>
  )
}
