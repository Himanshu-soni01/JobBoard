import express from "express";

// const {}

import { getappliedjob } from "../../controller/JobController";

var router = express.Router();

router.use(`/getappliedjob/:email`, getappliedjob);

export default router;
