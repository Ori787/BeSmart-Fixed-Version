import { schemaValidation } from "./validate-schema";

import { userJoi } from "../../joi/user-joi";

import { loginJoi } from "../../joi/login";


const validateSignUp = schemaValidation(userJoi);

const validateLogin = schemaValidation(loginJoi);



export { validateSignUp, validateLogin } ;