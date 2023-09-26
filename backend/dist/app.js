"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const jobRoutes_1 = require("./routes/jobRoutes");
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.use(cors());
app.use(userRoutes_1.router);
app.use(jobRoutes_1.router);
