import express from 'express';
import * as Joi from 'joi';
import { createValidator } from 'express-joi-validation';
import { openaiController } from '../controllers/openaiController';

const validator = createValidator();

const openaiSchema = Joi.object({
    code: Joi.string().required()
});

const router = express.Router();

router.post('/review-code', validator.body(openaiSchema), openaiController);

export default router;