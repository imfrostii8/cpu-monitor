import express from 'express';
import controller from '../controllers/cpuController';
const router = express.Router();

router.get('/cpu-info', controller.getCpuInfo);


export default router;