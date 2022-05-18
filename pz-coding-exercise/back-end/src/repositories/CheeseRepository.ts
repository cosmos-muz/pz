import { CheeseModel } from "../db/models/Cheese";
import { Cheese } from "../domain/Cheese";

export default class {
  async saveCheese(cheeseInput: Cheese) {
    try {
      const cheese = new CheeseModel({
        colour: cheeseInput.colour,
        imageUrl: cheeseInput.imageUrl,
      });
      return await cheese.save();

    } catch (error) {
      throw error;
    }
  }
}
