import Joi from "joi";


 const SigninSchema = Joi.object ({
    email: Joi.string().min(1).max(350).required(),
    password: Joi.string().min(1).max(800).required(),
});

export {SigninSchema}; 
