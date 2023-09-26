import express from "express";
import { json } from "body-parser";
import { router as userroutes } from "./routes/userRoutes";
import { router as jobroutes } from "./routes/jobRoutes";
import dotenv from "dotenv";

const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(userroutes);
app.use(jobroutes);

export { app };
