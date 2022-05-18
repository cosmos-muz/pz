import { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface ICheese {
  colour: string;
  imageUrl: string;
}

// 2. Create a Schema corresponding to the document interface.
const cheeseSchema = new Schema<ICheese>({
  colour: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

// 3. Create a Model.
const Cheese = model<ICheese>("Cheese", cheeseSchema);


async function run() {
  try {
    // 4. Connect to MongoDB
    //await connect("mongodb://localhost:27017/test");

    const cheese = new Cheese({
      colour: "Blue",
      imageUrl: "https://i.imgur.com/dM7Thhn.png",
    });
    await cheese.save();

    console.log(cheese.colour); // 'bill@initech.com'
  } catch (error) {
    console.log(error)
  }
}
