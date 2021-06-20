import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

export const mongoDBConnection = async () =>
    mongodb.connect(
        process.env.MONGO_DB as string,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        async (error, client) => {
            if (error) throw error;
            console.log("DB Connected!!");
            const database = client.db();
            const collection = database.collection("Users");

            let dataFromMongo = await collection.find().toArray();
            console.log(dataFromMongo);
        }
    );