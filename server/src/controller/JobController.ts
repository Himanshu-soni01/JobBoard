const jwt = require("jsonwebtoken");
import dotenv from "dotenv";
const creating = require("../sequelize/models");
const join = require("../sequelize/models")
const bcrypt = require("bcrypt");

dotenv.config();

const table_appliedJob = creating.appliedjob;
const table_job = join.job;

const create = async (req: any, res: { send: (arg0: string) => void; status: (arg0: number) => { (): any; new(): any; send: { (arg0: { message: string; }): void; new(): any; }; }; }) => {
    try {
        res.send("from");
    } catch (error) {
        res.status(400).send({ message: "duplicate" });
    }
};

const getappliedjob = async (req: { params: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; send: (arg0: any) => void; }) => {
    try {
        const email = req.params;
        const displaydata = await table_appliedJob.findAll({
            where: { email: email },
        })
        if (!displaydata) {
            return res.status(404).json({ message: 'User not Found' });
        }

        const appliedjob = await table_job.findAll({
            where: { job_id: displaydata.job_id }
        })

        res.send(appliedjob);
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { create, getappliedjob }