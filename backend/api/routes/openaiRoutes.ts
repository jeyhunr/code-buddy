import express from 'express';
import { openaiController } from '../controllers/openaiController';

const router = express.Router();

router.post('/review-code', openaiController);

export default router;