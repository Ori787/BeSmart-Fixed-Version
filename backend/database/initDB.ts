import { UserModel } from "../model/user-signup-model";
import { users } from "./users";


const initDB = async () => {

  const usersCount = await UserModel.countDocuments();
  if (usersCount != 0) return;

  for (let user of users) {
    try {
    const saved = await new UserModel(user).save();
console.log("Added user: ", saved);
    } catch (error) {
        console.error("Error adding user: ", error);
    }
  }
};

export { initDB };