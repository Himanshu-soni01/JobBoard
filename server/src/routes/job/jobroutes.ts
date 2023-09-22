import express from "express";
import { create, getappliedjob } from "../../controller/JobController";
import {verifyuser} from "../../middleware/authentication";

var router = express.Router();

router.get("/",verifyuser, create);

router.get("/getjob/:email", getappliedjob);

export default router;
