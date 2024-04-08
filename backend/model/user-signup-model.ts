import mongoose from "mongoose";

import { userSignUpSchema } from "../database/schema/user-signup-schema";

const UserModel = mongoose.model("users", userSignUpSchema);

export { UserModel };