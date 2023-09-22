"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getappliedjob = exports.create = void 0;
const jwt = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
const creating = require("../sequelize/models");
const join = require("../sequelize/models");
const bcrypt = require("bcrypt");
dotenv_1.default.config();
const table_appliedJob = creating.appliedjob;
const table_job = join.job;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send("from");
    }
    catch (error) {
        res.status(400).send({ message: "duplicate" });
    }
});
exports.create = create;
const getappliedjob = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.params;
        const displaydata = yield table_appliedJob.findAll({
            where: { email: email },
        });
        if (!displaydata) {
            return res.status(404).json({ message: "User not Found" });
        }
        const appliedjob = yield table_job.findAll({
            where: { job_id: displaydata.job_id },
        });
        res.send(appliedjob);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getappliedjob = getappliedjob;
//# sourceMappingURL=JobController.js.map