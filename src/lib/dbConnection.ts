import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI as string);

        connection.isConnected = db.connections[0].readyState

        console.log("Database connection successfull");
    } catch (error: any) {
        console.log("Database connection failed : ", error);
    }
}

export default dbConnect;