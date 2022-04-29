import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useLocation } from 'react-router-dom'
  function PrivateRoute({ children }) {
    const { isAuthorized } = useAuth();
    const location = useLocation()
    return isAuthorized.status ? children : <Navigate to="/signin" state={{ from:location }} replace/>;
  }

export { PrivateRoute };