import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cheeseRouter from "./src/cheese.router";
const morgan = require('morgan');
import {
	StatusCodes,
	getReasonPhrase,
} from 'http-status-codes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');

import connectDb from "./src/db/dbConnect";
import swaggerUI from "swagger-ui-express";
const swaggerDocument = require("./swagger.json");

connectDb()
  .then(() => {
    app.use(morgan('tiny'));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use("/cheeses", cheeseRouter);
    app.get("/health", (req: Request, res: Response) => {
      console.log("health")
      res.status(200).send("Healthy");
    });
    app.use((err: Error, req, res, next) => {
      console.error(err.stack)
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR));
    })

    app.use(
      '/api-docs',
      swaggerUI.serve, 
      swaggerUI.setup(swaggerDocument)
    );

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
