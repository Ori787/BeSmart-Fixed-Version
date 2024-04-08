import { RequestHandler, Request } from "express";

import { auth } from "../services/auth-service";

import { UserModel } from "../model/user-signup-model";


const extractToken = (req: Request) => {
  const authHeader = req.header("Authorization");

  if (
    authHeader &&
    authHeader.length > 7 &&
    authHeader.toLowerCase().startsWith("bearer ")
  ) {
    return authHeader.substring(7);
  }
  console.log("token is missing in Authorization header", 400);
};

const validateToken: RequestHandler = async (req, res, next) => {
  try {
    const token = extractToken(req);

    const { email } = auth.verifyJWT(token);
    const user = await UserModel.findOne({ email });
    if (!user) console.log("User does not exist", 401);
    next();
  } catch (e) {
    next(e);
  }
};

export { validateToken, extractToken};