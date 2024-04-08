import axios from "axios";
import { useState } from 'react';
import { SigninSchema } from "../../Validation/SigninJoi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice";
import { jwtDecode } from "jwt-decode";
import ROUTES from "../../Routes/routesModel";
import { storeToken } from "../../services/tokenStorage";
import useAutoLogin from "../../hooks/useAutoLogin";


const LoginLogic = () => {

    const autoLogin = useAutoLogin();

    const dispatch = useDispatch();

    const navigate = useNavigate();


const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
});

const [rememberMe, setRememberMe] = useState(false);

const HandleInputChange = (e) => {

setLoginValue((currentState) => ({
...currentState, 
[e.target.id] : e.target.value
}));
};

const handleRememberMe = (e) => {
    setRememberMe(e.target.checked ? true : false)
};

const request = loginValue;


const HandleLoginClick = async (e) => {
    e.preventDefault();
    try {
        const validation = SigninSchema.validate(loginValue);
        if (validation.error) {
            console.log("Validation Error:", validation.error);
        }
        
       const { data } = await axios.post(`/users/login`, request);


       if (data && data.token) {
const dataFromToken = jwtDecode(data.token);
dispatch(authActions.login(dataFromToken));
storeToken(data.token, rememberMe)
navigate(ROUTES.HOME)
if (rememberMe) {
autoLogin(true);
}
}

    } catch (err) {
        console.log("Error", err.response.data);
alert("Invalid password or email. please try again.")
    }
};




return { loginValue, HandleInputChange, HandleLoginClick, handleRememberMe, rememberMe };

};


export default LoginLogic;
