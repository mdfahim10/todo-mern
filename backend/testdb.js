import "dotenv/config";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URL);

try {
    await client.connect();
    console.log("MongoDB connected successfully!");
} catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error);
} finally {
    await client.close();
}