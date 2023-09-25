const express = require("express");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const mysql2 = require("mysql2");

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

import jobroutes from "./routes/jobroutes";
const signinUproute = require("./routes/signin-uproutes");
const appliedjobroute = require("./routes/appliedjobroutes");

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.AUTH_URL,
  credentials: true,
};

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/signinUp", signinUproute);
app.use("/job", jobroutes);
app.use("/appliedjob", appliedjobroute);

const port = process.env.PORT;

// app.use((req: any, res: any) => {
//   res.status(404).send("Route is not found.");
// });

const dbs = require("./sequelize/models");
dbs.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

module.exports = app;
