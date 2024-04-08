import { Iname, Iaddress, Iuser, Iimage } from "../@types/user-signup";

import Joi from "joi";

const schema = Joi.object<Iuser>({

    name: Joi.object<Iname>({
        first: Joi.string().min(2).max(50).required(),
        middle: Joi.string().min(0).max(50).allow(""),
        last: Joi.string().min(2).max(50).required(),
    }),

address: Joi.object<Iaddress>({
    city: Joi.string().min(2).max(100).required(),
    state: Joi.string().min(0).max(80).allow(""),
    street: Joi.string().min(2).max(100).required(),
    zip: Joi.number().min(0).max(100).allow(""),
    houseNumber: Joi.number().min(1).max(60).required(),
    country: Joi.string().min(2).max(100).required(),
}),

image: Joi.object<Iimage>({
    url: Joi.string().min(0).max(3000).required(),
    alt: Joi.string().min(0).max(500).allow(""),
}),

isBusiness: Joi.boolean().required(),

isAdmin: Joi.boolean().allow(),

email: Joi.string().min(5).max(200).required(),

password: Joi.string().min(2).max(40).required(),

PhoneNumber: Joi.string().min(5).max(55).required(),

});

export {schema as userJoi};