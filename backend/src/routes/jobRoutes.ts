import { Router } from "express";
import { JobController } from "../controller/JobController";
import { AppliedjobController } from "../controller/AppliedJobController";

const router = Router();
const jobController = new JobController();
const appliedjobController = new AppliedjobController();

router.post("/api/job", jobController.jobPost);
router.post("/api/job/addjob", jobController.jobPost);
router.post("/api/job/appliedjob", appliedjobController.appliedJob);

export { router };
