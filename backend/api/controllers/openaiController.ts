import { Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { IOpenaiSchema } from '../interfaces/openaiSchema.interface';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const openaiController = async (req: ValidatedRequest<IOpenaiSchema>, res: Response): Promise<any> => {
    const { code } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: `Review this code: \t ${code}` }],
            model: 'gpt-3.5-turbo',
        });

        return completion.choices;
    } catch (error) {
        res.status(500).json({ message: error });
    }
};