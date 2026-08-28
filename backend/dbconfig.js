import "dotenv/config";
import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;

const dbName = "mern-projects";
export const collectionName = "todo";

const client = new MongoClient(url);

export const connection = async () => {
    const connect = await client.connect();

    return await connect.db(dbName);
};