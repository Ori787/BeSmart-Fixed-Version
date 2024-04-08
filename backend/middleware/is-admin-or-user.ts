import { RequestHandler, Request } from "express";

import { auth } from "../services/auth-service";

import { UserModel } from "../model/user-signup-model";

import { extractToken } from "./is-admin";


const isAdminOrUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = extractToken(req);
    const { email } = auth.verifyJWT(token);


    const user = await UserModel.findOne({ email });

    if (!user) console.log("User does not exist", 401);

    if (id == user?._id) return next();

    if (user?.isAdmin) return next();

    res.status(401).json({ message: "Only admin/The id must belong to the user" });
  } catch (e) {
    next(e);
  }
};

export { isAdminOrUser };