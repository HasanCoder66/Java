// Import all dependencies ===>
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import videoRouter from "./routes/videoRoute.js";
import authRouter from "./routes/authRoute.js";

// initiallize app ===>
const app = express();


// Port NO ===>
const PORT = 9500;


// initiallize dotenv  ===>
dotenv.config()



// MiddleWares ===>
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/video', videoRouter)



// Backend Connect function ===>
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



// Server listening ===>
app.listen(PORT, () => {
  console.log(`Server connected on this ${PORT}`);


//   call Function in server listening 
  connectToDB()
});
