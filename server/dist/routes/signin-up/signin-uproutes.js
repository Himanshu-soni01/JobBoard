"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { login, register, create, } = require("../../controller/signin-up/signinUpcontroller");
var router = express.Router();
router.post("/login", login);
router.post("/register", register);
router.get(`/email/:email`, create);
exports.default = router;
//# sourceMappingURL=signin-uproutes.js.map