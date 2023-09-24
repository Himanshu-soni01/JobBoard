"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const JobController_1 = require("../controller/JobController");
const authentication_1 = require("../middleware/authentication");
var router = express_1.default.Router();
router.get("/", authentication_1.verifyuser, JobController_1.create);
router.get("/getjob/:email", JobController_1.getappliedjob);
exports.default = router;
//# sourceMappingURL=jobroutes.js.map