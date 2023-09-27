import { Request, Response } from "express";
import { Job } from "../model/job";
import { AppliedJob } from "../model/userappliedjob";

class JobController {
  public async jobPost(req: Request, res: Response) {
    console.log("Request Getting in backend");

    try {
      let { title, company, location, description, salary } = req.body;
      var email = req.body.email;
      console.log(title, company, location, description, salary, email);

      let availableJob = await Job.findOne({
        where: { postedBy: email, title: title, company: company },
      });

      if (!availableJob) {
        var job_details = {
          title: title,
          company: company,
          location: location,
          description: description,
          salary: salary,
          postedBy: email,
        };
        const created_job = await Job.create(job_details);
        res.status(201).json(created_job);
      } else {
        res.status(201).json("Job Already Exists");
      }
    } catch (error) {
      console.log("Error creating Job", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async fetchAllJob(req: Request, res: Response) {
    try {
      var get_all_jobs = await Job.findAll();
      res.status(200).json({ data: get_all_jobs });
    } catch (error) {
      throw error;
    }
  }

  public async userAppliedJob(req: Request, res: Response) {
    try {
      var jobId = req.params;
      var user_email = req.body.email;
      var get_job_data = await Job.findOne({
        where: {
          id: jobId.job_id,
        },
      });
      var job_data = {
        id: get_job_data!.dataValues.id,
        title: get_job_data!.dataValues.title,
        company: get_job_data!.dataValues.company,
        location: get_job_data!.dataValues.location,
        description: get_job_data!.dataValues.description,
        salary: get_job_data!.dataValues.salary,
        appliedBy: user_email,
      };

      var check_applied_data = await AppliedJob.findOne({
        where: {
          id: jobId.job_id,
        },
      });
      console.log("cap", check_applied_data);

      if (!check_applied_data) {
        await AppliedJob.create(job_data);
        res.status(200).json({ message: "Applied Successfully" });
      } else {
        res.status(201).json({ message: "Already Applied" });
      }
    } catch (error) {
      throw error;
    }
  }
}

export { JobController };
