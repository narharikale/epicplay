import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useLocation } from 'react-router-dom'
  const  PrivateRoute = ({ children }) =>  {
    const { isAuth } = useAuth();
    const location = useLocation()
    return isAuth.status ? children : <Navigate to="/signin" state={{ from:location }} replace/>;
  }

export { PrivateRoute };
