import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { cheeseRouter } from "./src/cheeseRouter";
import { rootMiddleware } from "./src/middlewares/rootMiddleware";
import { errorMiddleware } from "./src/middlewares/errorMiddleware";

dotenv.config();

export class App {
  private app: Express;
  private port;
  private api_root = "/cheeseria/api";
  constructor(port: string) {
    this.app = express();
    this.port = port;
  }

  public start() {
    rootMiddleware(this.app);
    this.app.use(`${this.api_root}/v1/cheeses`, cheeseRouter);
    this.app.get(`${this.api_root}/health`, (req: Request, res: Response) => {
      res.status(200).send("Healthy");
    });
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`);
    });
    this.app.use("/", (req, res, next) => {
      res.send("");
    });
    errorMiddleware(this.app);
  }
}
