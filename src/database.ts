import mongoose from 'mongoose'


export class DatabaseManager {

  static async createDatabaseConnection(): Promise<any> {
    const mongo_url = 'mongodb+srv://admin:qweRestart987@cluster0.podem.mongodb.net/mainbase?retryWrites=true&w=majority'

    await mongoose.connect(mongo_url);

  }
}