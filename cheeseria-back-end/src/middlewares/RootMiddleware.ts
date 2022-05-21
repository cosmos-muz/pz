import { Express } from "express";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
const swaggerDocument = require("../config/swagger.json");

dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

export const rootMiddleware = (app: Express) => {
  app.use(morgan("tiny"));
  app.use(cors({ origin: process.env.APP_URL }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
};
