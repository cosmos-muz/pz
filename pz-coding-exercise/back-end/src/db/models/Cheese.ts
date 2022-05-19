import { Schema, model, Document, Mongoose } from "mongoose";

export interface ICheese extends Document {
  colour: string;
  imageUrl: string;
  price: number;
}

const cheeseSchema = new Schema<ICheese>(
  {
    colour: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
  }
);

export const CheeseModel = model<ICheese>('cheeses', cheeseSchema);
