import { Request, Response } from "express";
import { AppliedJob } from "../model/userappliedjob";
import { Job } from "../model/job";

class AppliedjobController {
  public async appliedJob(req: Request, res: Response) {
    try {
      let { title, description, company, location, salary, appliedBy } =
        req.body;

      let availableJob = await AppliedJob.findOne({
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
        const applied_job = await AppliedJob.create(applied_job_details);
        res.status(201).json({ data: applied_job });
      } else {
        res.status(201).json("Already Applied");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async getAppliedJob(req: Request, res: Response) {
    try {
      var { email } = req.body;
      var get_applied_job = await AppliedJob.findAll({
        where: {
          appliedBy: email,
        },
      });
      res.status(201).json({ data: get_applied_job });
    } catch (error) {
      throw error;
    }
  }

  public async getAdminJob(req: Request, res: Response) {
    try {
      var { email } = req.body;
      var get_admin_jobs = await Job.findAll({
        where: {
          postedBy: email,
        },
      });
      res.status(201).json({ data: get_admin_jobs });
    } catch (error) {
      throw error;
    }
  }
}

export { AppliedjobController };
