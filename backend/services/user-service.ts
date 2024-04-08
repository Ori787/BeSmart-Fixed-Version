import { UserModel } from "../model/user-signup-model"

const validateUser = async (email: String, password: String) => {
    const user = await UserModel.findOne({ email });
};

export {validateUser};