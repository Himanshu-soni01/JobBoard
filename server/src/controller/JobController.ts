const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
const creating = require("../sequelize/models");
const join = require("../sequelize/models");
const bcrypt = require("bcrypt");

dotenv.config();

const table_appliedJob = creating.appliedjob;
const table_job = join.job;

export const create = async (req: any, res: any) => {
  try {
    res.send("from");
  } catch (error) {
    res.status(400).send({ message: "duplicate" });
  }
};

export const getappliedjob = async (req: any, res: any) => {
  try {
    const email = req.params;
    const displaydata = await table_appliedJob.findAll({
      where: { email: email },
    });
    if (!displaydata) {
      return res.status(404).json({ message: "User not Found" });
    }

    const appliedjob = await table_job.findAll({
      where: { job_id: displaydata.job_id },
    });

    res.send(appliedjob);
  } catch (error) {
    console.log(error);
  }
};
