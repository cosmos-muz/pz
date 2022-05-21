import { ICheese } from "../models/Cheese";
import { Cheese } from "../domains/Cheese";
import CheeseRepository from "../repositories/CheeseRepository";

export default class {
  cheeseRepo = new CheeseRepository();
  async saveCheese(cheeseInput: Cheese) {
    try {
      const cheeseDoc = await this.cheeseRepo.saveCheese(cheeseInput);
      return this.toCheeseTO(cheeseDoc);
    } catch (error) {
      throw error;
    }
  }

  async updateCheese(cheeseInput: Cheese) {
    try {
      const cheeseDoc = await this.cheeseRepo.updateCheese(cheeseInput);
      if (cheeseDoc) {
        return this.toCheeseTO(cheeseDoc);
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteCheese(id: string) {
    try {
      const cheeseDoc = await this.cheeseRepo.deleteCheese(id);
      if (cheeseDoc) {
        return this.toCheeseTO(cheeseDoc);
      }
    } catch (error) {
      throw error;
    }
  }

  async getCheese(id?: string, colour?: string) {
    try {
      const result = await this.cheeseRepo.findCheese(id, colour);
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
      const result = await this.cheeseRepo.findAll();
      if (result) {
        return result.map((cheese) => {
          return this.toCheeseTO(cheese);
        });
      }
    } catch (error) {
      throw error;
    }
  }

  // TO is a notion for transfer object
  private toCheeseTO(cheeseDoc: ICheese) {
    const cheese = new Cheese();
    cheese.colour = cheeseDoc.colour;
    cheese.imageUrl = cheeseDoc.imageUrl;
    cheese.id = cheeseDoc._id;
    cheese.price = cheeseDoc.price;
    cheese.name = cheeseDoc.name;
    return cheese;
  }

  validateForSave(cheese: Cheese) {
    const errors: string[] = [];
    if (!cheese.name) {
      errors.push("name is required");
    }
    if (!cheese.colour) {
      errors.push("colour is required");
    }
    if (!cheese.imageUrl) {
      errors.push("an image url is required");
    }
    if (cheese.price && isNaN(cheese.price)) {
      errors.push("price is required");
    }
    if(cheese.price && cheese.price <= 0){
      errors.push("price must be a non-negative number");
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
    if(cheese.price && cheese.price <= 0){
      errors.push("price must be a non-negative number");
    }
    return errors;
  }
}
