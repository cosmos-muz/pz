import express, { Request, Response } from "express";
import { Cheese } from "./domain/Cheese";
import CheeseService from "./services/CheeseService";
const cheeseRouter = express.Router();

const getCheese = async (req: Request, res: Response) => {
  res.send({ cheese: "1", colour: "blue", imgUrl: "1234" });
};
// const saveCheese = async (req: Request, res: Response) => {
//   const { body } = req;
//   const cheese = getObject(req);
//   const cheeseService = new CheeseService();
//   const errors = cheeseService.validateForSave(cheese);
//   if (errors && errors.length > 0) {
//     res.status(400).send("Input request is invalid");
//   } else {
//     const data = await cheeseService.saveCheese(cheese);
//     res.status(200).send({ data });
//   }
//   res.send({ cheese: "1", colour: "blue", imgUrl: "1234" });
// };
const updateCheese = async (req: Request, res: Response) => {
  res.send({ cheese: "1", colour: "blue", imgUrl: "1234" });
};
const deleteCheese = async (req: Request, res: Response) => {
  res.send({ cheese: "1", colour: "blue", imgUrl: "1234" });
};

const getObject = (req: Request) => {
  const cheese = new Cheese();
  const { body } = req;
  cheese.colour = body.color || "";
  cheese.imageUrl = body.imageUrl || "";
  return cheese;
};

cheeseRouter.get("/", getCheese);

cheeseRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const cheese = getObject(req);
    const cheeseService = new CheeseService();
    const errors = cheeseService.validateForSave(cheese);
    if (errors && errors.length > 0) {
      res.status(400).send("Input request is invalid");
    } else {
      const data = await cheeseService.saveCheese(cheese);
      res.status(200).send({ data });
    }
   
  } catch (error) {
    res.status(500).send({error});
  }
});
cheeseRouter.patch("/", updateCheese);
cheeseRouter.delete("/", deleteCheese);

export default cheeseRouter;
