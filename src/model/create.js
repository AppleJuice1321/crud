import { Schema, model, models } from "mongoose";

const InfoSchema = new Schema(
  {
    name: String,
    age: String,
  },
  {
    timestamps: true,
  }
);


export default models.Information || model("Information", InfoSchema)