"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_1 = require("../model/job");
class JobController {
    async jobPost(req, res) {
        try {
            let { title, description, company, location, salary, postedBy } = req.body;
            let availableJob = await job_1.Job.findOne({
                where: { email: postedBy, title: title, company: company },
            });
            if (!availableJob) {
                var job_details = {
                    title: title,
                    description: description,
                    company: company,
                    location: location,
                    salary: parseInt(salary),
                    postedby: postedBy,
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
}
exports.JobController = JobController;
