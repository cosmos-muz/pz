import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cheeseRouter from "./src/cheese.router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

import { connectToDatabase } from "./src/db/dbConnect";

connectToDatabase()
  .then(() => {
    app.use("/cheese", cheeseRouter);
    app.get("/health", (req: Request, res: Response) => {
      res.status(200).send("Healthy");
    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });

// app.use('/cheeses', cheeseApi);
// app.get('/health', (req: Request, res: Response) => {
//   res.send('Healthy');
// });

// app.listen(port, async () => {
//   await connectToDatabase();
//   console.log(`Server is running at https://localhost:${port}`);
// });
