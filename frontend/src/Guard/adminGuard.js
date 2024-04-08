import { getToken } from "../services/tokenStorage";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
import ROUTES from "../Routes/routesModel";


const AdminGuard = ( {children} ) => {

    const token = getToken();
    const decodedToken = jwtDecode(token);

    if (!decodedToken.isAdmin) {
return <Navigate to={ROUTES.HOME} replace={true} />
    }
return children;

};

export default AdminGuard;
