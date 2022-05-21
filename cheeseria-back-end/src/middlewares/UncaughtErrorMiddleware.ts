import { NextFunction, Request, Response } from "express";

export const uncaughtErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("uncaughtErrorHandler called");
  console.log("Path: ", req.path);
  console.error("Error: ", error); // Ideally this would be sent to a logger not console
  res
    .status(500)
    .send(
      "Something unexpexted happed our minions are already working to resolve the issue."
    );
};
