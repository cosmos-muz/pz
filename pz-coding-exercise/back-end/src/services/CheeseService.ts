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

  async updateCheese(cheeseInput: Cheese) {
    try {
      const cheeseRepo = new CheeseRepository();
      const cheeseDoc = await cheeseRepo.updateCheese(cheeseInput);
      if (cheeseDoc) {
        return this.toCheeseTO(cheeseDoc);
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteCheese(id: string) {
    try {
      const cheeseRepo = new CheeseRepository();
      const cheeseDoc = await cheeseRepo.deleteCheese(id);
      if (cheeseDoc) {
        return this.toCheeseTO(cheeseDoc);
      }
    } catch (error) {
      throw error;
    }
  }

  async getCheese(id?: string, colour?: string) {
    try {
      const cheeseRepo = new CheeseRepository();
      const result = await cheeseRepo.findCheese(id, colour);
      if (result) {
        return result.map((cheese) => {
          return this.toCheeseTO(cheese);
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getCheeses() {
    try {
      const cheeseRepo = new CheeseRepository();
      const result = await cheeseRepo.findAll();
      if (result) {
        return result.map((cheese) => {
          return this.toCheeseTO(cheese);
        });
      }
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
    cheese.price = cheeseDoc.price;
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
    if (cheese.price && isNaN(cheese.price)) {
      errors.push("price is required");
    }
    return errors;
  }

  validateForUpdate(cheese: Cheese) {
    const errors: string[] = [];
    if (Object.keys(cheese).length <= 1 && cheese.id) {
      errors.push("input is empty");
    }
    if (!cheese.id) {
      errors.push("id is empty");
    }
    if (cheese.price && isNaN(cheese.price)) {
      errors.push("price must be a number");
    }
    return errors;
  }
}
