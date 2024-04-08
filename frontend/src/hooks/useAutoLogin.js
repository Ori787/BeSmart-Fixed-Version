import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { getToken } from "../services/tokenStorage";

const useAutoLogin = () => {
  const dispatch = useDispatch();
  return async () => {
    try {
      const token = getToken();
      if (!token) return;
      const dataFromToken = jwtDecode(token);
      dispatch(authActions.login(dataFromToken));
    } catch (err) {
      console.log("err from auto login", err);
      localStorage.clear();
      sessionStorage.clear();
    }
  };
};

export default useAutoLogin;