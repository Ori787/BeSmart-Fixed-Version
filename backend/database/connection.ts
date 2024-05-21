import mongoose from "mongoose";

import { initDB } from "./initDB";

const connect = async () => {
  try {
    //a little note, the integration with dotenv has a temporary problem"//
    const connectionString = "mongodb://localhost:27017/nodeprojectdev";

    if (!connectionString) {
      console.error("something went wrong");
      return;
    }

    await mongoose.connect(connectionString);

    console.log("Database Connected");

    await initDB();
  } catch (err) {
    console.error("Error Connecting to database", err);
  }
};

export { connect };
