import { Request, Response } from "express";
import { AppliedJob } from "../model/userappliedjob";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
        res.status(201).json(applied_job);
      } else {
        res.status(201).json("Already Applied");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export { AppliedjobController };
