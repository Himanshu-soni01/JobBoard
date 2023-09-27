"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_1 = require("../model/job");
const userappliedjob_1 = require("../model/userappliedjob");
class JobController {
    async jobPost(req, res) {
        console.log("Request Getting in backend");
        try {
            let { title, company, location, description, salary } = req.body;
            var email = req.body.email;
            console.log(title, company, location, description, salary, email);
            let availableJob = await job_1.Job.findOne({
                where: { postedBy: email, title: title, company: company },
            });
            if (!availableJob) {
                var job_details = {
                    title: title,
                    description: description,
                    company: company,
                    location: location,
                    salary: parseInt(salary),
                    postedby: email,
                };
                const created_job = await job_1.Job.create(job_details);
                res.status(201).json(created_job);
            }
            else {
                res.status(201).json("Job Already Exists");
            }
        }
        catch (error) {
            console.log("Error creating Job", error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
    async fetchAllJob(req, res) {
        try {
            var get_all_jobs = await job_1.Job.findAll();
            res.status(200).json({ data: get_all_jobs });
        }
        catch (error) {
            throw error;
        }
    }
    async userAppliedJob(req, res) {
        try {
            var jobId = req.params;
            var user_email = req.body.email;
            var get_job_data = await job_1.Job.findOne({
                where: {
                    id: jobId.job_id,
                },
            });
            var job_data = {
                id: get_job_data.dataValues.id,
                title: get_job_data.dataValues.title,
                company: get_job_data.dataValues.company,
                location: get_job_data.dataValues.location,
                description: get_job_data.dataValues.description,
                salary: get_job_data.dataValues.salary,
                appliedBy: user_email,
            };
            var check_applied_data = await userappliedjob_1.AppliedJob.findOne({
                where: {
                    id: jobId.job_id,
                },
            });
            console.log("cap", check_applied_data);
            if (!check_applied_data) {
                await userappliedjob_1.AppliedJob.create(job_data);
                res.status(200).json({ message: "Applied Successfully" });
            }
            else {
                res.status(201).json({ message: "Already Applied" });
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.JobController = JobController;
