import mongoose from 'mongoose'

export async function connectToCluster(uri) {
  
    try {
      const conn = await mongoose.connect(uri)

      console.log("Successfully connected to MongoDB");
  
      return conn;
    } catch (error) {
      console.error("Connection to MongoDB failed!", error);
      process.exit();
    }
  }