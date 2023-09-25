"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
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
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(cors());
app.use(userRoutes_1.router);
