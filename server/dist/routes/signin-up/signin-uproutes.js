"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { login, register, create } = require('../../controller/signin-up/signinUpcontroller');
var router = express_1.default.Router();
router.post('/login', login);
router.post('/register', register);
router.get(`/email/:email`, create);
module.exports = router;
//# sourceMappingURL=signin-uproutes.js.map