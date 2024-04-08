import { Iuser } from "../@types/user-signup";

import { Request, RequestHandler } from "express";

import { UserModel } from "../model/user-signup-model";



const isUser: RequestHandler = async (req, res, next) => {
    const { _id } = req.params;
    const user = await UserModel.findById({ _id });
if (user) {
    return next()
}
    console.log("an error has occured");
};

export { isUser as userAuth };