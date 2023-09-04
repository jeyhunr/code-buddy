import { Request, Response } from 'express';
import * as Joi from 'joi';

// Validatio
const schema = Joi.object({
    code: Joi.string().required(),
});

export const openaiController = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(500).json({ error: '500 Server error' });
    }
};