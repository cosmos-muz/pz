import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cheeseRouter from "./src/cheese.router";
import swaggerUI from "swagger-ui-express";
import { httpErrorHandler } from "./src/middlewares/HttpErrorMiddleware";
import { uncaughtErrorHandler } from "./src/middlewares/UncaughtErrorMiddleware";
const swaggerDocument = require("./swagger.json");

dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

export class App {
  private app: Express;
  private port;
  constructor(port: string) {
    this.app = express();
    this.port = port;
  }

  public start() {
    this.app.use(morgan("tiny"));
    this.app.use(cors());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      next();
    });

    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use("/cheeses", cheeseRouter);
    this.app.get("/health", (req: Request, res: Response) => {
      res.status(200).send("Healthy");
    });  
    this.app.use(
      "/api-docs",
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocument)
    );
    this.app.listen(this.port, () => {
      console.log(`Server started at http://localhost:${this.port}`);
    });
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        httpErrorHandler(err, req, res, next )
      }
    );
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        uncaughtErrorHandler(err, req, res, next )
      }
    );
  }
}
