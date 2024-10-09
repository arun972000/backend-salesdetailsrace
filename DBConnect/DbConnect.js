import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://raceautoindia:${process.env.DB_PASSWORD}@salesdetails.q2eaq.mongodb.net/?retryWrites=true&w=majority&appName=Salesdetails`,
      {}
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
