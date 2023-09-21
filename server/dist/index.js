"use strict";
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mysql2 = require("mysql2");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const signinUp = require("./routes/signin-up/signin-uproutes");
const job = require("./routes/job/jobroutes");
const appliedjob = require("./routes/appliedJob/appliedjobroutes");
dotenv.config();
const app = express();
const corsOptions = {
    origin: process.env.AUTH_URL,
    credentials: true,
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/api/signinUp", signinUp);
app.use("api/job", job);
app.use("api/appliedjob", appliedjob);
const port = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((req, res) => {
    res.status(404).send("Route is not found.");
});
const db = require("./sequelize/models");
db.sequelize
    .sync()
    .then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
module.exports = app;
//# sourceMappingURL=index.js.map