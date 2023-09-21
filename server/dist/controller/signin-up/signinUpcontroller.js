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
// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");
const creating = require("../../sequelize/models/signin-up/signinUpmodel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
dotenv.config();
const table = creating.signinUp;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
                var transporter = nodemailer.createTransport({
                    host: process.env.EMAILHOST,
                    port: process.env.EMAILPORT,
                    auth: {
                        user: process.env.EMAILUSER,
                        pass: process.env.EMAILPASSWORD,
                    },
                    secureConnection: false,
                    tls: {
                        rejectUnauthorized: false,
                    },
                });
                var mailOptions = {
                    from: process.env.EMAILUSER,
                    to: req.body.email,
                    subject: "Welcome. Now the real fun begins",
                    html: `
            <!DOCTYPE html>
            <html>
            <body>
            <h3>Hello ${req.body.first_name},</h3>
            <p><strong>Welcome to JMAN Group!</strong></p>
            <p>We would like to welcome you, and please know how happy we are to be with you. Our hearts are filled with delight, for we finally have you with us! We are so glad to have you here with us today.</p>
            <div style="color:#251d64">
            <p>Regards,</p>
            <p><strong>JMAN Group Ltd </strong></p>
            <p>Module 0104 (A), First Floor </p>
            <p>C Block South, Tidel Park </p>
            <p>4, Rajiv Gandhi Salai, Taramani </p>
            <p>Chennai 600 113 </p>
            <p>W:<a href="www.jmangroup.com">www.jmangroup.com </a> </p>
            <img src="cid:unique@kreata.ee"/>
            </div>  
            </body>
            </html>`,
                    attachments: [
                        {
                            filename: "image.png",
                            path: "src\\images\\Jmantitle.png",
                            cid: "unique@kreata.ee", //same cid value as in the html img src
                        },
                    ],
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        console.log("email sent", info.response);
                    }
                });
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
module.exports = { login, register, create };
//# sourceMappingURL=signinUpcontroller.js.map