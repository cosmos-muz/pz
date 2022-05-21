import { Express, Request, Response, NextFunction } from "express";

export const errorMiddleware = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    httpErrorHandler(err, req, res, next);
  });
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    uncaughtErrorHandler(err, req, res, next);
  });
};

const uncaughtErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("uncaughtErrorHandler called");
  console.log("Path: ", req.path);
  console.error("Error: ", error); // Ideally this would be sent to a logger not console
  res
    .status(500)
    .send(
      "Something unexpexted happened. Our minions are already working to resolve the issue."
    );
};

const httpErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("httpErrorHandler called");
  console.log("Path: ", req.path);
  console.error("Status: ", res.status);
  console.error("Error: ", error); // Ideally this would be sent to a logger not console - e.g. aws cloud watch
  if (error.statusCode) {
    res.status(error.statusCode).send(error.message);
  } else {
    next(error);
  }
};
