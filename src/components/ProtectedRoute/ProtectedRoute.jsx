import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute({ children }) {
    const { isLoggedIn, authChecked } = useAuth();

    const location = useLocation();

    // Comprobar la autenticación
    if(!authChecked){
        return null;
    }

    return isLoggedIn ? children : <Navigate to={"/login"} state={location} />;
}

export default ProtectedRoute;
