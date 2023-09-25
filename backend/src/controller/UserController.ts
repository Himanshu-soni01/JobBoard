import { Request, Response } from "express";
import { User } from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  public async signup(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const jmanRegex = /^[a-zA-Z0-9._%+-]+@jmangroup\.com$/;
      if (jmanRegex.test(email)) {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
          var usr = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            dob: req.body.dob,
            password: await bcrypt.hash(req.body.password, 10),
          };
          const created_user = await User.create(usr);
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
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email },
      });
      if (!user) {
        res
          .status(401)
          .json({ error: "Authentication failed. User not found." });
        return;
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        // const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
        //   expiresIn: "1d",
        // });
        // res.cookie("token", token);
        // console.log(token);
        // res.status(200).json({ token: token });
        res.status(200).json({ message: "Login Success" });
        console.log("Respones Send");
      } else {
        res.status(201).json({ Error: "Password Incorrect" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export { UserController };
