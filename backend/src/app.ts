// import express, {
//   Request,
//   Response,
//   NextFunction,
//   Application,
//   ErrorRequestHandler,
// } from "express";
// import { Server } from "http";
// import createHttpError from "http-errors";
// import { config } from "dotenv";

// config();

// const app: Application = express();

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.send("Hello From ts app");
// });

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(new createHttpError.NotFound());
// });

// const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     status: err.status || 500,
//     message: err.message,
//   });
// };

// app.use(errorHandler);

// const PORT: Number = Number(process.env.PORT) || 3000;

// const server: Server = app.listen(PORT, () =>
//   console.log(`Server is runnung on ${PORT}`)
// );

import express from "express";
import { json } from "body-parser";
import { router } from "./routes/userRoutes";
import dotenv from "dotenv";

const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

export { app };
