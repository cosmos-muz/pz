import express, { NextFunction, Request, Response } from "express";
import { Cheese } from "./domains/Cheese";
import CheeseService from "./services/CheeseService";
const cheeseRouter = express.Router();
const cheeseService = new CheeseService();
const createError = require('http-errors');
// We can use class validator  https://www.npmjs.com/package/class-validator

const getPostObject = (req: Request) => {
  const cheese = new Cheese();
  const { body = {} } = req;

  cheese.name = body.name || "";
  cheese.colour = body.colour || "";
  cheese.imageUrl = body.imageUrl || "";
  cheese.price = Number(body.price);
  return cheese;
};

const getPatchObject = (req: Request) => {
  const cheese = new Cheese();
  const { body = {}, params } = req;
  const { colour, price, imageUrl, name } = body;
  if (colour) {
    cheese.colour = colour;
  }
  if (name) {
    cheese.name = name;
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

/**
 * POST request
 */
cheeseRouter.post(
  "/addCheese",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const cheese = getPostObject(req);
      const errors = cheeseService.validateForSave(cheese);
      if (errors && errors.length > 0) {
       throw createError(400, errors.join('\n'));
      } else {
        const data = await cheeseService.saveCheese(cheese);
        return res.status(200).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * PATCH request
 */
cheeseRouter.patch(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      const cheese = getPatchObject(req);
      const errors = cheeseService.validateForUpdate(cheese);
      if (errors && errors.length > 0) {
        throw createError(400, errors.join('\n'));
      } else {
        const data = await cheeseService.updateCheese(cheese);
        return res.status(200).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);

/**
 * DELETE request
 */
cheeseRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { params } = req;
      if (params && !params.id) {
        throw createError(400, 'id is required');
      } else {
        const data = await cheeseService.deleteCheese(params.id);
        return res.status(200).send({ data });
      }
    } catch (error) {
      next(error);
    }
  }
);


/**
 * GET request
 */
cheeseRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await cheeseService.getCheeses();
      return res.status(200).send({ data });
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
      return res.status(200).send({ data });
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
      return res.status(200).send({ data });
    } catch (error) {
      next(error);
    }
  }
);

export default cheeseRouter;
