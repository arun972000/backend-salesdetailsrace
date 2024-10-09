import mongoose from "mongoose";
const { Schema } = mongoose;

const subscriberSchema = new Schema({
  id: String,
  name: String,
  email: String,
  contact: String,
  category: String,
  organization: String,
  designation: String,
});

export const subscriberModel = mongoose.model("subscriberlists", subscriberSchema);
