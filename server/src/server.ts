const express = require("express");
const cors = require("cors");
const http = require('http');
const dotenv = require("dotenv");
const mysql2 = require("mysql2");
// const routes = require('./routes/signin-uproutes')

const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const job = require("./routes/job/jobroutes");
const signinUp = require("./routes/signin-up/signin-uproutes");
const appliedjob = require("./routes/appliedJob/appliedjobroutes");

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
app.use("/signinUp", signinUp);
app.use("/job", job);
app.use("/appliedjob", appliedjob);

const port = process.env.PORT;

// app.use((req: any, res: any) => {
//   res.status(404).send("Route is not found.");
// });

const db = require("./sequelize/models");
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

export default app;
