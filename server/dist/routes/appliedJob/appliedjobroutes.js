"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const {}
const JobController_1 = require("../../controller/JobController");
var router = express_1.default.Router();
router.use(`/getappliedjob/:email`, JobController_1.getappliedjob);
exports.default = router;
//# sourceMappingURL=appliedjobroutes.js.map