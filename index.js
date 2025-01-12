import dotenv from "dotenv";
import express, { json } from "express";
import { connectToDatabase } from "./DBConnect/DbConnect.js";
import { subscriberModel } from "./utils/model.js";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";

dotenv.config();

await connectToDatabase();

const app = express();


app.use(
  cors({
    origin: "*",
  })
);

app.use(json());



app.get("/", async (req, res) => {
  res.send("It is working");
});

app.post("/upload", async (req, res) => {
  try {
    const payload = req.body;

    const data = {
      name: payload.name,
      email: payload.email,
      contact: payload.isdCode + " " + payload.mobileNumber,
      category: payload.category,
      organization: payload.organization,
      designation: payload.designation,
    };
    const newSubscriber = new subscriberModel({ ...data, id: uuidv4() });
    await newSubscriber.save();
    res.status(201).send("subscriber added");
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});


app.get('/api/sub-lists',async(req,res)=>{
  try{
    const users = await subscriberModel.find({})

    res.status(200).json(users)
  }catch(err){
    console.log(err)
    res.status(500).send(err.message)
  }
})


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
