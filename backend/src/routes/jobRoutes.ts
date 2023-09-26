import { Router } from "express";
import { JobController } from "../controller/JobController";
import { AppliedjobController } from "../controller/AppliedJobController";

const router = Router();
const jobController = new JobController();
const appliedjobController = new AppliedjobController();

router.get("/api/job/getalljob", jobController.fetchAllJob);
router.post("/api/job/addjob", jobController.jobPost);
router.post(
  "/api/job/getappliedjob/:email",
  appliedjobController.getAppliedJob
);
router.get("/api/job/getadminjobs/:email", appliedjobController.getAdminJob);

export { router };
