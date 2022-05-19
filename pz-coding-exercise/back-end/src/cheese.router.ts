import express, { NextFunction, Request, Response } from "express";
import { Cheese } from "./domain/Cheese";
import CheeseService from "./services/CheeseService";
const cheeseRouter = express.Router();
const cheeseService = new CheeseService();
import { StatusCodes } from "http-status-codes";

const getPostObject = (req: Request) => {
  const cheese = new Cheese();
  const { body = {} } = req;

  cheese.colour = body.colour || "";
  cheese.imageUrl = body.imageUrl || "";
  cheese.price = Number(body.price);
  return cheese;
};

const getPatchObject = (req: Request) => {
  const cheese = new Cheese();
  const { body = {}, params } = req;
  const { colour, price, imageUrl } = body;
  if (colour) {
    cheese.colour = colour;
  }
  if (imageUrl) {
    cheese.imageUrl = imageUrl;
  }
  if (price) {
    cheese.price = price;
  }
  if (params.id) {
    cheese.id = params.id;
  }
  return cheese;
};

cheeseRouter.post(
  "/addCheese",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const cheese = getPostObject(req);
      const errors = cheeseService.validateForSave(cheese);
      if (errors && errors.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST).send({ errors });
      } else {
        const data = await cheeseService.saveCheese(cheese);
        return res.status(StatusCodes.OK).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);
cheeseRouter.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      const cheese = getPatchObject(req);
      const errors = cheeseService.validateForUpdate(cheese);
      if (errors && errors.length > 0) {
        return res.status(StatusCodes.BAD_REQUEST).send({ errors });
      } else {
        const data = await cheeseService.updateCheese(cheese);
        return res.status(StatusCodes.OK).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);
cheeseRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      if (params && !params.id) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .send({ error: "id is required" });
      } else {
        const data = await cheeseService.deleteCheese(params.id);
        return res.status(StatusCodes.OK).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);

cheeseRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await cheeseService.getCheeses();
      return res.status(StatusCodes.OK).send({ data });
    } catch (error) {
      next(error);
    }
  }
);

cheeseRouter.get(
  "/colour/:colour",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;

      const data = await cheeseService.getCheese(undefined, params.colour);
      return res.status(StatusCodes.OK).send({ data });
    } catch (error) {
      next(error);
    }
  }
);

cheeseRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;

      const data = await cheeseService.getCheese(params.id);
      return res.status(StatusCodes.OK).send({ data });
    } catch (error) {
      next(error);
    }
  }
);

export default cheeseRouter;
