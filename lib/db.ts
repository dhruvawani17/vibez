import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if(!MONGODB_URL) {
    throw new Error("Please define mongodb url in env file");

}
let cached = global.mongoose;
