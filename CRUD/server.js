import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

const PORT = 9500;
dotenv.config()

app.use('/api/video')
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      throw error;
    });
};
const app = express();
app.listen(PORT, () => {
  console.log(`Server connected on this ${PORT}`);
  connectToDB()
});
