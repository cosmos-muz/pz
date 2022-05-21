import { Schema, model, Document, Mongoose } from "mongoose";

export interface ICheese extends Document {
  name: string;
  colour: string;
  imageUrl: string;
  price: number;
}

const cheeseSchema = new Schema<ICheese>(
  {
    name: {type: String, required: true},
    colour: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
  }
);

export const CheeseModel = model<ICheese>('cheeses', cheeseSchema);
