import { Request, Response } from "express";
import { Job } from "../model/job";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class JobController {
  public async jobPost(req: Request, res: Response) {
    try {
      let { title, description, company, location, salary, postedBy } =
        req.body;

      let availableJob = await Job.findOne({
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
}

export { JobController };
