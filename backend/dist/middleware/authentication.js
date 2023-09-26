"use strict";
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();
const jwt = require("jsonwebtoken");
const verifyuser = async (req, res, next) => {
    const token = req.header("Authorization");
    console.log(token);
    if (!token) {
        return res.json({ Error: "you are not authenticated" });
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                next();
            }
            else {
                req.email = decoded.email;
                // console.log(req.email)
                next();
            }
        });
    }
};
module.exports = { verifyuser };
