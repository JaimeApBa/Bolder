import { Navigate, Route, Routes } from "react-router-dom";

import { AuthRoutes } from "../auth";
import { BolderRoutes } from "../bolder";
import { RoutesContextLayout } from "../bolder/context";
import { useCheckAuth } from "../hooks";
import { CheckingAuth } from "../ui/CheckingAuth";

export const BolderAppRouter = () => {

  // const { status, login,logout } = useContext(AuthContext);

  const status = useCheckAuth();

  if(status === 'checking') {
    return <CheckingAuth />
  }
  
  return (
    <Routes>
        <Route element={ <RoutesContextLayout /> }>
          <Route path="*" element={ <BolderRoutes /> } />
          <Route path="/auth/*" element={ <AuthRoutes /> } />
          <Route path="/*" element={ <Navigate to="/" /> } />
        </Route>
        {/* {
          (status === 'authenticated')
            ? <Route path="/*" element={ <BolderRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } /> */}
    </Routes>
  )
}
