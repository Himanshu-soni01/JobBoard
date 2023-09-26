"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    async signup(req, res) {
        try {
            const { email } = req.body;
            const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
            if (jmanRegex.test(email)) {
                const user = await user_1.User.findOne({ where: { email: email } });
                if (!user) {
                    var usr = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        dob: req.body.dob,
                        password: await bcrypt_1.default.hash(req.body.password, 10),
                    };
                    const created_user = await user_1.User.create(usr);
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
    }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await user_1.User.findOne({
                where: { email },
            });
            if (!user) {
                res
                    .status(401)
                    .json({ error: "Authentication failed. User not found." });
                return;
            }
            const passwordMatch = await bcrypt_1.default.compare(password, user.password);
            if (passwordMatch) {
                // const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
                //   expiresIn: "1d",
                // });
                // res.cookie("token", token);
                // console.log(token);
                // res.status(200).json({ token: token });
                res.status(200).json({ message: "Login Success" });
                console.log("Respones Send");
            }
            else {
                res.status(201).json({ Error: "Password Incorrect" });
            }
        }
        catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.UserController = UserController;
