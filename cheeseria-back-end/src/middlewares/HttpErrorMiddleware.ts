
import { NextFunction, Request, Response } from "express";

export const httpErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log("httpErrorHandler called");
  console.log("Path: ", req.path);
  console.error("Status: ", res.status);
  console.error("Error: ", error); // Ideally this would be sent to a logger not console
  if (error.statusCode) {
    res.status(error.statusCode).send(error.message);
  } else {
    next(error);
  }
};
