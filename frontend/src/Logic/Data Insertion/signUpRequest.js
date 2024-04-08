import axios from "axios";
import normalizeSignup from "../../normalization/normalizeSignup";


const SignupRequest = async (signupValue) => {

try {
    const request = normalizeSignup(signupValue);
    const { data } = await axios.post(`/users`, request)
    console.log("data", data)
} catch (err) {
console.log("An error occured", err)
};
};

export default SignupRequest;