import { Schema, model, connect, Document } from "mongoose";

export interface ICheese extends Document{
  colour: string;
  imageUrl: string;
}

const cheeseSchema = new Schema<ICheese>({
  colour: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export const CheeseModel = model<ICheese>("Cheese", cheeseSchema);

