import dotenv from 'dotenv';
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config();

const uri = process.env.MONGO_DATABASE_LINK;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let isConnected = false; 
let collection: any; 

async function connectDB() {
    try {
        if (isConnected && collection) {
            console.log("Reusing existing MongoDB connection.");
            return collection;
        }

        console.log("Establishing new MongoDB connection...");
        await client.connect();
        console.log("Successfully connected to MongoDB!");

        const dbName = "country_state_city";
        const collectionName = "country_province_cities";

        const database = client.db(dbName);
        collection = database.collection(collectionName);
        isConnected = true; 
        return collection;
    } catch (error) {
        console.error("Error connecting to MongoDB or accessing the collection:", error);
        isConnected = false; 
        throw error;
    }
}

export default connectDB;