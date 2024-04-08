import Joi from "joi";

import { Ilogin } from "../@types/user-signup";

const loginJoi = Joi.object<Ilogin>({
email: Joi.string().min(5).max(60).required(),
password: Joi.string().min(5).max(30).required(), 
});

export { loginJoi };