"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { create, getprojectdetails, } = require("../../controller/projectAllocation/projectAllocationcontroller");
const { verifyuser } = require("../../middleware/authentication");
var router = express_1.default.Router();
router.get("/", verifyuser, create);
router.use("/getproject/:email", getprojectdetails);
module.exports = router;
//# sourceMappingURL=jobroutes.js.map