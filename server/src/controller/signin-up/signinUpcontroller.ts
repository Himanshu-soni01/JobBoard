const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
const creating = require("../../sequelize/models/db/signinUpmodel");
const bcrypt = require("bcrypt");

dotenv.config();

const table = creating.signinUp;

const login = async (
  req: { body: { email: any; password: any } },
  res: {
    cookie: (arg0: string, arg1: any) => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { token?: any; Error?: string }): void; new (): any };
    };
  },
  next: any
) => {
  const { email, password } = req.body;

  const user = await table.findOne({ where: { email: email } });
  if (user) {
    const password_valid = await bcrypt.compare(password, user.password);
    if (password_valid) {
      const email = user.email;
      const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      console.log(token);
      res.status(200).json({ token: token });
    } else {
      res.status(201).json({ Error: "Password Incorrect" });
    }
  } else {
    res.status(201).json({ Error: "User does not exist" });
  }
};

const register = async (
  req: {
    body: {
      first_name?: any;
      last_name?: any;
      email: any;
      dob?: any;
      password?: any;
    };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: string }): void; new (): any };
      send: { (arg0: string): void; new (): any };
    };
  }
) => {
  try {
    const { email } = req.body;
    const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
    if (jmanRegex.test(email)) {
      const user = await table.findOne({ where: { email: email } });
      if (!user) {
        const salt = await bcrypt.genSalt(10);
        var usr = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          dob: req.body.dob,
          password: await bcrypt.hash(req.body.password, salt),
        };
        const created_user = await table.create(usr);
        res.status(201).json(created_user);
      } else {
        res.status(200).send("User already exists");
      }
    } else {
      res.status(404).send("Email is not valid");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const create = async (req: any, res: any) => {
  try {
    const { email } = req.params;
    const gettingdata = await table.findOne({
      where: {
        email: email,
      },
    });
    res.send(gettingdata);
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

module.exports = { login, register, create };
