import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { authActions } from "../../store/authSlice";
import { getToken } from "../../services/tokenStorage";


const Logout = () => {

    const dispatch = useDispatch();

const token = getToken();

   const handleLogout = async () => {
        try {
    if (token) {
        const decodedToken = jwtDecode(token);
        dispatch(authActions.logout(decodedToken));
        localStorage.clear();
        sessionStorage.clear();
    }} catch (error) {
        console.error("An error occurred during logout:", error);
        alert ("An error occured");
    }
}
return handleLogout;
};

export default Logout;