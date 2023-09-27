"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppliedjobController = void 0;
const userappliedjob_1 = require("../model/userappliedjob");
const job_1 = require("../model/job");
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
                res.status(201).json({ data: applied_job });
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
            var { email } = req.params;
            var get_applied_job = await userappliedjob_1.AppliedJob.findAll({
                where: {
                    appliedBy: email,
                },
            });
            res.status(201).json({ data: get_applied_job });
        }
        catch (error) {
            throw error;
        }
    }
    async getAdminJob(req, res) {
        try {
            var { email } = req.params;
            var get_admin_jobs = await job_1.Job.findAll({
                where: {
                    postedBy: email,
                },
            });
            res.status(201).json({ data: get_admin_jobs });
        }
        catch (error) {
            throw error;
        }
    }
}
exports.AppliedjobController = AppliedjobController;
