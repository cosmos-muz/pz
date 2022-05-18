import { ICheese } from "../db/models/Cheese";
import { Cheese } from "../domain/Cheese";
import CheeseRepository from "../repositories/CheeseRepository";
import { Document } from "mongoose";

export default class {
  async saveCheese(cheeseInput: Cheese) {
    try {
      const cheeseRepo = new CheeseRepository();
      const cheeseDoc = await cheeseRepo.saveCheese(cheeseInput);
      return this.toCheeseTO(cheeseDoc);
    } catch (error) {
      throw error;
    }
  }

  // TO is notion for transfer object
  toCheeseTO(cheeseDoc: ICheese) {
    const cheese = new Cheese();
    cheese.colour = cheeseDoc.colour;
    cheese.imageUrl = cheeseDoc.imageUrl;
    cheese.id = cheeseDoc._id;
    return cheese;
  }

  validateForSave(cheese: Cheese) {
    const errors: string[] = [];
    if (!cheese.colour) {
      errors.push("colour is required");
    }
    if (!cheese.imageUrl) {
      errors.push("an image url is required");
    }
    return errors;
  }
}
