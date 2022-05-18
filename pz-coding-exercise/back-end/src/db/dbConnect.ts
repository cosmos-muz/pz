// import * as Mongoose from "mongoose";

// let database: Mongoose.Connection;
// export const connect = () => {
//   const uri = `${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}` || "";
//   if (database) {
//     return;
//   }

//   Mongoose.connect(uri, {});
//   database = Mongoose.connection;
//   database.once("open", async () => {
//     console.log("Connected to database");
//   });
//   database.on("error", () => {
//     console.log("Error connecting to database");
//   });
// };
// export const disconnect = () => {
//   if (!database) {
//     return;
//   }
//   Mongoose.disconnect();
// };

import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import Cheese from "./models/Cheese";

export const collections: { games?: mongoDB.Collection } = {}

export async function connectToDatabase () {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}` || "");
          
  await client.connect();
      
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

       console.log(`Successfully connected to database: ${db.databaseName}`);
}
