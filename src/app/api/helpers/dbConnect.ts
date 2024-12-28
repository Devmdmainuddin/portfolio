/* eslint-disable */
// @ts-nocheck

import mongoose from "mongoose";

// Use a single cached variable to store the connection and promise
let cached = global.mongoose;

const MONGO_URI = process.env.MONGODB_URI || "";

if (!cached) {
  cached = global.mongoose = {conn: null, promise: null};
}

export const dbConnect = async () => {
  if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => mongoose);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = undefined;
    throw e;
  }

  return cached.conn;
};
