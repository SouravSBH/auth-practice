import { MongoClient } from "mongodb";

export default async function connectDB() {
    const client = await MongoClient.connect("mongodb+srv://souravshellbeehaken:MongoTest123@cluster0.ifhx9ab.mongodb.net/?retryWrites=true&w=majority")
    // console.log(client)
    return client;
}