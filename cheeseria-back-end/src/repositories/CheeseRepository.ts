import { ObjectId } from "mongodb";
import { CheeseModel } from "../models/Cheese";
import { Cheese } from "../domains/Cheese";

export default class {
  async saveCheese(cheeseInput: Cheese) {
    try {
      return await CheeseModel.create(cheeseInput);
    } catch (error) {
      throw error;
    }
  }

  async updateCheese(cheeseInput: Cheese) {
    try {
      const { id } = cheeseInput;
      delete cheeseInput.id;
      return await CheeseModel.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: cheeseInput },
        { returnDocument: "after" }
      ).lean();
    } catch (error) {
      throw error;
    }
  }
  async deleteCheese(id: string) {
    try {
      return await CheeseModel.findOneAndDelete(
        { _id: new ObjectId(id) },
        { returnDocument: "after" }
      ).lean();
    } catch (error) {
      throw error;
    }
  }

  async findCheese(id?: string, colour?: string) {
    let query: any = {};
    if(colour){
      query.colour = colour;
    }
    if(id){
      query._id = new ObjectId(id);
    }

    try {
      return await CheeseModel.find({ ...query }).lean();
    } catch (error) {
      throw error;
    }
  }
  // TODO: Do pagination; take page size and page from api end points
  async findAll() {
    try {
      return await CheeseModel.find({}).limit(5).lean();
    } catch (error) {
      throw error;
    }
  }
}
