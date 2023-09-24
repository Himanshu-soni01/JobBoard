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
exports.create = exports.register = exports.login = void 0;
const jwt = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
const creating = require("../../sequelize/models");
const bcrypt = require("bcrypt");
dotenv_1.default.config();
const table = creating.signinUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield table.findOne({ where: { email: email } });
    if (user) {
        const password_valid = yield bcrypt.compare(password, user.password);
        if (password_valid) {
            const email = user.email;
            const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
                expiresIn: "1d",
            });
            res.cookie("token", token);
            console.log(token);
            res.status(200).json({ token: token });
        }
        else {
            res.status(201).json({ Error: "Password Incorrect" });
        }
    }
    else {
        res.status(201).json({ Error: "User does not exist" });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
        if (jmanRegex.test(email)) {
            const user = yield table.findOne({ where: { email: email } });
            if (!user) {
                const salt = yield bcrypt.genSalt(10);
                var usr = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    dob: req.body.dob,
                    password: yield bcrypt.hash(req.body.password, salt),
                };
                const created_user = yield table.create(usr);
                res.status(201).json(created_user);
            }
            else {
                res.status(200).send("User already exists");
            }
        }
        else {
            res.status(404).send("Email is not valid");
        }
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.register = register;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const gettingdata = yield table.findOne({
            where: {
                email: email,
            },
        });
        res.send(gettingdata);
    }
    catch (error) {
        res.status(400).send({ message: "duplicate" });
    }
});
exports.create = create;
module.exports = { login: exports.login, register: exports.register, create: exports.create };
//# sourceMappingURL=signinUpcontroller.js.map