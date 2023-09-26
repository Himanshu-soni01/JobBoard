"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppliedjobController = void 0;
const userappliedjob_1 = require("../model/userappliedjob");
class AppliedjobController {
    async appliedJob(req, res) {
        try {
            let { title, description, company, location, salary, appliedBy } = req.body;
            let availableJob = await userappliedjob_1.AppliedJob.findOne({
                where: { appliedBy: appliedBy, title: title, company: company },
            });
            if (!availableJob) {
                var applied_job_details = {
                    title: title,
                    description: description,
                    company: company,
                    location: location,
                    salary: parseInt(salary),
                    appliedBy: appliedBy,
                };
                const applied_job = await userappliedjob_1.AppliedJob.create(applied_job_details);
                res.status(201).json(applied_job);
            }
            else {
                res.status(201).json("Already Applied");
            }
        }
        catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
    async getAppliedJob(req, res) {
        try {
            var { email } = req.body;
            var get_applied_job = await userappliedjob_1.AppliedJob.findAll({
                where: {
                    appliedBy: email,
                },
            });
            res.send(get_applied_job);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.AppliedjobController = AppliedjobController;
