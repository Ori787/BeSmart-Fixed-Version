import mongoose from "mongoose";

import { initDB } from "./initDB";



const connect = async () => {
  try {
   const connectionString = process.env.DB_CONNECTION_STRING;

    if (!connectionString) {
 console.error("something went wrong");
      return;
    }


    await mongoose.connect(connectionString)

    

    console.log("Database Connected");

    await initDB();

  } catch (err) {
console.error("Error Connecting to database", err);
  }
};
  
export { connect };