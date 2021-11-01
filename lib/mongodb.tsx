/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-mutable-exports */
import { MongoClient } from "mongodb";

const uri: any = process.env.MONGODB;
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// console.log("MONGODB is", process.env.MONGODB);
if (!process.env.MONGODB) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
// In production mode, it's best to not use a global variable.
const client = new MongoClient(uri, options);
const clientPromise = client.connect();
// }

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
