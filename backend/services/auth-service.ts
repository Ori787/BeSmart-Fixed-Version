import { Ijwtpayload } from "../@types/user-signup";

import jwt from "jsonwebtoken";

import bcrypt from 'bcrypt';

const secret = "zfiaIUSf23mSZ5skW1qJ/0mfCgLrtT2+jSX7ahsfnu!%!131A0%&Yl";


const authService = {
generateJWT: (payload: Ijwtpayload) => {
    return jwt.sign(payload, secret, {expiresIn: '24h'});
  },

hashPassword: async (userPassword: string) => {
    try {
const hashedPassword = await bcrypt.hash(userPassword, 12);
return hashedPassword;
  } catch (err) {
    console.error("an error occured while trying to hash the password", err);
    throw err;
  }
  },

verifyJWT: (token: any) => {
  

  const payload = jwt.verify(token, secret);

  return payload as Ijwtpayload;
},
};
 


export { authService as auth };