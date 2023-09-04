import { Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { IOpenaiSchema } from '../interfaces/openaiSchema.interface';

export const openaiController = (req: ValidatedRequest<IOpenaiSchema>, res: Response) => {
    try {
        res.json({
            test: "hello world"
        })
    } catch (error) {
        res.status(500).json({ error: '500 Server error' });
    }
};