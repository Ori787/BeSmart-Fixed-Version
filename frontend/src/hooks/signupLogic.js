import { useState } from "react";

const useSignupLogic = () => {

    const [signupValue, setSignupValue] = useState({
        first: "",
        middle: "",
        last: "",
        PhoneNumber: "",
        state: "",
        email: "",
        password: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        isBusiness: false,
        isAdmin: false,
    });

    const handleInputChange = (e) => {
setSignupValue((currentState) => ({
...currentState,
[e.target.id] : e.target.value
}));
    };

    return { signupValue, handleInputChange };

};

export default useSignupLogic;