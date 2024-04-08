import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES from "../Routes/routesModel";

const AuthGuard = ({ children }) => {
    const loggedIn = useSelector((bigPie) => bigPie.authSlice.loggedIn);
    if (!loggedIn) {
     return <Navigate to={ROUTES.LOGIN} replace={true} />
    }
return children;
};

export default AuthGuard;